// Original file: chatterish.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { GetMatchesResponse as _chatterish_GetMatchesResponse, GetMatchesResponse__Output as _chatterish_GetMatchesResponse__Output } from '../chatterish/GetMatchesResponse';
import type { Match as _chatterish_Match, Match__Output as _chatterish_Match__Output } from '../chatterish/Match';
import type { UpdateEmailRequest as _chatterish_UpdateEmailRequest, UpdateEmailRequest__Output as _chatterish_UpdateEmailRequest__Output } from '../chatterish/UpdateEmailRequest';
import type { UpdatePasswordRequest as _chatterish_UpdatePasswordRequest, UpdatePasswordRequest__Output as _chatterish_UpdatePasswordRequest__Output } from '../chatterish/UpdatePasswordRequest';
import type { UpdateResponse as _chatterish_UpdateResponse, UpdateResponse__Output as _chatterish_UpdateResponse__Output } from '../chatterish/UpdateResponse';
import type { Username as _chatterish_Username, Username__Output as _chatterish_Username__Output } from '../chatterish/Username';

export interface UserServiceClient extends grpc.Client {
  AddUserToMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddUserToMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddUserToMatchPool(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  AddUserToMatchPool(argument: _chatterish_Username, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addUserToMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addUserToMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addUserToMatchPool(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  addUserToMatchPool(argument: _chatterish_Username, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  GetMatches(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  GetMatches(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  GetMatches(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  GetMatches(argument: _chatterish_Username, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  getMatches(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  getMatches(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  getMatches(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  getMatches(argument: _chatterish_Username, callback: grpc.requestCallback<_chatterish_GetMatchesResponse__Output>): grpc.ClientUnaryCall;
  
  MatchUser(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  MatchUser(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  MatchUser(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  MatchUser(argument: _chatterish_Username, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  matchUser(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  matchUser(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  matchUser(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  matchUser(argument: _chatterish_Username, callback: grpc.requestCallback<_chatterish_Match__Output>): grpc.ClientUnaryCall;
  
  RemoveUserFromMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  RemoveUserFromMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  RemoveUserFromMatchPool(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  RemoveUserFromMatchPool(argument: _chatterish_Username, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  removeUserFromMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  removeUserFromMatchPool(argument: _chatterish_Username, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  removeUserFromMatchPool(argument: _chatterish_Username, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  removeUserFromMatchPool(argument: _chatterish_Username, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
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
  AddUserToMatchPool: grpc.handleUnaryCall<_chatterish_Username__Output, _google_protobuf_Empty>;
  
  GetMatches: grpc.handleUnaryCall<_chatterish_Username__Output, _chatterish_GetMatchesResponse>;
  
  MatchUser: grpc.handleUnaryCall<_chatterish_Username__Output, _chatterish_Match>;
  
  RemoveUserFromMatchPool: grpc.handleUnaryCall<_chatterish_Username__Output, _google_protobuf_Empty>;
  
  UpdateEmail: grpc.handleUnaryCall<_chatterish_UpdateEmailRequest__Output, _chatterish_UpdateResponse>;
  
  UpdatePassword: grpc.handleUnaryCall<_chatterish_UpdatePasswordRequest__Output, _chatterish_UpdateResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  AddUserToMatchPool: MethodDefinition<_chatterish_Username, _google_protobuf_Empty, _chatterish_Username__Output, _google_protobuf_Empty__Output>
  GetMatches: MethodDefinition<_chatterish_Username, _chatterish_GetMatchesResponse, _chatterish_Username__Output, _chatterish_GetMatchesResponse__Output>
  MatchUser: MethodDefinition<_chatterish_Username, _chatterish_Match, _chatterish_Username__Output, _chatterish_Match__Output>
  RemoveUserFromMatchPool: MethodDefinition<_chatterish_Username, _google_protobuf_Empty, _chatterish_Username__Output, _google_protobuf_Empty__Output>
  UpdateEmail: MethodDefinition<_chatterish_UpdateEmailRequest, _chatterish_UpdateResponse, _chatterish_UpdateEmailRequest__Output, _chatterish_UpdateResponse__Output>
  UpdatePassword: MethodDefinition<_chatterish_UpdatePasswordRequest, _chatterish_UpdateResponse, _chatterish_UpdatePasswordRequest__Output, _chatterish_UpdateResponse__Output>
}
