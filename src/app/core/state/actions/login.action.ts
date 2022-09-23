import { AuthState } from '@app/core/models/state/IAuth.state';
import { createAction, props } from '@ngrx/store';
export const LoginAction = createAction("[Login Component] LOGIN");
export const LoginActionComplete = createAction("[Login Component] LOGIN_COMPLETE", props<{ auth:AuthState }>());
export const LoginActionError = createAction("[Login Component] LOGIN_ERROR", props<{ auth: AuthState }>());