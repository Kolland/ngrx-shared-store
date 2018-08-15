import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { TeamsActionTypes } from './teams.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class TeamsEffects {
  @Effect({dispatch: false}) GetUserSuccess$: Observable<Action> = this.actions$.ofType(TeamsActionTypes.USER_TEAMS_ACTION)
    .pipe(
      tap(() => {
        console.log('TeamsEffects');
      })
    );

  constructor(
    private actions$: Actions
  ) {}
}
