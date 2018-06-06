import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromFriends from './friends.reducer';

export interface BirthdayState {
    friends: fromFriends.FriendsState;
}

export const reducers: ActionReducerMap<BirthdayState> = {
    friends: fromFriends.reducer
};

export const getBirthdayState = createFeatureSelector<BirthdayState>(
    'birthday'
);