import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { BirthdayState } from './store/reducers';
import * as fromStore from './store';

@Component({
    selector: 'friends-root',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {
    friends$: Observable<any[]>;

    constructor(
        private store: Store<BirthdayState>
    ) { }

    ngOnInit() {
        this.store.dispatch(new fromStore.LoadFriends());
        this.friends$ = this.store.select(fromStore.getDetailedFriends);
    }

    ngOnDestroy() {
    }
}
