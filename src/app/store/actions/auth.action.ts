import { Action } from '@ngrx/store';

// create user
export const CREATE_USER = '[Auth] Create User';
export const CREATE_USER_FAIL = '[Auth] Create User Fail';
export const CREATE_USER_SUCCESS = '[Auth] Create User Success';

export class CreateUser implements Action {
    readonly type = CREATE_USER;
    constructor(public payload: any) {}
}

export class CreateUserFail implements Action {
    readonly type = CREATE_USER_FAIL;
    constructor(public payload: any) {}
}

export class CreateUserSuccess implements Action {
    readonly type = CREATE_USER_SUCCESS;
    constructor(public payload: any) {}
}

// login user
export const LOGIN_USER = '[Auth] Login User';
export const LOGIN_USER_FAIL = '[Auth] Login User Fail';
export const LOGIN_USER_SUCCESS = '[Auth] Login User Success';

export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public payload: any) {}
}

export class LoginUserFail implements Action {
    readonly type = LOGIN_USER_FAIL;
    constructor(public payload: any) {}
}

export class LoginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;
    constructor(public payload: any) {}
}

// check auth state
export const CHECK_AUTH_STATE = '[Auth] Check Auth State';
export const CHECK_AUTH_STATE_FAIL = '[Auth] Check Auth State Fail';
export const CHECK_AUTH_STATE_SUCCESS = '[Auth] Check Auth State Success';

export class CheckAuthState implements Action {
    readonly type = CHECK_AUTH_STATE;
}

export class CheckAuthStateFail implements Action {
    readonly type = CHECK_AUTH_STATE_FAIL;
    constructor(public payload: any) {}
}

export class CheckAuthStateSuccess implements Action {
    readonly type = CHECK_AUTH_STATE_SUCCESS;
    constructor(public payload: any) {}
}

// action types
export type AuthAction =
    | CreateUser
    | CreateUserFail
    | CreateUserSuccess
    | LoginUser
    | LoginUserFail
    | LoginUserSuccess
    | CheckAuthState
    | CheckAuthStateFail
    | CheckAuthStateSuccess;
