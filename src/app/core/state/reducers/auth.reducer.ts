import { AuthState } from '@app/core/models/state/IAuth.state';
import {createReducer, on} from '@ngrx/store';
import { LoginAction, LoginActionComplete, LoginActionError, LoginActionReload } from '../actions/auth.action';
 export const InitialState:AuthState = {token:"", authUser: {}};

 export const loginReducer = createReducer(
    InitialState,
    on(LoginAction, (state) => {return state}),
    on(LoginActionComplete, (state, {auth}) => ({ authUser: auth.authUser, token: auth.token })),
    on(LoginActionError, (state, {auth}) => ({ authUser: auth.authUser, token: auth.token })),
    on(LoginActionReload, (state, {auth}) => ({ authUser: auth.authUser, token: auth.token })),
    );
