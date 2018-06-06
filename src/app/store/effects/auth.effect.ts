import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../store';
import * as authAction from '../actions/auth.action';
import * as fromServices from '../../shared/services';

@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions,
        private authService: fromServices.AuthService
    ) {}

    @Effect()
    createUser$ = this.actions$
        .ofType(authAction.CREATE_USER)
        .pipe(
            map((action: authAction.CreateUser) => action.payload),
            switchMap((emailAndPassword: any) => {
                return this.authService
                    .createUser(emailAndPassword.email, emailAndPassword.password)
                    .pipe(
                        map((res: any) => {
                            const { uid, email } = res;
                            return new authAction.CreateUserSuccess({ uid, email });
                        }) ,
                        catchError(error => of(new authAction.CreateUserFail(error)))
                    );
            })
        );

    @Effect()
    loginUser$ = this.actions$
        .ofType(authAction.LOGIN_USER)
        .pipe(
            map((action: authAction.LoginUser) => action.payload),
            switchMap((emailAndPassword: any) => {
                return this.authService
                    .loginUser(emailAndPassword.email, emailAndPassword.password)
                    .pipe(
                        map((res: any) => {
                            const { uid, email } = res;
                            return new authAction.LoginUserSuccess({ uid, email });
                        }) ,
                        catchError(error => of(new authAction.LoginUserFail(error)))
                    );
            })
        );

    @Effect()
    checkAuthState$ = this.actions$
        .ofType(authAction.CHECK_AUTH_STATE)
        .pipe(
            switchMap(() => {
                return this.authService
                    .authState
                    .pipe(
                        map((res: any) => {
                            let user;
                            if (res) {
                                const { uid, email } = res;
                                user = { uid, email };
                            } else {
                                user = null;
                            }

                            return new authAction.CheckAuthStateSuccess(user);
                        }) ,
                        catchError(error => of(new authAction.CheckAuthStateFail(error)))
                    );
            })
        );
}
