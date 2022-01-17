// Original file: chatterish.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { SignInResponse as _chatterish_SignInResponse, SignInResponse__Output as _chatterish_SignInResponse__Output } from '../chatterish/SignInResponse';
import type { UpdateEmailRequest as _chatterish_UpdateEmailRequest, UpdateEmailRequest__Output as _chatterish_UpdateEmailRequest__Output } from '../chatterish/UpdateEmailRequest';
import type { UpdatePasswordRequest as _chatterish_UpdatePasswordRequest, UpdatePasswordRequest__Output as _chatterish_UpdatePasswordRequest__Output } from '../chatterish/UpdatePasswordRequest';
import type { UpdateResponse as _chatterish_UpdateResponse, UpdateResponse__Output as _chatterish_UpdateResponse__Output } from '../chatterish/UpdateResponse';
import type { User as _chatterish_User, User__Output as _chatterish_User__Output } from '../chatterish/User';
import type { UserCredentials as _chatterish_UserCredentials, UserCredentials__Output as _chatterish_UserCredentials__Output } from '../chatterish/UserCredentials';

export interface AuthServiceClient extends grpc.Client {
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
  
  UpdateEmail(argument: _chatterish_UpdateEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmail(argument: _chatterish_UpdateEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmail(argument: _chatterish_UpdateEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  UpdateEmail(argument: _chatterish_UpdateEmailRequest, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updateEmail(argument: _chatterish_UpdateEmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updateEmail(argument: _chatterish_UpdateEmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updateEmail(argument: _chatterish_UpdateEmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updateEmail(argument: _chatterish_UpdateEmailRequest, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  
  UpdatePassword(argument: _chatterish_UpdatePasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _chatterish_UpdatePasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _chatterish_UpdatePasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _chatterish_UpdatePasswordRequest, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _chatterish_UpdatePasswordRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _chatterish_UpdatePasswordRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _chatterish_UpdatePasswordRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _chatterish_UpdatePasswordRequest, callback: grpc.requestCallback<_chatterish_UpdateResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  SignUserIn: grpc.handleUnaryCall<_chatterish_UserCredentials__Output, _chatterish_SignInResponse>;
  
  SignUserUp: grpc.handleUnaryCall<_chatterish_User__Output, _google_protobuf_Empty>;
  
  UpdateEmail: grpc.handleUnaryCall<_chatterish_UpdateEmailRequest__Output, _chatterish_UpdateResponse>;
  
  UpdatePassword: grpc.handleUnaryCall<_chatterish_UpdatePasswordRequest__Output, _chatterish_UpdateResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  SignUserIn: MethodDefinition<_chatterish_UserCredentials, _chatterish_SignInResponse, _chatterish_UserCredentials__Output, _chatterish_SignInResponse__Output>
  SignUserUp: MethodDefinition<_chatterish_User, _google_protobuf_Empty, _chatterish_User__Output, _google_protobuf_Empty__Output>
  UpdateEmail: MethodDefinition<_chatterish_UpdateEmailRequest, _chatterish_UpdateResponse, _chatterish_UpdateEmailRequest__Output, _chatterish_UpdateResponse__Output>
  UpdatePassword: MethodDefinition<_chatterish_UpdatePasswordRequest, _chatterish_UpdateResponse, _chatterish_UpdatePasswordRequest__Output, _chatterish_UpdateResponse__Output>
}
