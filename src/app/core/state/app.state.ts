import {ActionReducerMap} from '@ngrx/store';
import { AuthState } from '../models/state/IAuth.state';
import { ISapState } from '../models/state/ISap.state';
import { loginReducer } from './reducers/auth.reducer';
import { sapReducer } from './reducers/sap.reducer';
export interface AppState {
    auth: AuthState;
    sap:ISapState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    auth: loginReducer,
    sap: sapReducer
 }
