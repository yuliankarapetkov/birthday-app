import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ErrorWrapper, HeaderConfig } from '../../shared/models';

import * as fromRootStore from '../../store';
import * as fromBirthdayStore from '../store';
import * as fromEnums from '../shared/enums';

@Component({
    selector: 'friends-friend',
    templateUrl: './friend.component.html',
    styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit, OnDestroy {
    private friendKey: string | null = null;
    private subscription: Subscription;

    // This might be put in a base component class that all components in the module would inherit from.
    // The config would be dispatched OnInit and would be overriden only when needed.
    private readonly headerConfig: HeaderConfig = {
        showSearchInput: false
    };

    friendForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        birthday: ['', [Validators.required]]
    });
    friendExists = false;

    error$: Observable<ErrorWrapper>;
    FriendsError = fromEnums.FriendsError;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<fromRootStore.State>
    ) { }

    submitForm() {
        if (this.friendForm.valid) {
            if (this.friendExists) {
                const { name, birthday } = this.friendForm.value;
                const friend = { key: this.friendKey, name, birthday};
                this.store.dispatch(new fromBirthdayStore.UpdateFriend(friend));
            } else {
                this.store.dispatch(new fromBirthdayStore.CreateFriend(this.friendForm.value));
            }
        }
    }

    ngOnInit() {
        this.store.dispatch(new fromRootStore.SetHeader(this.headerConfig));
        this.error$ = this.store.select(fromBirthdayStore.getError);

        this.subscription = this.store.select(fromBirthdayStore.getSelectedFriend)
            .subscribe(
                (friend: any = null) => {
                    this.friendExists = !!(friend && friend.key);

                    if (this.friendExists) {
                        this.friendKey = friend.key;
                        this.friendForm.patchValue(friend);
                    } else {
                        this.friendKey = null;
                    }
                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
