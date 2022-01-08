import * as grpc from '@grpc/grpc-js';
import * as loader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/chatterish';
import { AuthServiceHandlers } from './proto/chatterish/AuthService';
import { userSchema } from './schemas/user-schema';
import { connect } from 'mongoose';

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
    SignUserIn: async (call, res) => {},
    SignUserUp: async (call, res) => {},
} as AuthServiceHandlers);
