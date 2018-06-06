import * as fromAuth from '../actions/auth.action';

export interface AuthState {
    user: any | null;
}

export const initialState: AuthState = {
    user: null
};

export function reducer(state = initialState, action: fromAuth.AuthAction): AuthState {
    switch (action.type) {
        case fromAuth.CHECK_AUTH_STATE_SUCCESS: {
            const user = action.payload;
            return {
                ...state,
                user
            };
        }
    }

    return state;
}

export const getUser = (state: AuthState) => state.user;
