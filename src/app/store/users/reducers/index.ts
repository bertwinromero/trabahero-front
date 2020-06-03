import { createFeatureSelector, combineReducers, Action } from '@ngrx/store';

import * as fromUsers from './users.reducers';

export interface UsersState {
  users: fromUsers.UsersState;
}

export function reducers(state: UsersState, action: Action) {
  return combineReducers({
    users: fromUsers.reducer,
  })(state, action);
}

export const getUsersState = createFeatureSelector<UsersState>('users');
