// Original file: chatterish.proto

import type { User as _chatterish_User, User__Output as _chatterish_User__Output } from '../chatterish/User';

export interface SignUpRequest {
  'user'?: (_chatterish_User | null);
  'confirmPassword'?: (string);
}

export interface SignUpRequest__Output {
  'user'?: (_chatterish_User__Output);
  'confirmPassword'?: (string);
}
