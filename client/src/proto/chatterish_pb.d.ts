import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class UpdatePasswordRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): UpdatePasswordRequest;

  getConfirmpassword(): string;
  setConfirmpassword(value: string): UpdatePasswordRequest;

  getToken(): string;
  setToken(value: string): UpdatePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePasswordRequest): UpdatePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePasswordRequest;
  static deserializeBinaryFromReader(message: UpdatePasswordRequest, reader: jspb.BinaryReader): UpdatePasswordRequest;
}

export namespace UpdatePasswordRequest {
  export type AsObject = {
    password: string,
    confirmpassword: string,
    token: string,
  }
}

export class UpdateResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UpdateResponse;
  hasUser(): boolean;
  clearUser(): UpdateResponse;

  getToken(): string;
  setToken(value: string): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    user?: User.AsObject,
    token: string,
  }
}

export class UpdateEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): UpdateEmailRequest;

  getToken(): string;
  setToken(value: string): UpdateEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEmailRequest): UpdateEmailRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEmailRequest;
  static deserializeBinaryFromReader(message: UpdateEmailRequest, reader: jspb.BinaryReader): UpdateEmailRequest;
}

export namespace UpdateEmailRequest {
  export type AsObject = {
    email: string,
    token: string,
  }
}

export class User extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getBirthdate(): string;
  setBirthdate(value: string): User;

  getNationality(): string;
  setNationality(value: string): User;

  getConfirmpsw(): string;
  setConfirmpsw(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    username: string,
    password: string,
    email: string,
    birthdate: string,
    nationality: string,
    confirmpsw: string,
  }
}

export class SignInResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): SignInResponse;

  getUser(): User | undefined;
  setUser(value?: User): SignInResponse;
  hasUser(): boolean;
  clearUser(): SignInResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignInResponse): SignInResponse.AsObject;
  static serializeBinaryToWriter(message: SignInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignInResponse;
  static deserializeBinaryFromReader(message: SignInResponse, reader: jspb.BinaryReader): SignInResponse;
}

export namespace SignInResponse {
  export type AsObject = {
    token: string,
    user?: User.AsObject,
  }
}

export class UserCredentials extends jspb.Message {
  getUsernameoremail(): string;
  setUsernameoremail(value: string): UserCredentials;

  getPassword(): string;
  setPassword(value: string): UserCredentials;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: UserCredentials): UserCredentials.AsObject;
  static serializeBinaryToWriter(message: UserCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserCredentials;
  static deserializeBinaryFromReader(message: UserCredentials, reader: jspb.BinaryReader): UserCredentials;
}

export namespace UserCredentials {
  export type AsObject = {
    usernameoremail: string,
    password: string,
  }
}

export class Token extends jspb.Message {
  getToken(): string;
  setToken(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    token: string,
  }
}

export class Username extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): Username;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Username.AsObject;
  static toObject(includeInstance: boolean, msg: Username): Username.AsObject;
  static serializeBinaryToWriter(message: Username, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Username;
  static deserializeBinaryFromReader(message: Username, reader: jspb.BinaryReader): Username;
}

export namespace Username {
  export type AsObject = {
    username: string,
  }
}

export class ChatMessage extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): ChatMessage;

  getSender(): string;
  setSender(value: string): ChatMessage;

  getTime(): string;
  setTime(value: string): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    msg: string,
    sender: string,
    time: string,
  }
}

export class MatchersCount extends jspb.Message {
  getCurrentlymatchinguserscount(): number;
  setCurrentlymatchinguserscount(value: number): MatchersCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchersCount.AsObject;
  static toObject(includeInstance: boolean, msg: MatchersCount): MatchersCount.AsObject;
  static serializeBinaryToWriter(message: MatchersCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchersCount;
  static deserializeBinaryFromReader(message: MatchersCount, reader: jspb.BinaryReader): MatchersCount;
}

export namespace MatchersCount {
  export type AsObject = {
    currentlymatchinguserscount: number,
  }
}

