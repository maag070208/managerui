import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { LoginActionReload } from './core/state/actions/auth.action';
import { AppState } from './core/state/app.state';
import { GetGlobalDataState } from './core/state/selectors/global.selector';
import { IsAuthenticatedSelector } from './core/state/selectors/auth.selector';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:beforeunload')
  async beforeunloadHandler() {
    const state: AppState = await firstValueFrom(this.globalData$);
    localStorage.setItem('__state__', JSON.stringify(state));
  }


  public isLogged$: Observable<boolean> = this.store.pipe(select(IsAuthenticatedSelector));

  public isLoading$: Subject<boolean> = this.loaderService.isLoading;

  public globalData$: Observable<AppState> = this.store.pipe(select(GetGlobalDataState));

  constructor(private store: Store<AppState>, private loaderService:LoaderService) {}

  async ngOnInit() {
    const __state__:AppState = JSON.parse(localStorage.getItem('__state__') || '{}');
    if(__state__.auth.token) {
      // TODO: in this part add the previous state to the store
      this.store.dispatch(LoginActionReload({ auth: __state__.auth }));
    }
    localStorage.removeItem('__state__');
  }

}
