import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
        private formBuilder: FormBuilder
    ) { }

    submitForm() {
        console.log('ye', this.friendForm.value);

        // if (this.friendForm.valid) {
        //
        // }
    }

    ngOnInit() {
    }
}
