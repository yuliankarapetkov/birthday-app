import { Action } from '@ngrx/store';
import { ErrorWrapper } from '../../shared/models';

// create user
export const CREATE_USER = '[Auth] Create User';

export class CreateUser implements Action {
    readonly type = CREATE_USER;
    constructor(public payload: any) {}
}

// login user
export const LOGIN_USER = '[Auth] Login User';

export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public payload: any) {}
}

// logout user
export const LOGOUT_USER = '[Auth] Logout User';

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;
}

// get user
export const GET_USER = '[Auth] Get User';

export class GetUser implements Action {
    readonly type = GET_USER;
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

// auth error
export const SET_ERROR = '[Auth] Set Error';
export const RESET_ERROR = '[Auth] Reset Error';

export class SetError implements Action {
    readonly type = SET_ERROR;
    constructor(public payload: ErrorWrapper) {}
}

export class ResetError implements Action {
    readonly type = RESET_ERROR;
}

// action types
export type AuthAction =
    | CreateUser
    | LoginUser
    | LogoutUser
    | GetUser
    | SetLoggedIn
    | SetNotLoggedIn
    | SetError
    | ResetError;
