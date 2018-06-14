import * as fromAuth from '../actions/auth.action';
import { ErrorWrapper } from '../../shared/models';

export interface AuthState {
    user: any | null;
    isLoggedIn: boolean;
    error: ErrorWrapper | null;
}

export const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    error: null
};

export function authReducer(state = initialState, action: fromAuth.AuthAction): AuthState {
    switch (action.type) {

        case fromAuth.SET_LOGGED_IN: {
            const user = action.payload;
            return {
                ...state,
                isLoggedIn: true,
                user
            };
        }

        case fromAuth.SET_NOT_LOGGED_IN: {
            return {
                ...state,
                user: null,
                isLoggedIn: false
            };
        }

        case fromAuth.SET_ERROR: {
            const error = action.payload;
            return {
                ...state,
                error
            };
        }

        case fromAuth.RESET_ERROR: {
            return {
                ...state,
                error: null
            };
        }
    }

    return state;
}

export const getUser = (state: AuthState) => state.user;
export const getIsLoggedIn = (state: AuthState) => state.isLoggedIn;
export const getError = (state: AuthState) => state.error;
