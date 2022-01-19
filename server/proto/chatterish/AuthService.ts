// Original file: chatterish.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { SignInResponse as _chatterish_SignInResponse, SignInResponse__Output as _chatterish_SignInResponse__Output } from '../chatterish/SignInResponse';
import type { Token as _chatterish_Token, Token__Output as _chatterish_Token__Output } from '../chatterish/Token';
import type { User as _chatterish_User, User__Output as _chatterish_User__Output } from '../chatterish/User';
import type { UserCredentials as _chatterish_UserCredentials, UserCredentials__Output as _chatterish_UserCredentials__Output } from '../chatterish/UserCredentials';

export interface AuthServiceClient extends grpc.Client {
  CheckToken(argument: _chatterish_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CheckToken(argument: _chatterish_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CheckToken(argument: _chatterish_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  CheckToken(argument: _chatterish_Token, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  checkToken(argument: _chatterish_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  checkToken(argument: _chatterish_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  checkToken(argument: _chatterish_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  checkToken(argument: _chatterish_Token, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  SignUserIn(argument: _chatterish_UserCredentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  SignUserIn(argument: _chatterish_UserCredentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  SignUserIn(argument: _chatterish_UserCredentials, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  SignUserIn(argument: _chatterish_UserCredentials, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _chatterish_UserCredentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _chatterish_UserCredentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _chatterish_UserCredentials, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  signUserIn(argument: _chatterish_UserCredentials, callback: grpc.requestCallback<_chatterish_SignInResponse__Output>): grpc.ClientUnaryCall;
  
  SignUserUp(argument: _chatterish_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SignUserUp(argument: _chatterish_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SignUserUp(argument: _chatterish_User, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SignUserUp(argument: _chatterish_User, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _chatterish_User, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _chatterish_User, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _chatterish_User, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  signUserUp(argument: _chatterish_User, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  CheckToken: grpc.handleUnaryCall<_chatterish_Token__Output, _google_protobuf_Empty>;
  
  SignUserIn: grpc.handleUnaryCall<_chatterish_UserCredentials__Output, _chatterish_SignInResponse>;
  
  SignUserUp: grpc.handleUnaryCall<_chatterish_User__Output, _google_protobuf_Empty>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  CheckToken: MethodDefinition<_chatterish_Token, _google_protobuf_Empty, _chatterish_Token__Output, _google_protobuf_Empty__Output>
  SignUserIn: MethodDefinition<_chatterish_UserCredentials, _chatterish_SignInResponse, _chatterish_UserCredentials__Output, _chatterish_SignInResponse__Output>
  SignUserUp: MethodDefinition<_chatterish_User, _google_protobuf_Empty, _chatterish_User__Output, _google_protobuf_Empty__Output>
}
