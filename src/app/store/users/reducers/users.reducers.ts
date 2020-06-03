import { UserObject } from './../../../objects/users/user.object';
import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions';

export interface UsersState {
  user: UserObject;
  users: { [key: string]: UserObject };
}

export const initialState = {
  user: null,
  users: {},
};

export const reducer = createReducer(
  initialState,
  on(userActions.signupUserSuccess, (state, { userCreated }) => ({ ...state, user: userCreated })),
);

