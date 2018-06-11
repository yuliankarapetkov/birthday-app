import { Action } from '@ngrx/store';

// header
export const SET_HEADER = '[UI] Set Header';

export class SetHeader implements Action {
    readonly type = SET_HEADER;
    constructor(public payload: any) {}
}

// sidenav
export const SET_SIDENAV = '[UI] Set Sidenav';

export class SetSidenav implements Action {
    readonly type = SET_SIDENAV;
    constructor(public payload: any) {}
}

// action types
export type UiAction =
    | SetHeader
    | SetSidenav;
