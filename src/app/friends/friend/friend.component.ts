import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Component({
    selector: 'friends-friend',
    templateUrl: './friend.component.html',
    styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit, OnDestroy {
    private friendKey: string | null = null;
    private subscription: Subscription;

    friendForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        birthday: ['', [Validators.required]]
    });
    friendExists = false;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<fromStore.BirthdayState>
    ) { }

    async submitForm() {
        if (this.friendForm.valid) {
            if (this.friendExists) {
                const { name, birthday } = this.friendForm.value;
                const friend = { key: this.friendKey, name, birthday};
                this.store.dispatch(new fromStore.UpdateFriend(friend));
            } else {
                this.store.dispatch(new fromStore.CreateFriend(this.friendForm.value));
            }
        }
    }

    ngOnInit() {
        this.subscription = this.store.select(fromStore.getSelectedFriend)
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
