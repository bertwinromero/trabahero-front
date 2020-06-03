import { props, createAction } from '@ngrx/store';

// OBJECTS
import { HttpError } from './../../../objects/http/http-error.object';
import { UserObject, UserCredentialObject } from './../../../objects/users/user.object';

export const signupUser = createAction(
  '[USERS] Signup user',
  props<{ user: UserObject }>(),
);

export const signupUserSuccess = createAction(
  '[USERS] Signup user success',
  props<{ userCreated: UserObject }>(),
);

export const signupUserFail = createAction(
  '[USERS] Signup user fail',
  props<{error: HttpError}>(),
);


export const signinUser = createAction(
  '[USERS] Signin user',
  props<{ userCredentials: UserCredentialObject }>(),
);

export const signinUserSuccess = createAction(
  '[USERS] Signin user success',
  props<{ userCreated: UserObject }>(),
);

export const signinUserFail = createAction(
  '[USERS] Signin user fail',
  props<{error: HttpError}>(),
);
