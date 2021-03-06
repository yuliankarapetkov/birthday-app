import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as authAction from '../actions/auth.action';
import * as fromServices from '../../shared/services';
import * as fromRouter from '../actions/router.action';
import * as fromEnums from '../../shared/enums';

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
                        map(() => new authAction.GetUser()),
                        catchError(error => of(new authAction.SetError({ type: fromEnums.AuthError.CreateUser, content: error })))
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
                        map(() => new authAction.GetUser()) ,
                        catchError(error => of(new authAction.SetError({ type: fromEnums.AuthError.LoginUser, content: error })))
                    );
            })
        );

    @Effect()
    logoutUser$ = this.actions$
        .ofType(authAction.LOGOUT_USER)
        .pipe(
            switchMap(() => {
                return this.authService
                    .logoutUser()
                    .pipe(
                        map(() => new authAction.GetUser()),
                        catchError(error => of(new authAction.SetError({ type: fromEnums.AuthError.LogoutUser, content: error })))
                    );
            })
        );

    @Effect()
    getUser$ = this.actions$
        .ofType(authAction.GET_USER)
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

                                return new authAction.SetLoggedIn(user);
                            } else {
                                return new authAction.SetNotLoggedIn();
                            }
                        }) ,
                        catchError(error => of(new authAction.SetError({ type: fromEnums.AuthError.GetUser, content: error })))
                    );
            })
        );

    @Effect()
    resetError$ = this.actions$
        .ofType(
            authAction.CREATE_USER,
            authAction.LOGIN_USER,
            authAction.LOGOUT_USER,
            authAction.GET_USER)
        .pipe(
            switchMap(() => {
                return of(new authAction.ResetError());
            })
        );

    @Effect()
    setLoggedIn = this.actions$
        .ofType(authAction.SET_LOGGED_IN)
        .pipe(
            map(() => {
                return new fromRouter.Go({
                    path: ['/friends']
                });
            })
        );

    @Effect()
    setNotLoggedIn = this.actions$
        .ofType(authAction.SET_NOT_LOGGED_IN)
        .pipe(
            map(() => {
                return new fromRouter.Go({
                    path: ['/auth/login']
                });
            })
        );
}
