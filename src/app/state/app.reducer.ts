import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import {
  reducer as userReducer,
  State as userSate,
 } from './user/user.reducer';

export interface AppState {
  user: userSate;
}

export const appReducer: ActionReducerMap<AppState> = {
  user: userReducer,
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
