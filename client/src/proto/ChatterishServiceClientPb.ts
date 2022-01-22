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

  methodInfoCheckToken = new grpcWeb.MethodDescriptor(
    '/chatterish.AuthService/CheckToken',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.Token,
    google_protobuf_empty_pb.Empty,
    (request: chatterish_pb.Token) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  checkToken(
    request: chatterish_pb.Token,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  checkToken(
    request: chatterish_pb.Token,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  checkToken(
    request: chatterish_pb.Token,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.AuthService/CheckToken',
        request,
        metadata || {},
        this.methodInfoCheckToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.AuthService/CheckToken',
    request,
    metadata || {},
    this.methodInfoCheckToken);
  }

  methodInfoRefreshToken = new grpcWeb.MethodDescriptor(
    '/chatterish.AuthService/RefreshToken',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.Token,
    chatterish_pb.Token,
    (request: chatterish_pb.Token) => {
      return request.serializeBinary();
    },
    chatterish_pb.Token.deserializeBinary
  );

  refreshToken(
    request: chatterish_pb.Token,
    metadata: grpcWeb.Metadata | null): Promise<chatterish_pb.Token>;

  refreshToken(
    request: chatterish_pb.Token,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chatterish_pb.Token) => void): grpcWeb.ClientReadableStream<chatterish_pb.Token>;

  refreshToken(
    request: chatterish_pb.Token,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chatterish_pb.Token) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.AuthService/RefreshToken',
        request,
        metadata || {},
        this.methodInfoRefreshToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.AuthService/RefreshToken',
    request,
    metadata || {},
    this.methodInfoRefreshToken);
  }

}

export class UserServiceClient {
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

  methodInfoUpdatePassword = new grpcWeb.MethodDescriptor(
    '/chatterish.UserService/UpdatePassword',
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
          '/chatterish.UserService/UpdatePassword',
        request,
        metadata || {},
        this.methodInfoUpdatePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.UserService/UpdatePassword',
    request,
    metadata || {},
    this.methodInfoUpdatePassword);
  }

  methodInfoUpdateEmail = new grpcWeb.MethodDescriptor(
    '/chatterish.UserService/UpdateEmail',
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
          '/chatterish.UserService/UpdateEmail',
        request,
        metadata || {},
        this.methodInfoUpdateEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.UserService/UpdateEmail',
    request,
    metadata || {},
    this.methodInfoUpdateEmail);
  }

  methodInfoAddUserToMatchPool = new grpcWeb.MethodDescriptor(
    '/chatterish.UserService/AddUserToMatchPool',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.Username,
    google_protobuf_empty_pb.Empty,
    (request: chatterish_pb.Username) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  addUserToMatchPool(
    request: chatterish_pb.Username,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  addUserToMatchPool(
    request: chatterish_pb.Username,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addUserToMatchPool(
    request: chatterish_pb.Username,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.UserService/AddUserToMatchPool',
        request,
        metadata || {},
        this.methodInfoAddUserToMatchPool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.UserService/AddUserToMatchPool',
    request,
    metadata || {},
    this.methodInfoAddUserToMatchPool);
  }

  methodInfoRemoveUserFromMatchPool = new grpcWeb.MethodDescriptor(
    '/chatterish.UserService/RemoveUserFromMatchPool',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.Username,
    google_protobuf_empty_pb.Empty,
    (request: chatterish_pb.Username) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  removeUserFromMatchPool(
    request: chatterish_pb.Username,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  removeUserFromMatchPool(
    request: chatterish_pb.Username,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  removeUserFromMatchPool(
    request: chatterish_pb.Username,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.UserService/RemoveUserFromMatchPool',
        request,
        metadata || {},
        this.methodInfoRemoveUserFromMatchPool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.UserService/RemoveUserFromMatchPool',
    request,
    metadata || {},
    this.methodInfoRemoveUserFromMatchPool);
  }

}

export class ChatServiceClient {
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

  methodInfoReceiveMessage = new grpcWeb.MethodDescriptor(
    '/chatterish.ChatService/ReceiveMessage',
    grpcWeb.MethodType.SERVER_STREAMING,
    chatterish_pb.Username,
    chatterish_pb.ChatMessage,
    (request: chatterish_pb.Username) => {
      return request.serializeBinary();
    },
    chatterish_pb.ChatMessage.deserializeBinary
  );

  receiveMessage(
    request: chatterish_pb.Username,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/chatterish.ChatService/ReceiveMessage',
      request,
      metadata || {},
      this.methodInfoReceiveMessage);
  }

  methodInfoSendMessage = new grpcWeb.MethodDescriptor(
    '/chatterish.ChatService/SendMessage',
    grpcWeb.MethodType.UNARY,
    chatterish_pb.ChatMessage,
    google_protobuf_empty_pb.Empty,
    (request: chatterish_pb.ChatMessage) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sendMessage(
    request: chatterish_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: chatterish_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sendMessage(
    request: chatterish_pb.ChatMessage,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/chatterish.ChatService/SendMessage',
        request,
        metadata || {},
        this.methodInfoSendMessage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/chatterish.ChatService/SendMessage',
    request,
    metadata || {},
    this.methodInfoSendMessage);
  }

}

