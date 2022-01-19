import React, { Reducer, useContext, useEffect, useReducer } from 'react';
import jwt_decode from 'jwt-decode';
import {
    UserAction,
    UserActionTypes,
    UserState,
} from '../../reducer-types/user-types';
import {
    handleSignIn,
    handleSignUp,
    handleLogout,
    handleUpdate,
} from '../../reducer-actions/user-actions';
import {
    AuthServiceClient,
    UserServiceClient,
} from '../../proto/ChatterishServiceClientPb';
import {
    UserCredentials,
    User,
    UpdatePasswordRequest,
    UpdateEmailRequest,
    Token,
} from '../../proto/chatterish_pb';
import { UserModel } from '../../models/User';
import { useNavigate } from 'react-router-dom';
import { getTokenFromLS } from '../helpers/local-storage';
import { ErrorContext } from './ErrorProvider';

const authClient = new AuthServiceClient('http://localhost:8080');
const userClient = new UserServiceClient('http://localhost:8080');

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
    updatePassword: (
        password: string,
        confirmPassword: string
    ) => Promise<void>;
    updateEmail: (email: string) => Promise<void>;
    logOut: () => Promise<void>;
};

export const UserContext = React.createContext<UserContextObj>({
    isAuth: false,
    user: null,
    token: '',
    signIn: async () => {},
    signUp: async () => {},
    logOut: async () => {},
    updatePassword: async () => {},
    updateEmail: async () => {},
});

const token = getTokenFromLS();

let initialState: UserState;

if (token) {
    const user = jwt_decode(token) as any;

    initialState = {
        isAuth: true,
        user: user._doc,
        token,
    };
} else {
    initialState = {
        isAuth: false,
        user: null,
        token: '',
    };
}

const reducerFn = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'USER_SIGN_IN':
            return handleSignIn(state, action);
        case 'USER_SIGN_UP':
            return handleSignUp(state, action);
        case 'USER_LOG_OUT':
            return handleLogout(state, action);
        case 'USER_UPDATE_PASSWORD':
            return handleUpdate(state, action);
        case 'USER_UPDATE_EMAIL':
            return handleUpdate(state, action);
        default:
            return state;
    }
};

const UserContextProvider: React.FC = (props) => {
    const navigate = useNavigate();
    const errCtx = useContext(ErrorContext);

    const [state, dispatch] = useReducer<Reducer<UserState, UserAction>>(
        reducerFn,
        initialState
    );

    useEffect(() => {
        let interval: NodeJS.Timer;
        if (state.token) {
            interval = setInterval(async () => {
                const checkTokenReq = new Token();
                checkTokenReq.setToken(state.token as string);

                try {
                    await authClient.checkToken(checkTokenReq, null);
                } catch (error: any) {
                    errCtx.setError(
                        `${(
                            error.message as string
                        ).toUpperCase()}... You'll be logged out.`
                    );
                    dispatch({ type: UserActionTypes.USER_LOG_OUT });
                    console.log('logged out because of an error');
                    navigate('/login');
                }
            }, 5000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [state.token, navigate, errCtx]);

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
                await authClient.signUserIn(signInRequestObj, null)
            ).toObject();

            dispatch({
                type: UserActionTypes.USER_SIGN_IN,
                payload: { token, user },
            });

            navigate('/');
        } catch (error: any) {
            console.log('caught error in sign in handler');
            errCtx.setError(error.message);
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
            await authClient.signUserUp(signUpRequestObj, null);
            dispatch({ type: UserActionTypes.USER_SIGN_UP });
            navigate('login');
            console.log('successfully registered');
        } catch (error: any) {
            console.log('caught error in sign up handler');
            throw error;
        }
    };

    const dispatchUpdatePassword = async (
        password: string,
        confirmPassword: string
    ) => {
        const updatePasswordRequest = new UpdatePasswordRequest();

        updatePasswordRequest.setConfirmpassword(confirmPassword);
        updatePasswordRequest.setPassword(password);
        updatePasswordRequest.setToken(state.token as string);

        try {
            const { token, user } = (
                await userClient.updatePassword(updatePasswordRequest, null)
            ).toObject();
            dispatch({
                type: UserActionTypes.USER_UPDATE_PASSWORD,
                payload: { token, user },
            });
            console.log('updated password');
        } catch (error: any) {
            console.log('error while updating password');
            errCtx.setError(error.message);
        }
    };

    const dispatchUpdateEmail = async (email: string) => {
        const updateEmailReq = new UpdateEmailRequest();

        updateEmailReq.setEmail(email);
        updateEmailReq.setToken(state.token as string);

        try {
            const { token, user } = (
                await userClient.updateEmail(updateEmailReq, null)
            ).toObject();
            console.log(user);
            dispatch({
                type: UserActionTypes.USER_UPDATE_EMAIL,
                payload: { token, user },
            });
            console.log('updated email successfully');
        } catch (error: any) {
            console.log('error while updating email');
            errCtx.setError(error.message);
        }
    };

    const dispatchLogout = async () => {
        dispatch({ type: UserActionTypes.USER_LOG_OUT });
        console.log('logged out');
        navigate('/login');
    };

    const ctxValue: UserContextObj = {
        user: state.user as UserModel,
        isAuth: state.isAuth,
        token: state.token,
        signIn: dispatchSignIn,
        signUp: dispatchSignUp,
        logOut: dispatchLogout,
        updatePassword: dispatchUpdatePassword,
        updateEmail: dispatchUpdateEmail,
    };

    return (
        <UserContext.Provider value={ctxValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
