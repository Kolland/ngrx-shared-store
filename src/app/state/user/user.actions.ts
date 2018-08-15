import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum UserActionTypes {
  GET_USER = '[User] Get',
  GET_USER_SUCCESS = '[User] Get Success',
  GET_USER_FAIL = '[User] Get Fail',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class GetUser implements Action {
  readonly type = UserActionTypes.GET_USER;

  constructor(public successAction?: Action, public failAction?: Action) { }
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;

  constructor(public payload: any) { }
}

export class GetUserFail implements Action {
  readonly type = UserActionTypes.GET_USER_FAIL;

  constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type UserActions = GetUser | GetUserSuccess | GetUserFail;
