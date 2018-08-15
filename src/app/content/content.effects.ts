import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ContentActionTypes } from './content.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ContentEffects {
  @Effect({dispatch: false}) GetUserSuccess$: Observable<Action> = this.actions$
    .ofType(ContentActionTypes.USER_CONTENT_ACTION)
    .pipe(tap(() => {
      console.log('ContentEffects');
    }));

  constructor(
    private actions$: Actions
  ) {}
}
