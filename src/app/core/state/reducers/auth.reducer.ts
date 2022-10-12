import { AuthState } from '@app/core/models/state/IAuth.state';
import { createReducer, on } from '@ngrx/store';
import {
  LoginAction,
  LoginActionComplete,
  LoginActionError,
  LoginActionReload,
} from '../actions/auth.action';
const authState = {} as AuthState;
export const InitialState: AuthState = authState;

export const loginReducer = createReducer(
  InitialState,
  on(LoginAction, (state) => {
    return state;
  }),
  on(LoginActionComplete, (state, { auth }) => ({
    authUser: auth.authUser,
    token: auth.token,
  })),
  on(LoginActionError, (state, { auth }) => ({
    authUser: auth.authUser,
    token: auth.token,
  })),
  on(LoginActionReload, (state, { auth }) => ({
    authUser: auth.authUser,
    token: auth.token,
  }))
);
