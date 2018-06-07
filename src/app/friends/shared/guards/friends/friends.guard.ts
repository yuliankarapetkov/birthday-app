import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../../../store';
import { FriendsSharedModule } from '../../shared.module';


@Injectable({
    providedIn: FriendsSharedModule
})
export class FriendsGuard implements CanActivate {
    constructor(private store: Store<fromStore.BirthdayState>) {}

    canActivate(): Observable<boolean> {
        console.log('friends guard called');
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getFriendsLoaded).pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromStore.LoadFriends());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }
}