import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BirthdayState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { CreateFriend } from '../store/actions';

@Component({
    selector: 'friends-friend',
    templateUrl: './friend.component.html',
    styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
    friendForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        birthday: ['', [Validators.required]]
    });

    constructor(
        private formBuilder: FormBuilder,
        private store: Store<BirthdayState>
    ) { }

    async submitForm() {
        if (this.friendForm.valid) {
            this.store.dispatch(new CreateFriend(this.friendForm.value));
        }
    }

    ngOnInit() {
    }
}
