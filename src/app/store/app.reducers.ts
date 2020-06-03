import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// https://github.com/UltimateAngular/ngrx-store-effects-app/blob/06-router-store-setup/src/app/store/reducers/index.ts
// Todd Motto reference state

// Angular CLI specific settings
// import { environment as env } from '@env/environment';

import { RouterStateUrl } from './router-state.serializer';
import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { getSelectors } from '@ngrx/router-store';

// ROUTER REDUCERS

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

export const {
  selectQueryParams, // select the current route query params
  selectRouteParams, // select the current route params
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(getRouterState);

// META REDUCERS

export const metaReducers: MetaReducer<State>[] = [];

// Logger and storeFreeze are useful only on developement / not in production
// export const metaReducers: MetaReducer<State>[] = !env.production
//   ? [logger]
//   : [];
