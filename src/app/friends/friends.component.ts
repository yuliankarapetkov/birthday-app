import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { MatDialog } from '@angular/material';

import { Store } from '@ngrx/store';

import * as fromStore from './store';
import { RemoveFriendDialogComponent } from './shared/components/remove-friend-dialog/remove-friend-dialog.component';
import { Friend } from './shared/models';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/internal/operators';

@Component({
    selector: 'friends-root',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnDestroy {
    private dialogSubscription: Subscription;
    private filteredFriendsSubscription: Subscription;

    searchTerm: FormControl = new FormControl();
    filteredFriends: Friend[];

    constructor(
        private store: Store<fromStore.BirthdayState>,
        private removeDialog: MatDialog
    ) { }

    removeFriend(friend: Friend) {
        this.dialogSubscription = this.removeDialog
            .open(RemoveFriendDialogComponent, {
                data: { name: friend.name }
            })
            .afterClosed()
            .subscribe(result => {
                const remove = result;
                if (remove) {
                    const { key } = friend;
                    this.store.dispatch(new fromStore.RemoveFriend(key));
                }
            });
    }

    ngOnInit() {
        this.store.dispatch(new fromStore.LoadFriends());

        const friends$ = this.store.select(fromStore.getDetailedFriends);
        const searchTerm$ = this.searchTerm.valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                startWith('')
            );

        this.filteredFriendsSubscription = combineLatest(
            friends$,
            searchTerm$)
            .subscribe(([friends, term]) => {
                const searchTerm = term ? term.toLowerCase() : null;
                this.filteredFriends = searchTerm
                    ? friends.filter(friend => friend.name.toLowerCase().indexOf(searchTerm) !== -1)
                    : friends;
            });
    }

    ngOnDestroy() {
        if (this.dialogSubscription && !this.dialogSubscription.closed) {
            this.dialogSubscription.unsubscribe();
        }

        this.filteredFriendsSubscription.unsubscribe();
    }
}
