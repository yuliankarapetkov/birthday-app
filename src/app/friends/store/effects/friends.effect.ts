import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../store';
import * as friendsAction from '../actions/friends.action';
import * as fromServices from '../../shared/services';

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
}