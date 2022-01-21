import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _chatterish_AuthServiceClient, AuthServiceDefinition as _chatterish_AuthServiceDefinition } from './chatterish/AuthService';
import type { ChatServiceClient as _chatterish_ChatServiceClient, ChatServiceDefinition as _chatterish_ChatServiceDefinition } from './chatterish/ChatService';
import type { UserServiceClient as _chatterish_UserServiceClient, UserServiceDefinition as _chatterish_UserServiceDefinition } from './chatterish/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chatterish: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _chatterish_AuthServiceClient> & { service: _chatterish_AuthServiceDefinition }
    ChatMessage: MessageTypeDefinition
    ChatService: SubtypeConstructor<typeof grpc.Client, _chatterish_ChatServiceClient> & { service: _chatterish_ChatServiceDefinition }
    SignInResponse: MessageTypeDefinition
    Token: MessageTypeDefinition
    UpdateEmailRequest: MessageTypeDefinition
    UpdatePasswordRequest: MessageTypeDefinition
    UpdateResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserCredentials: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _chatterish_UserServiceClient> & { service: _chatterish_UserServiceDefinition }
    Username: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

