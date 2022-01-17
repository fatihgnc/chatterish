import { UserState, UserAction } from '../reducer-types/user-types';
import {
    removeTokenFromLS,
    saveTokenInLS,
} from '../components/helpers/local-storage';
import { UserModel } from '../models/User';

export const handleSignIn = (state: UserState, action: UserAction) => {
    const token = action.payload?.token as string;
    const user = action.payload?.user as UserModel;
    saveTokenInLS(token);
    return {
        user,
        token,
        isAuth: true,
    };
};

export const handleSignUp = (state: UserState, action: UserAction) => {
    return state;
};

export const handleLogout = (state: UserState, action: UserAction) => {
    removeTokenFromLS();
    return {
        user: null,
        token: null,
        isAuth: false,
    };
};

export const handleUpdate = (state: UserState, action: UserAction) => {
    const user = action.payload?.user as UserModel;
    const token = action.payload?.token as string;
    saveTokenInLS(token);
    return {
        user,
        token,
        isAuth: state.isAuth,
    };
};
