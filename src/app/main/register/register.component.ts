import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
    selector: 'main-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerError: string;

    constructor(
        private store: Store<fromStore.State>,
        private router: Router
    ) { }

    ngOnInit() {
    }

    private registerUser(email: string, password: string) {
        this.store.dispatch(new fromStore.CreateUser({ email, password }));
    }

    handleFormSubmit(formValue: any) {
        const { email, password } = formValue;
        this.registerUser(email, password);
    }
}
