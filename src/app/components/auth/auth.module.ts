import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SkillsModule } from './../skills/skills.module';
import { UiModule } from './../ui/ui.module';

// NGRX
import { reducers } from './../../store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './../../store/users/effects/users.effects';

import {
  AuthComponent,
  AuthSignupComponent,
  AuthSignupClientComponent,
  AuthSignupHeroComponent,
  AuthSigninComponent } from './index';

const angularModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule
];
const featureModules = [AuthRoutingModule, SkillsModule, UiModule];
const moduleComponents = [
  AuthComponent,
  AuthSignupComponent,
  AuthSignupClientComponent,
  AuthSignupHeroComponent,
  AuthSigninComponent
];

@NgModule({
  declarations: [...moduleComponents],
  imports: [
    ...angularModules,
    ...featureModules,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([UsersEffects]),
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule { }
