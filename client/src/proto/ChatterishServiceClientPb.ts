/**
 * @fileoverview gRPC-Web generated client stub for chatterish
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chatterish_pb from './chatterish_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class AuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSignUserIn = new grpcWeb.MethodDescriptor(
    '/chatterish.AuthService/SignUserIn',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.UserCredentials,
    chatterish_pb.Token,
    (request: chatterish_pb.UserCredentials) => {
      return request.serializeBinary();
    },
    chatterish_pb.Token.deserializeBinary
  );

  signUserIn(
    request: chatterish_pb.UserCredentials,
    metadata: grpcWeb.Metadata | null): Promise<chatterish_pb.Token>;

  signUserIn(
    request: chatterish_pb.UserCredentials,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chatterish_pb.Token) => void): grpcWeb.ClientReadableStream<chatterish_pb.Token>;

  signUserIn(
    request: chatterish_pb.UserCredentials,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chatterish_pb.Token) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.AuthService/SignUserIn',
        request,
        metadata || {},
        this.methodInfoSignUserIn,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.AuthService/SignUserIn',
    request,
    metadata || {},
    this.methodInfoSignUserIn);
  }

  methodInfoSignUserUp = new grpcWeb.MethodDescriptor(
    '/chatterish.AuthService/SignUserUp',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.User,
    google_protobuf_empty_pb.Empty,
    (request: chatterish_pb.User) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  signUserUp(
    request: chatterish_pb.User,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  signUserUp(
    request: chatterish_pb.User,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  signUserUp(
    request: chatterish_pb.User,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.AuthService/SignUserUp',
        request,
        metadata || {},
        this.methodInfoSignUserUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.AuthService/SignUserUp',
    request,
    metadata || {},
    this.methodInfoSignUserUp);
  }

}

