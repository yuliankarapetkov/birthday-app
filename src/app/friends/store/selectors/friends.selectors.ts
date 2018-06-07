import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromFriends from '../reducers/friends.reducer';

import { DateUtil } from '../../../shared/utils/date/date.util';

export const getFriendsState = createSelector(
    fromFeature.getBirthdayState,
    (state: fromFeature.BirthdayState) => state.friends
);

export const getFriends = createSelector(getFriendsState, fromFriends.getFriends);
export const getFriendsLoaded = createSelector(getFriendsState, fromFriends.getFriendsLoaded);
export const getFriendsLoading = createSelector(getFriendsState, fromFriends.getFriendsLoading);

export const getDetailedFriends = createSelector(getFriends,
    (friends) => {
        const detailedFriends = friends
            .map(friend => {
                const birthday = new Date(friend.birthday),
                    age = DateUtil.getAge(birthday),
                    nextBirthday = DateUtil.getNextBirthday(birthday),
                    daysUntil = DateUtil.getDaysUntil(nextBirthday),
                    turningAge = DateUtil.getTurningAge(daysUntil, age),
                    detailedFriend = {
                        ...friend,
                        age,
                        turningAge,
                        nextBirthday,
                        daysUntil
                    };
                return detailedFriend;
            })
            .sort((fr1, fr2) => fr1.daysUntil - fr2.daysUntil);

        return detailedFriends;
    });
