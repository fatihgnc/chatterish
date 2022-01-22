import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/chatterish';
import { AuthServiceHandlers } from './proto/chatterish/AuthService';
import { connect } from 'mongoose';
import {
    checkToken,
    refreshToken,
    signUserInHandler,
    signUserUpHandler,
} from './controllers/auth';
import {
    addUserToMatchPoolHandler,
    removeUserFromMatchPoolHandler,
    updateEmailHandler,
    updatePasswordHandler,
} from './controllers/user';
import { UserServiceHandlers } from './proto/chatterish/UserService';
import { ChatServiceHandlers } from './proto/chatterish/ChatService';
import { receiveMessageHandler, sendMessageHandler } from './controllers/chat';

connect('mongodb://localhost:27017/chatterish', (err) => {
    if (err) return console.error(err);
    console.log('Successfully connected to Mongo DB!');
});

const PROTO_PATH = './chatterish.proto';
const PORT = 8082;

const packageDef = loader.loadSync(PROTO_PATH, {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const grpcObj = grpc.loadPackageDefinition(
    packageDef
) as unknown as ProtoGrpcType;

const authService = grpcObj.chatterish.AuthService;
const userService = grpcObj.chatterish.UserService;
const chatService = grpcObj.chatterish.ChatService;

const server = new grpc.Server();

server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
        if (err) return console.log(err);

        console.log(`Server is up on PORT: ${port}`);
        server.start();
    }
);

server.addService(authService.service, {
    SignUserIn: signUserInHandler,
    SignUserUp: signUserUpHandler,
    CheckToken: checkToken,
    RefreshToken: refreshToken,
} as AuthServiceHandlers);

server.addService(userService.service, {
    UpdateEmail: updateEmailHandler,
    UpdatePassword: updatePasswordHandler,
    AddUserToMatchPool: addUserToMatchPoolHandler,
    RemoveUserFromMatchPool: removeUserFromMatchPoolHandler,
} as UserServiceHandlers);

server.addService(chatService.service, {
    ReceiveMessage: receiveMessageHandler,
    SendMessage: sendMessageHandler,
} as ChatServiceHandlers);
