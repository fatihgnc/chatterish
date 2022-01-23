import grpc from '@grpc/grpc-js';
import {
    ChatMessage,
    ChatMessage__Output,
} from '../proto/chatterish/ChatMessage';
import { Username__Output } from '../proto/chatterish/Username';
import { Empty } from '../proto/google/protobuf/Empty';

const messageStreamByUsername = new Map<
    string,
    grpc.ServerWritableStream<Username__Output, ChatMessage>
>();

export async function receiveMessageHandler(
    call: grpc.ServerWritableStream<Username__Output, ChatMessage>
) {
    console.log('receive message handler!!');
    const { username } = call.request;

    if (!username) {
        call.end();
    }

    messageStreamByUsername.set(username as string, call);
}

export async function sendMessageHandler(
    call: grpc.ServerUnaryCall<ChatMessage__Output, Empty>,
    res: grpc.sendUnaryData<Empty>
) {
    console.log('caught send message request!!!');
    const { msg, sender, time, receiver } = call.request;

    if (!msg || !sender || !time || !receiver) {
        return res({
            code: 400,
            message: 'Message is required!',
        });
    }

    messageStreamByUsername.forEach((call, username) => {
        if (username === sender || username === receiver) {
            call.write({ msg, sender, receiver, time });
        }
    });

    res(null, {});
}
