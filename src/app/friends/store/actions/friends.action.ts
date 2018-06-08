import { Action } from '@ngrx/store';

import { Friend } from '../../shared/models';

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
export const CREATE_FRIEND_FAIL = '[Friends] Create Friend Fail';
export const CREATE_FRIEND_SUCCESS = '[Friends] Create Friend Success';

export class CreateFriend implements Action {
    readonly type = CREATE_FRIEND;
    constructor(public payload: Friend) {}
}

export class CreateFriendFail implements Action {
    readonly type = CREATE_FRIEND_FAIL;
    constructor(public payload: any) {}
}

export class CreateFriendSuccess implements Action {
    readonly type = CREATE_FRIEND_SUCCESS;
}

// update friend
export const UPDATE_FRIEND = '[Friends] Update Friend';
export const UPDATE_FRIEND_FAIL = '[Friends] Update Friend Fail';
export const UPDATE_FRIEND_SUCCESS = '[Friends] Update Friend Success';

export class UpdateFriend implements Action {
    readonly type = UPDATE_FRIEND;
    constructor(public payload: Friend) {}
}

export class UpdateFriendFail implements Action {
    readonly type = UPDATE_FRIEND_FAIL;
    constructor(public payload: any) {}
}

export class UpdateFriendSuccess implements Action {
    readonly type = UPDATE_FRIEND_SUCCESS;
}

// update friend
export const REMOVE_FRIEND = '[Friends] Remove Friend';
export const REMOVE_FRIEND_FAIL = '[Friends] Remove Friend Fail';
export const REMOVE_FRIEND_SUCCESS = '[Friends] Remove Friend Success';

export class RemoveFriend implements Action {
    readonly type = REMOVE_FRIEND;
    constructor(public payload: string) {}
}

export class RemoveFriendFail implements Action {
    readonly type = REMOVE_FRIEND_FAIL;
    constructor(public payload: any) {}
}

export class RemoveFriendSuccess implements Action {
    readonly type = REMOVE_FRIEND_SUCCESS;
}

// action types
export type FriendsAction =
    | LoadFriends
    | LoadFriendsFail
    | LoadFriendsSuccess
    | CreateFriend
    | CreateFriendFail
    | CreateFriendSuccess
    | UpdateFriend
    | UpdateFriendFail
    | UpdateFriendSuccess
    | RemoveFriend
    | RemoveFriendFail
    | RemoveFriendSuccess;
