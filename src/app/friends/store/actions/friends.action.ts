import { Action } from '@ngrx/store';

import { Friend } from '../../shared/models';
import { ErrorWrapper } from '../../../shared/models';

// load friends
export const LOAD_FRIENDS = '[Friends] Load Friends';
export const LOAD_FRIENDS_FAIL = '[Friends] Load Friends Fail';
export const LOAD_FRIENDS_SUCCESS = '[Friends] Load Friends Success';

export class LoadFriends implements Action {
    readonly type = LOAD_FRIENDS;
}

export class LoadFriendsFail implements Action {
    readonly type = LOAD_FRIENDS_FAIL;
    constructor(public payload: any) {}
}

export class LoadFriendsSuccess implements Action {
    readonly type = LOAD_FRIENDS_SUCCESS;
    constructor(public payload: Friend[]) {}
}

// create friend
export const CREATE_FRIEND = '[Friends] Create Friend';
export const CREATE_FRIEND_SUCCESS = '[Friends] Create Friend Success';

export class CreateFriend implements Action {
    readonly type = CREATE_FRIEND;
    constructor(public payload: Friend) {}
}

export class CreateFriendSuccess implements Action {
    readonly type = CREATE_FRIEND_SUCCESS;
}

// update friend
export const UPDATE_FRIEND = '[Friends] Update Friend';
export const UPDATE_FRIEND_SUCCESS = '[Friends] Update Friend Success';

export class UpdateFriend implements Action {
    readonly type = UPDATE_FRIEND;
    constructor(public payload: Friend) {}
}

export class UpdateFriendSuccess implements Action {
    readonly type = UPDATE_FRIEND_SUCCESS;
}

// remove friend
export const REMOVE_FRIEND = '[Friends] Remove Friend';

export class RemoveFriend implements Action {
    readonly type = REMOVE_FRIEND;
    constructor(public payload: string) {}
}

// auth error
export const SET_ERROR = '[Friends] Set Error';
export const RESET_ERROR = '[Friends] Reset Error';

export class SetError implements Action {
    readonly type = SET_ERROR;
    constructor(public payload: ErrorWrapper) {}
}

export class ResetError implements Action {
    readonly type = RESET_ERROR;
}

// action types
export type FriendsAction =
    | LoadFriends
    | LoadFriendsFail
    | LoadFriendsSuccess
    | CreateFriend
    | CreateFriendSuccess
    | UpdateFriend
    | UpdateFriendSuccess
    | RemoveFriend
    | SetError
    | ResetError;
