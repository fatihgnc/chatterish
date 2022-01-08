import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _chatterish_AuthServiceClient, AuthServiceDefinition as _chatterish_AuthServiceDefinition } from './chatterish/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chatterish: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _chatterish_AuthServiceClient> & { service: _chatterish_AuthServiceDefinition }
    Token: MessageTypeDefinition
    User: MessageTypeDefinition
    UserCredentials: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
}

