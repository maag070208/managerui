import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthUser } from '@app/core/models/auth/IAuthUser.model';
import { ILogin } from '@app/core/models/auth/ILogin.model';
import { LoginActionComplete, LoginActionError } from '@app/core/state/actions/login.action';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable()
export class AuthService {

  private BASE_URL = environment.apiAuthUrl;

  private AUTH_URL = '/auth';

  private LOGIN_URL = `/login`;
  constructor(private http: HttpClient, private store: Store) { }


  public async login(user: ILogin): Promise<boolean> {
    try {
      let login$ = this.http.post<{ token: string }>(this.BASE_URL + this.AUTH_URL + this.LOGIN_URL, user);
      let login = await lastValueFrom(login$);
      if (login.token) {
        const helper = new JwtHelperService();
        const userAuth: IAuthUser = helper.decodeToken(login.token);
        this.store.dispatch(LoginActionComplete({ auth: { token: login.token, authUser: userAuth, isAuthenticated: true } }));
        return true
      };
      this.store.dispatch(LoginActionError({ auth: { token: "", authUser: {}, isAuthenticated: false } }));
      return false;
    } catch (error: any) {
      console.log(error);
      this.store.dispatch(LoginActionError({ auth: { token: "", authUser: {}, isAuthenticated: false } }));
      return false;
    }
  }
}
