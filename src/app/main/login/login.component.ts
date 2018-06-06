import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
    selector: 'main-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginError: string;

    constructor(
        private store: Store<fromStore.State>,
        private router: Router
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
