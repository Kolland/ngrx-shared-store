import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ContentActionTypes {
  USER_CONTENT_ACTION = '[Content] USER_CONTENT_ACTION',
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class UserContentAction implements Action {
  readonly type = ContentActionTypes.USER_CONTENT_ACTION;

  constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ContentActions
            = UserContentAction;
