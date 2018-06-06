import { Component, OnDestroy, OnInit } from '@angular/core';
import { Friend } from './shared/services/friends/friends.service';
import { Observable } from 'rxjs';

import { DateService } from '../shared/services/date/date.service';

import { Store } from '@ngrx/store';
import { BirthdayState } from './store/reducers';
import * as fromStore from './store';

@Component({
    selector: 'friends-root',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {
    friends$: Observable<Friend[]>;

    constructor(
        private store: Store<BirthdayState>,
        private dateService: DateService
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
        this.store.dispatch(new fromStore.LoadFriends());
        this.friends$ = this.store.select(fromStore.getFriends);
    }

    ngOnDestroy() {
    }
}
