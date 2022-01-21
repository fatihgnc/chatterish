// Original file: chatterish.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatMessage as _chatterish_ChatMessage, ChatMessage__Output as _chatterish_ChatMessage__Output } from '../chatterish/ChatMessage';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { Username as _chatterish_Username, Username__Output as _chatterish_Username__Output } from '../chatterish/Username';

export interface ChatServiceClient extends grpc.Client {
  ReceiveMessage(argument: _chatterish_Username, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatterish_ChatMessage__Output>;
  ReceiveMessage(argument: _chatterish_Username, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatterish_ChatMessage__Output>;
  receiveMessage(argument: _chatterish_Username, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatterish_ChatMessage__Output>;
  receiveMessage(argument: _chatterish_Username, options?: grpc.CallOptions): grpc.ClientReadableStream<_chatterish_ChatMessage__Output>;
  
  SendMessage(argument: _chatterish_ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatterish_ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatterish_ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  SendMessage(argument: _chatterish_ChatMessage, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatterish_ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatterish_ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatterish_ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  sendMessage(argument: _chatterish_ChatMessage, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  ReceiveMessage: grpc.handleServerStreamingCall<_chatterish_Username__Output, _chatterish_ChatMessage>;
  
  SendMessage: grpc.handleUnaryCall<_chatterish_ChatMessage__Output, _google_protobuf_Empty>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  ReceiveMessage: MethodDefinition<_chatterish_Username, _chatterish_ChatMessage, _chatterish_Username__Output, _chatterish_ChatMessage__Output>
  SendMessage: MethodDefinition<_chatterish_ChatMessage, _google_protobuf_Empty, _chatterish_ChatMessage__Output, _google_protobuf_Empty__Output>
}
