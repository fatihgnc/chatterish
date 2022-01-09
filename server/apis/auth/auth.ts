import grpc from '@grpc/grpc-js';
import jwt from 'jsonwebtoken';
import { Token } from '../../proto/chatterish/Token';
import { User__Output } from '../../proto/chatterish/User';
import { UserCredentials__Output } from '../../proto/chatterish/UserCredentials';
import { Empty } from '../../proto/google/protobuf/Empty';
import { userSchema } from '../../schemas/user-schema';
import { User } from '../../models/user';
import bcrypt from 'bcryptjs';

export async function signUserUpHandler(
    call: grpc.ServerUnaryCall<User__Output, Empty>,
    res: grpc.sendUnaryData<Empty>
): Promise<void> {
    console.log('caught sign up call!!!!');
    const { birthdate, email, nationality, password, username } = call.request;

    if (!birthdate || !email || !nationality || !password || !username)
        return res({
            code: 400,
            message:
                'Username, password, email, nationality and password are all required fields!',
        });

    try {
        const userDoesExist = await User.findOne({ username }).exec();

        if (userDoesExist)
            return res({ code: 400, message: 'This username already exists!' });

        const userFromClient = call.request;

        const { value, error } = userSchema.validate(userFromClient);

        if (error) return res({ code: 400, message: error.details[0].message });

        userFromClient.password = bcrypt.hashSync(
            userFromClient.password as string
        );

        const user = new User(userFromClient);

        await user.save();
        console.log('User saved to database successfully!');
        res(null);
    } catch (error) {
        throw error;
    }
}

export async function signUserInHandler(
    call: grpc.ServerUnaryCall<UserCredentials__Output, Token>,
    res: grpc.sendUnaryData<Token>
): Promise<void> {
    console.log('caught sign in call!!!!');
    const { usernameOrEmail, password } = call.request;

    if (!usernameOrEmail || !password)
        return res({
            code: 400,
            message: 'Username/email and password are required!',
        });

    try {
        const userFromDb = await User.findOne({ usernameOrEmail }).exec();

        if (!userFromDb)
            return res({ code: 400, message: "User doesn't exist!" });

        const didPasswordMatch = bcrypt.compareSync(
            password,
            userFromDb.password
        );

        if (!didPasswordMatch)
            return res({ code: 400, message: 'Incorrect credentials!' });

        const token = jwt.sign({ ...userFromDb }, 'mykey', {
            expiresIn: '10m',
        });

        console.log('Signed in successfully!');

        res(null, { token });
    } catch (error) {
        throw error;
    }
}
