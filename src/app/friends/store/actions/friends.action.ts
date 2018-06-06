import { Action } from '@ngrx/store';

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
    constructor(public payload: any[]) {}
}

// create friend
export const CREATE_FRIEND = '[Friends] Create Friend';
export const CREATE_FRIEND_FAIL = '[Friends] Create Friend Fail';
export const CREATE_FRIEND_SUCCESS = '[Friends] Create Friend Success';

export class CreateFriend implements Action {
    readonly type = CREATE_FRIEND;
    constructor(public payload: any) {}
}

export class CreateFriendFail implements Action {
    readonly type = CREATE_FRIEND_FAIL;
    constructor(public payload: any) {}
}

export class CreateFriendSuccess implements Action {
    readonly type = CREATE_FRIEND_SUCCESS;
    // constructor(public payload: any) {}
}

// action types
export type FriendsAction =
    | LoadFriends
    | LoadFriendsFail
    | LoadFriendsSuccess
    | CreateFriend
    | CreateFriendFail
    | CreateFriendSuccess;
