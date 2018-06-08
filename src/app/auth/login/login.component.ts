import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
    selector: 'auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginError: string;

    constructor(
        private store: Store<fromStore.State>
    ) { }

    ngOnInit() {
    }

    private registerUser(email: string, password: string) {
        this.store.dispatch(new fromStore.LoginUser({ email, password }));
    }

    handleFormSubmit(formValue: any) {
        const { email, password } = formValue;
        this.registerUser(email, password);
    }
}
