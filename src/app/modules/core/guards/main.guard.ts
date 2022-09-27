import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { concatMap, first, from, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MainGuard implements CanActivate {
  constructor(private injector:Injector) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    console.log("canActivate", route.data['syncGuards']);
    return from(route.data['syncGuards']).pipe(concatMap((value) => {
      const guard = this.injector.get(value);
      const result = guard.canActivate(route, state);
      if (result instanceof Observable) {
          return result;
      } else if (result instanceof Promise) {
          return from(result);
      } else {
          return of(result);
      }
  }), first((x) => x === false || x instanceof UrlTree, true));
  }

}
