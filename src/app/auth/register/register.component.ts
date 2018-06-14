import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';
import * as fromEnums from '../../shared/enums';

import { ErrorWrapper } from '../../shared/models';

@Component({
    selector: 'auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    error$: Observable<ErrorWrapper>;
    AuthError = fromEnums.AuthError;

    constructor(
        private store: Store<fromStore.State>
    ) { }

    ngOnInit() {
        this.error$ = this.store.select(fromStore.getError);
    }

    private registerUser(email: string, password: string) {
        this.store.dispatch(new fromStore.CreateUser({ email, password }));
    }

    handleFormSubmit(formValue: any) {
        const { email, password } = formValue;
        this.registerUser(email, password);
    }
}
