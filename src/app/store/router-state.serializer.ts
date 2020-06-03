import { RouterStateSerializer } from '@ngrx/router-store';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Params,
} from '@angular/router';
import { Injectable } from '@angular/core';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information feed the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

@Injectable()
export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    // Get the latest route segment param
    // https://github.com/UltimateAngular/ngrx-store-effects-app/blob/15-create-pizza/src/app/store/reducers/index.ts
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, params, queryParams };
  }
}
