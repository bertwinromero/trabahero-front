import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from './../environments/environment.prod';
import { AppCustomPreloader } from './app.loader';

// MODULES
import { PageModule } from './components';

// NGRX INTEGRATION
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// related to router
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './store/router-state.serializer';

// SERVICES - TODO: CREATE CORE MODULE
import { UserService } from './services/api/user/user.service';
import { ApiService } from './services/api/api.service';
import { LocalStorageService } from './services/api/local-storage.service';


const angularModules = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
];
const featureModules = [PageModule];

// ngrx
const ngrxModules = [
  StoreModule.forRoot(reducers, {
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    },
  }),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot(),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
];

const coreServices = [
  ApiService,
  UserService,
  LocalStorageService
];

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    ...angularModules,
    ...featureModules,
    ...ngrxModules
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer,
    },
    ...coreServices,
    AppCustomPreloader
  ],
})
export class AppModule { }
