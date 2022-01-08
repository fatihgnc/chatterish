import grpc from '@grpc/grpc-js';
import { Token } from '../../proto/chatterish/Token';
import { User__Output } from '../../proto/chatterish/User';
import { UserCredentials__Output } from '../../proto/chatterish/UserCredentials';
import { Empty } from '../../proto/google/protobuf/Empty';
import { userSchema } from '../../schemas/user-schema';

export async function signUserUp(
    call: grpc.ServerUnaryCall<User__Output, Empty>
): Promise<void> {
    const user = call.request;

    const { value, error } = userSchema.validate(user);

    if (!error) return console.error(error);
    console.log(value);
}

export async function signUserIn(
    call: grpc.ServerUnaryCall<UserCredentials__Output, Token>
): Promise<void> {}
