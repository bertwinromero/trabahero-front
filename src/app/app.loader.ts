import { flatMap } from 'rxjs/operators';
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of, timer } from 'rxjs';

export class AppCustomPreloader implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    const loadRoute = (delay: boolean) =>
      delay ? timer(150).pipe(flatMap(_ => load())) : load();

    return route.data && route.data.preload
      ? loadRoute(route.data.delay)
      : of(null);
  }
}
