import React, { Reducer, useReducer } from 'react';
import {
    UserAction,
    UserActionTypes,
    UserState,
} from '../../reducer-types/user-types';
import {
    handleSignIn,
    handleSignUp,
    handleLogout,
} from '../../reducer-actions/user-actions';
import { AuthServiceClient } from '../../proto/ChatterishServiceClientPb';
import { UserCredentials, User } from '../../proto/chatterish_pb';
import { UserModel } from '../../models/User';

const client = new AuthServiceClient('http://localhost:8080');

type UserContextObj = {
    isAuth: boolean;
    user: UserModel | null;
    token: string | null;
    signIn: (usernameOrEmail: string, password: string) => Promise<void>;
    signUp: (
        username: string,
        password: string,
        nationality: string,
        birthdate: string,
        email: string,
        confirmPsw: string
    ) => Promise<void>;
    // logOut: () => void;
};

export const UserContext = React.createContext<UserContextObj>({
    isAuth: false,
    user: null,
    token: '',
    signIn: async () => {},
    signUp: async () => {},
    // logOut: () => {},
});

const initialState: UserState = {
    isAuth: false,
    user: null,
    token: '',
};

const reducerFn = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'USER_SIGN_IN':
            return handleSignIn(state, action);
        case 'USER_SIGN_UP':
            return handleSignUp(state, action);
        case 'USER_LOG_OUT':
            return handleLogout(state, action);
        default:
            return state;
    }
};

const UserContextProvider: React.FC = (props) => {
    const [state, dispatch] = useReducer<Reducer<UserState, UserAction>>(
        reducerFn,
        initialState
    );

    console.log(state);

    const dispatchSignIn = async (
        usernameOrEmail: string,
        password: string
    ) => {
        const signInRequestObj = new UserCredentials();

        signInRequestObj.setUsernameoremail(usernameOrEmail);
        signInRequestObj.setPassword(password);

        try {
            const { token, user } = (
                await client.signUserIn(signInRequestObj, null)
            ).toObject();
            console.log(token, user);
            dispatch({
                type: UserActionTypes.USER_SIGN_IN,
                payload: { token, user },
            });
        } catch (error) {
            console.log('caught error in signinhandler');
            console.log(error);
        }
    };

    const dispatchSignUp = async (
        username: string,
        password: string,
        nationality: string,
        birthdate: string,
        email: string,
        confirmPsw: string
    ) => {
        const signUpRequestObj = new User();

        signUpRequestObj.setBirthdate(birthdate);
        signUpRequestObj.setPassword(password);
        signUpRequestObj.setUsername(username);
        signUpRequestObj.setNationality(nationality);
        signUpRequestObj.setEmail(email);
        signUpRequestObj.setConfirmpsw(confirmPsw);

        try {
            await client.signUserUp(signUpRequestObj, null);
            dispatch({ type: UserActionTypes.USER_SIGN_UP });
            console.log('successfully registered');
        } catch (error) {
            throw error;
        }
    };

    const ctxValue: UserContextObj = {
        user: state.user as UserModel,
        isAuth: state.isAuth,
        token: state.token,
        signIn: dispatchSignIn,
        signUp: dispatchSignUp,
        // logOut: dispatchLogout,
    };

    return (
        <UserContext.Provider value={ctxValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
