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
    chatterish_pb.SignInResponse,
    (request: chatterish_pb.UserCredentials) => {
      return request.serializeBinary();
    },
    chatterish_pb.SignInResponse.deserializeBinary
  );

  signUserIn(
    request: chatterish_pb.UserCredentials,
    metadata: grpcWeb.Metadata | null): Promise<chatterish_pb.SignInResponse>;

  signUserIn(
    request: chatterish_pb.UserCredentials,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chatterish_pb.SignInResponse) => void): grpcWeb.ClientReadableStream<chatterish_pb.SignInResponse>;

  signUserIn(
    request: chatterish_pb.UserCredentials,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chatterish_pb.SignInResponse) => void) {
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

  methodInfoUpdatePassword = new grpcWeb.MethodDescriptor(
    '/chatterish.AuthService/UpdatePassword',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.UpdatePasswordRequest,
    chatterish_pb.UpdateResponse,
    (request: chatterish_pb.UpdatePasswordRequest) => {
      return request.serializeBinary();
    },
    chatterish_pb.UpdateResponse.deserializeBinary
  );

  updatePassword(
    request: chatterish_pb.UpdatePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<chatterish_pb.UpdateResponse>;

  updatePassword(
    request: chatterish_pb.UpdatePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chatterish_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<chatterish_pb.UpdateResponse>;

  updatePassword(
    request: chatterish_pb.UpdatePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chatterish_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.AuthService/UpdatePassword',
        request,
        metadata || {},
        this.methodInfoUpdatePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.AuthService/UpdatePassword',
    request,
    metadata || {},
    this.methodInfoUpdatePassword);
  }

  methodInfoUpdateEmail = new grpcWeb.MethodDescriptor(
    '/chatterish.AuthService/UpdateEmail',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.UpdateEmailRequest,
    chatterish_pb.UpdateResponse,
    (request: chatterish_pb.UpdateEmailRequest) => {
      return request.serializeBinary();
    },
    chatterish_pb.UpdateResponse.deserializeBinary
  );

  updateEmail(
    request: chatterish_pb.UpdateEmailRequest,
    metadata: grpcWeb.Metadata | null): Promise<chatterish_pb.UpdateResponse>;

  updateEmail(
    request: chatterish_pb.UpdateEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chatterish_pb.UpdateResponse) => void): grpcWeb.ClientReadableStream<chatterish_pb.UpdateResponse>;

  updateEmail(
    request: chatterish_pb.UpdateEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chatterish_pb.UpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.AuthService/UpdateEmail',
        request,
        metadata || {},
        this.methodInfoUpdateEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.AuthService/UpdateEmail',
    request,
    metadata || {},
    this.methodInfoUpdateEmail);
  }

}

