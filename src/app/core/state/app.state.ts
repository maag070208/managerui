import {ActionReducerMap} from '@ngrx/store';
import { AuthState } from '../models/state/IAuth.state';
import { loginReducer } from './reducers/auth.reducer';
export interface AppState {
    auth: AuthState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    auth: loginReducer
 }
