import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { UserActionTypes, GetUserSuccess, GetUser } from './user.actions';
import { tap, switchMap, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RestService } from '../../rest.service';

@Injectable()
export class UserEffects {
  @Effect() getUser$: Observable<Action> = this.actions$
    .ofType(UserActionTypes.GET_USER)
    .pipe(
      map((action: GetUser) => {
        return {
          successAction: action.successAction,
          failAction: action.failAction,
        };
      }),
      switchMap(data => {
        return this.restService.getUser().pipe(
          mergeMap(response => {
            const actions: Action[] = [new GetUserSuccess(response)];

            if (data.successAction) { actions.push(data.successAction); }
            if (data.failAction) { actions.push(data.failAction); }

            return actions;
          })
        );
      })
    );

  constructor(
    private actions$: Actions,
    private restService: RestService,
  ) {}
}
