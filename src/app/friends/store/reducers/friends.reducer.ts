import * as fromFriends from '../actions/friends.action';
import { Friend } from '../../shared/models';

export interface FriendsState {
    list: Friend[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: FriendsState = {
    list: [],
    loaded: false,
    loading: false
};

export function reducer(state = initialState, action: fromFriends.FriendsAction): FriendsState {
    switch (action.type) {
        case fromFriends.LOAD_FRIENDS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromFriends.LOAD_FRIENDS_SUCCESS: {
            const list = action.payload;

            return {
                ...state,
                loading: false,
                loaded: true,
                list
            };
        }

        case fromFriends.LOAD_FRIENDS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }

    return state;
}

export const getFriends = (state: FriendsState) => state.list;
export const getFriendsLoading = (state: FriendsState) => state.loading;
export const getFriendsLoaded = (state: FriendsState) => state.loaded;
