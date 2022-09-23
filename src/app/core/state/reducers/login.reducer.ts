import { AuthState } from '@app/core/models/state/IAuth.state';
import {createReducer, on} from '@ngrx/store';
import { LoginAction, LoginActionComplete, LoginActionError } from '../actions/login.action';
 export const InitialState:AuthState = {token:"", authUser: {}, isAuthenticated: false};

 export const loginReducer = createReducer(
    InitialState,
    on(LoginAction, (state) => {return state}),
    on(LoginActionComplete, (state, {auth}) => ({ authUser: auth.authUser, token: auth.token, isAuthenticated: auth.isAuthenticated })),
    on(LoginActionError, (state, {auth}) => ({ authUser: auth.authUser, token: auth.token, isAuthenticated: auth.isAuthenticated })),
    );