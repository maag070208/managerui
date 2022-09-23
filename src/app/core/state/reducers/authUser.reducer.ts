import { IAuthUser } from '@app/core/models/auth/IAuthUser.model';
import {createReducer, on} from '@ngrx/store';
import { AuthUserAction, AuthUserActionComplete, AuthUserActionError } from '../actions/authUser.action';
export const InitialState:IAuthUser = {unique_name: "",role: "",exp: 0,iat: 0,nbf: 0, groupsid:"",nameid:"",primarysid:""};
export const authUserReducer = createReducer(
    InitialState,
    on(AuthUserAction, (state) => {return state}),
    on(AuthUserActionComplete, (state, user) => {return user.authUser}),
    on(AuthUserActionError, (state, user) => {return user.authUser}),
    );