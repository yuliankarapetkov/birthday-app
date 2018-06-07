import * as fromAuth from '../actions/auth.action';

export interface AuthState {
    user: any | null;
    isLoggedIn: boolean;
}

export const initialState: AuthState = {
    user: null,
    isLoggedIn: false
};

export function authReducer(state = initialState, action: fromAuth.AuthAction): AuthState {
    console.log('action type', action);

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
    }

    return state;
}

export const getUser = (state: AuthState) => state.user;
export const getIsLoggedIn = (state: AuthState) => state.isLoggedIn;
