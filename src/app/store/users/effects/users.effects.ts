import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as actions from '../actions';

// RXJS
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// SERVICES
import { UserService } from './../../../services/api/user/user.service';

// OBJECTS
import { UserCredentialObject, UserObject } from './../../../objects/users/user.object';
@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  signupUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.signupUser),
      map((action) => action.user),
      exhaustMap(user => {
        return this.userService.signup(user).pipe(
          map(() => {
            const userCredentials: UserCredentialObject = {
              email: user.email,
              password: user.password
            };
            return actions.signinUser({userCredentials});
          }),
          catchError(error => of(actions.signupUserFail({error}))),
        );
      })
    ),
    { useEffectsErrorHandler: false },
  );

  signinUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.signinUser),
      map((action) => action.userCredentials),
      exhaustMap(user => {
        debugger;
        return this.userService.signin(user).pipe(
          map(userCreated => actions.signinUserSuccess({userCreated})),
          catchError(error => of(actions.signinUserFail({error}))),
        );
      })
    ),
    { useEffectsErrorHandler: false },
  );

}
