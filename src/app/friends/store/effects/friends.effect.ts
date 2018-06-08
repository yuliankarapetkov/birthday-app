import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as friendsAction from '../actions/friends.action';
import * as fromServices from '../../shared/services';
import * as fromRouter from '../../../store/actions/router.action';
import { Friend } from '../../shared/models';

@Injectable()
export class FriendsEffect {
    constructor(
        private actions$: Actions,
        private friendsService: fromServices.FriendsService
    ) {}

    @Effect()
    loadFriends$ = this.actions$
        .ofType(friendsAction.LOAD_FRIENDS)
        .pipe(switchMap(() => {
            return this.friendsService
                .getFriends()
                .pipe(
                    map(friends => new friendsAction.LoadFriendsSuccess(friends)),
                    catchError(error => of(new friendsAction.LoadFriendsFail(error)))
                );
        }));

    @Effect()
    createFriend$ = this.actions$
        .ofType(friendsAction.CREATE_FRIEND)
        .pipe(
            map((action: friendsAction.CreateFriend) => action.payload),
            switchMap((friend: Friend) => {
                return this.friendsService
                    .addFriend(friend)
                    .pipe(
                        map(() => new friendsAction.CreateFriendSuccess()),
                        catchError(error => of(new friendsAction.CreateFriendFail(error)))
                    );
            })
        );

    @Effect()
    createFriendSuccess$ = this.actions$
        .ofType(friendsAction.CREATE_FRIEND_SUCCESS)
        .pipe(
            map(() => {
                return new fromRouter.Go({
                    path: ['/friends']
                });
            })
        );

    @Effect()
    updateFriend$ = this.actions$
        .ofType(friendsAction.UPDATE_FRIEND)
        .pipe(
            map((action: friendsAction.UpdateFriend) => action.payload),
            switchMap((friend: Friend) => {
                const { key, ...friendToUpdate } = friend;
                return this.friendsService
                    .updateFriend(key, friendToUpdate)
                    .pipe(
                        map(() => new friendsAction.UpdateFriendSuccess()),
                        catchError(error => of(new friendsAction.UpdateFriendFail(error)))
                    );
            })
        );

    @Effect()
    updateFriendSuccess$ = this.actions$
        .ofType(friendsAction.UPDATE_FRIEND_SUCCESS)
        .pipe(
            map(() => {
                return new fromRouter.Go({
                    path: ['/friends']
                });
            })
        );

    @Effect()
    removeFriend$ = this.actions$
        .ofType(friendsAction.REMOVE_FRIEND)
        .pipe(
            map((action: friendsAction.RemoveFriend) => action.payload),
            switchMap((key: string) => {
                return this.friendsService
                    .removeFriend(key)
                    .pipe(
                        map(() => new friendsAction.RemoveFriendSuccess()),
                        catchError(error => of(new friendsAction.RemoveFriendFail(error)))
                    );
            })
        );
}