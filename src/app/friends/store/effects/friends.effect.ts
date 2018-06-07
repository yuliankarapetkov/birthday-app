import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../store';
import * as friendsAction from '../actions/friends.action';
import * as fromServices from '../../shared/services';
import * as fromRouter from '../../../store/actions/router.action';

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
            switchMap((friend: any) => {
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
}