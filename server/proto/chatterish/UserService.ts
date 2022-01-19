// Original file: chatterish.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UpdateEmailRequest as _chatterish_UpdateEmailRequest, UpdateEmailRequest__Output as _chatterish_UpdateEmailRequest__Output } from '../chatterish/UpdateEmailRequest';
import type { UpdatePasswordRequest as _chatterish_UpdatePasswordRequest, UpdatePasswordRequest__Output as _chatterish_UpdatePasswordRequest__Output } from '../chatterish/UpdatePasswordRequest';
import type { UpdateResponse as _chatterish_UpdateResponse, UpdateResponse__Output as _chatterish_UpdateResponse__Output } from '../chatterish/UpdateResponse';

export interface UserServiceClient extends grpc.Client {
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

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  UpdateEmail: grpc.handleUnaryCall<_chatterish_UpdateEmailRequest__Output, _chatterish_UpdateResponse>;
  
  UpdatePassword: grpc.handleUnaryCall<_chatterish_UpdatePasswordRequest__Output, _chatterish_UpdateResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  UpdateEmail: MethodDefinition<_chatterish_UpdateEmailRequest, _chatterish_UpdateResponse, _chatterish_UpdateEmailRequest__Output, _chatterish_UpdateResponse__Output>
  UpdatePassword: MethodDefinition<_chatterish_UpdatePasswordRequest, _chatterish_UpdateResponse, _chatterish_UpdatePasswordRequest__Output, _chatterish_UpdateResponse__Output>
}
