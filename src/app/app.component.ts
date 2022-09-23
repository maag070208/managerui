import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { LoaderService } from './core/services/loader.service';
import { LoginAction } from './core/state/actions/login.action';
import { AppState } from './core/state/app.state';
import {IsAuthenticatedSelector } from './core/state/selectors/login.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLogged$:Observable<boolean> = this.store.pipe(select(IsAuthenticatedSelector))
  public isLoading$: Subject<boolean> = this.loader.isLoading;

  constructor(private loader:LoaderService, private store:Store<AppState>) {
    this.store.dispatch(LoginAction());
  }



}
