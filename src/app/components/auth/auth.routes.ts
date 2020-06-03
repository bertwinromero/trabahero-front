import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  AuthComponent,
  AuthSignupComponent,
  AuthSignupClientComponent,
  AuthSignupHeroComponent,
  AuthSigninComponent
} from './index';

const ROUTES: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
      {
        path: 'signup',
        component: AuthSignupComponent,
        children: [
          {
            path: '',
            redirectTo: 'hire',
            pathMatch: 'full',
          },
          {
            path: 'hire',
            component: AuthSignupClientComponent,
          },
          {
            path: 'work',
            component: AuthSignupHeroComponent,
          },
        ]
      },
      {
        path: 'signin',
        component: AuthSigninComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
