import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppState } from '@app/core/state/app.state';
import { GetAuthUserRolesSelector } from '@app/core/state/selectors/auth.selector';
import { Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestWorkflowGuard implements CanActivate {
  constructor(private router:Router,private store: Store<AppState>) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const roles$ = this.store.select(GetAuthUserRolesSelector)

    const roles:string = await firstValueFrom(roles$)??"";

    if(roles != "" && roles.includes("ADMIN")) {
      return true;
    }

    this.router.navigate(['/home/workflow']);

    return false;
  }
}
