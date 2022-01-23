import jwt from 'jsonwebtoken';
import grpc from '@grpc/grpc-js';
import { UpdatePasswordRequest__Output } from '../proto/chatterish/UpdatePasswordRequest';
import { UpdateResponse } from '../proto/chatterish/UpdateResponse';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';
import { UpdateEmailRequest__Output } from '../proto/chatterish/UpdateEmailRequest';
import { Username__Output } from '../proto/chatterish/Username';
import { Empty } from '../proto/google/protobuf/Empty';
import { Match } from '../proto/chatterish/Match';
import { GetMatchesResponse } from '../proto/chatterish/GetMatchesResponse';

const matchPool: { username: string; isMatching: boolean }[] = [];

// const matchersCountStreamByUsername = new Map<
//     string,
//     grpc.ServerWritableStream<Username__Output, MatchersCount>
// >();

export async function updatePasswordHandler(
    call: grpc.ServerUnaryCall<UpdatePasswordRequest__Output, UpdateResponse>,
    res: grpc.sendUnaryData<UpdateResponse>
) {
    const { confirmPassword, password, token } = call.request;

    if (!token) {
        return res({ code: 401, message: 'You are not authenticated!' });
    }

    if (!confirmPassword || !password) {
        return res({ code: 400, message: 'Passwords are required!' });
    }

    if (confirmPassword !== password) {
        return res({ code: 400, message: 'Passwords do not match!' });
    }

    let user;

    try {
        user = jwt.verify(token, 'mykey') as any;
        console.log('jwt valid!');
    } catch (error: any) {
        return res({ code: 401, message: error.message });
    }

    try {
        const userFromDb = await User.findOne({
            username: user.username,
        }).exec();
        if (bcrypt.compareSync(password, userFromDb.password)) {
            return res({
                code: 400,
                message: "Can't update password to current password!",
            });
        }
        userFromDb.password = bcrypt.hashSync(password);
        await userFromDb.save();
        console.log('updated password');
        const newToken = jwt.sign(userFromDb.toJSON(), 'mykey', {
            expiresIn: '10m',
        });
        res(null, { token: newToken, user: userFromDb });
    } catch (error: any) {
        return res({ code: 500, message: error.message });
    }
}

export async function updateEmailHandler(
    call: grpc.ServerUnaryCall<UpdateEmailRequest__Output, UpdateResponse>,
    res: grpc.sendUnaryData<UpdateResponse>
) {
    const { email, token } = call.request;

    if (!token) {
        return res({ code: 401, message: 'You are not authenticated!' });
    }

    if (!email) {
        return res({ code: 400, message: 'E-mail is required!' });
    }

    let user;

    try {
        user = jwt.verify(token, 'mykey') as any;
        console.log('jwt valid!', user);
    } catch (error: any) {
        return res({ code: 401, message: error.message });
    }

    try {
        const userFromDb = await User.findOne({
            username: user.username,
        }).exec();
        if (userFromDb.email === email) {
            return res({
                code: 400,
                message: "Can't update e-mail to current e-mail!",
            });
        }
        userFromDb.email = email;
        await userFromDb.save();
        console.log('updated e-mail');
        const newToken = jwt.sign(userFromDb.toJSON(), 'mykey', {
            expiresIn: '10m',
        });
        res(null, { token: newToken, user: userFromDb });
    } catch (error: any) {
        return res({ code: 500, message: error.message });
    }
}

// export function matchingUsersCountHandler(
//     call: grpc.ServerWritableStream<Username__Output, MatchersCount>
// ) {
//     console.log('users count stream req handler');
//     const { username } = call.request;
//     matchersCountStreamByUsername.set(username as string, call);
// }

export function addUserToMatchPoolHandler(
    call: grpc.ServerUnaryCall<Username__Output, Empty>,
    res: grpc.sendUnaryData<Empty>
) {
    const { username } = call.request;

    const userIndex = matchPool.findIndex((user) => user.username === username);

    if (userIndex !== -1) {
        matchPool.splice(userIndex, 1);
    }

    matchPool.push({ username: username as string, isMatching: false });

    // matchersCountStreamByUsername.forEach((call) =>
    //     call.write({ currentlyMatchingUsersCount: matchPool.length })
    // );

    console.log('added:' + JSON.stringify(matchPool));

    res(null);
}

export function removeUserFromMatchPoolHandler(
    call: grpc.ServerUnaryCall<Username__Output, Empty>,
    res: grpc.sendUnaryData<Empty>
) {
    const { username } = call.request;

    const userIndex = matchPool.findIndex((user) => user.username === username);

    matchPool.splice(userIndex, 1);
    console.log('removed: ' + JSON.stringify(matchPool));

    // matchersCountStreamByUsername.forEach((call) =>
    //     call.write({ currentlyMatchingUsersCount: matchPool.length })
    // );

    res(null);
}

export async function matchUserHandler(
    call: grpc.ServerUnaryCall<Username__Output, Match>,
    res: grpc.sendUnaryData<Match>
) {
    console.log('caught match user handler');

    const { username } = call.request;

    const senderIndex = matchPool.findIndex(
        (user) => user.username === username
    );

    if (senderIndex === -1) {
        return res({ code: 400, message: 'you are not in the pool' });
    }

    matchPool[senderIndex].isMatching = true;
    console.log(matchPool);

    setTimeout(async () => {
        while (true) {
            const receiverCandidateIndex = Math.floor(
                Math.random() * matchPool.length
            );

            const receiverCandidate = matchPool[receiverCandidateIndex];

            if (
                !receiverCandidate ||
                receiverCandidate.isMatching === false ||
                receiverCandidate.username === username
            ) {
                continue;
            } else {
                console.log('Match Pool: ' + JSON.stringify(matchPool));
                console.log('Receiver: ' + JSON.stringify(receiverCandidate));

                try {
                    const user = await User.findOne({ username }).exec();
                    user.matches.push({
                        username: receiverCandidate.username,
                        date: new Date().toISOString(),
                    });
                    await user.save();
                } catch (error) {
                    console.log(error);
                }

                matchPool[receiverCandidateIndex].isMatching = false;
                matchPool[senderIndex].isMatching = false;
                return res(null, {
                    receiver: receiverCandidate.username,
                    sender: username,
                });
            }
        }
    }, 3000);
}

export async function getMatchesHandler(
    call: grpc.ServerUnaryCall<Username__Output, GetMatchesResponse>,
    res: grpc.sendUnaryData<GetMatchesResponse>
) {
    const { username } = call.request;

    try {
        const user = await User.findOne({ username }).exec();
        console.log(user.matches);
        res(null, { matches: user.matches });
    } catch (error: any) {
        res({ code: 500, message: error.message });
    }
}
