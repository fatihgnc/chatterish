import { UserModel } from '../models/User';
import { User } from '../proto/chatterish_pb';

export enum UserActionTypes {
    USER_SIGN_IN = 'USER_SIGN_IN',
    USER_SIGN_UP = 'USER_SIGN_UP',
    USER_LOG_OUT = 'USER_LOG_OUT',
    USER_UPDATE_PASSWORD = 'USER_UPDATE_PASSWORD',
    USER_UPDATE_EMAIL = 'USER_UPDATE_EMAIL',
}

export interface UserActionPayload {
    token?: string;
    user?: UserModel | User.AsObject;
}

export interface UserAction {
    type: UserActionTypes;
    payload?: UserActionPayload;
}

export interface UserState {
    isAuth: boolean;
    user: UserModel | null;
    token: string | null;
}
