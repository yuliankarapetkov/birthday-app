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
export const GET_USER = '[Auth] Get User';
export const GET_USER_FAIL = '[Auth] Get User Fail';

export class GetUser implements Action {
    readonly type = GET_USER;
}

export class GetUserFail implements Action {
    readonly type = GET_USER_FAIL;
    constructor(public payload: any) {}
}

// logged in
export const SET_LOGGED_IN = '[Auth] Set Logged In';
export const SET_NOT_LOGGED_IN = '[Auth] Set Not Logged In';

export class SetLoggedIn implements Action {
    readonly type = SET_LOGGED_IN;
    constructor(public payload: any) {}
}

export class SetNotLoggedIn implements Action {
    readonly type = SET_NOT_LOGGED_IN;
}

// action types
export type AuthAction =
    | CreateUser
    | CreateUserFail
    | CreateUserSuccess
    | LoginUser
    | LoginUserFail
    | LoginUserSuccess
    | GetUser
    | GetUserFail
    | SetLoggedIn
    | SetNotLoggedIn;
