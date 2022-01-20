// Original file: chatterish.proto

import type { User as _chatterish_User, User__Output as _chatterish_User__Output } from '../chatterish/User';

export interface RefreshTokenResponse {
  'user'?: (_chatterish_User | null);
  'token'?: (string);
}

export interface RefreshTokenResponse__Output {
  'user'?: (_chatterish_User__Output);
  'token'?: (string);
}
