// Original file: chatterish.proto

import type { User as _chatterish_User, User__Output as _chatterish_User__Output } from '../chatterish/User';

export interface SignInResponse {
  'token'?: (string);
  'user'?: (_chatterish_User | null);
}

export interface SignInResponse__Output {
  'token'?: (string);
  'user'?: (_chatterish_User__Output);
}
