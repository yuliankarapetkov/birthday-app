import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromFriends from '../reducers/friends.reducer';

export const getFriendsState = createSelector(
    fromFeature.getBirthdayState,
    (state: fromFeature.BirthdayState) => state.friends
);

export const getFriends = createSelector(getFriendsState, fromFriends.getFriends);
export const getFriendsLoaded = createSelector(getFriendsState, fromFriends.getFriendsLoaded);
export const getFriendsLoading = createSelector(getFriendsState, fromFriends.getFriendsLoading);