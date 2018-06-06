import { Component, OnDestroy, OnInit } from '@angular/core';
import { Friend, FriendsService } from './shared/services/friends/friends.service';
import { Store } from '../../store';
import { takeWhile } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';

import { DateService } from '../shared/services/date/date.service';

import * as ngrx from '@ngrx/store';
import { BirthdayState } from './store/reducers';
import * as fromStore from './store';

@Component({
    selector: 'friends-root',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {
    private componentAlive = true;

    friends$: Observable<Friend[]>;

    ngrxFriends$: Observable<any>;

    constructor(
        private store: Store,
        private friendsService: FriendsService,
        private dateService: DateService,
        private ngrxStore: ngrx.Store<BirthdayState>,
    ) { }

    getNextBirthday(birthdayTimestamp: number) {
        return this.dateService.getNextBirthday(new Date(birthdayTimestamp));
    }

    getDaysUntilNextBirthday(birthdayTimestamp: number) {
        const nextBirthday = this.getNextBirthday(birthdayTimestamp);
        return this.dateService.getDaysUntil(nextBirthday);
    }

    getTurningAge(birthdayTimestamp: number): number {
        const daysUntilNextBirthday = this.getDaysUntilNextBirthday(birthdayTimestamp),
            age = this.dateService.getAge(new Date(birthdayTimestamp));
        return daysUntilNextBirthday === 0 ? age : age + 1;
    }

    ngOnInit() {
        this.ngrxFriends$ = this.ngrxStore.select(fromStore.getFriends);
        this.ngrxStore.dispatch(new fromStore.LoadFriends());

        this.friends$ = this.store.select<Friend[]>('friends');
        this.friendsService.friends$
            .pipe(takeWhile(() => this.componentAlive))
            .subscribe();
    }

    ngOnDestroy() {
        this.componentAlive = false;
    }
}
