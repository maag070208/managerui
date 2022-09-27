import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppState } from '@app/core/state/app.state';
import { IsAuthenticatedSelector } from '@app/core/state/selectors/auth.selector';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private router:Router,private store: Store<AppState>) { }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuth$ = this.store.select(IsAuthenticatedSelector)
    if(await firstValueFrom(isAuth$)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
