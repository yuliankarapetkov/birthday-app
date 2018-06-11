import { Component, OnDestroy, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

import * as fromRootStore from '../../store';
import * as fromBirthdayStore from '../store';

import { RemoveFriendDialogComponent } from './../shared/components/remove-friend-dialog/remove-friend-dialog.component';
import { Friend } from './../shared/models';

import { SearchInputService } from '../../shared/services/search-input/search-input.service';
import { HeaderConfig } from '../../shared/models';

@Component({
    selector: 'friends-friends-list',
    templateUrl: './friends-list.component.html',
    styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit, OnDestroy {
    private dialogSubscription: Subscription;
    private filteredFriendsSubscription: Subscription;

    // This might be put in a base component class that all components in the module would inherit from.
    // The config would be dispatched OnInit and would be overriden only when needed.
    private readonly headerConfig: HeaderConfig = {
        showSearchInput: true
    };

    filteredFriends: Friend[];

    constructor(
        private store: Store<fromRootStore.State>,
        private removeDialog: MatDialog,
        private searchBarService: SearchInputService
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
                    this.store.dispatch(new fromBirthdayStore.RemoveFriend(key));
                }
            });
    }

    ngOnInit() {
        this.store.dispatch(new fromBirthdayStore.LoadFriends());
        this.store.dispatch(new fromRootStore.SetHeader(this.headerConfig));

        const friends$ = this.store.select(fromBirthdayStore.getDetailedFriends);
        const searchTerm$ = this.searchBarService.inputValueChanged
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
