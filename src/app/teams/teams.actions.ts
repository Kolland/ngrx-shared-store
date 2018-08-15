import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum TeamsActionTypes {
  USER_TEAMS_ACTION = '[Teams] USER_TEAMS_ACTION'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class UserTeamsAction implements Action {
  readonly type = TeamsActionTypes.USER_TEAMS_ACTION;

  constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TeamsActions = UserTeamsAction;
