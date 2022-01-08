import grpc from '@grpc/grpc-js';
import { Token } from '../../proto/chatterish/Token';
import { User__Output } from '../../proto/chatterish/User';
import { UserCredentials__Output } from '../../proto/chatterish/UserCredentials';
import { Empty } from '../../proto/google/protobuf/Empty';

export async function signUserUp(
    call: grpc.ServerUnaryCall<UserCredentials__Output, Empty>
): Promise<void> {}

export async function signUserIn(
    call: grpc.ServerUnaryCall<User__Output, Token>
): Promise<void> {}
