import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { MatDialog } from '@angular/material';

import { Store } from '@ngrx/store';

import { BirthdayState } from './store/reducers';
import * as fromStore from './store';
import { RemoveFriendDialogComponent } from './shared/components/remove-friend-dialog/remove-friend-dialog.component';

@Component({
    selector: 'friends-root',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    friends$: Observable<any[]>;

    constructor(
        private store: Store<BirthdayState>,
        private removeDialog: MatDialog
    ) { }

    removeFriend(friend: any) {
        this.subscription = this.removeDialog
            .open(RemoveFriendDialogComponent, {
                data: { name: friend.name }
            })
            .afterClosed()
            .subscribe(result => {
                const remove = result;
                if (remove) {
                    const { $key } = friend;
                    this.store.dispatch(new fromStore.RemoveFriend($key));
                }
            });
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.LoadFriends());
        this.friends$ = this.store.select(fromStore.getDetailedFriends);
    }

    ngOnDestroy() {
        if (this.subscription && !this.subscription.closed) {
            this.subscription.unsubscribe();
        }
    }
}
