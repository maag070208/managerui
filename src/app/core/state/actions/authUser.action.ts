import { IAuthUser } from '@app/core/models/auth/IAuthUser.model';
import { createAction, props } from '@ngrx/store';
export const AuthUserAction = createAction("[Login Component] AUTH_USER");
export const AuthUserActionComplete = createAction("[Login Component] AUTH_USER_COMPLETE", props<{ authUser: IAuthUser }>());
export const AuthUserActionError = createAction("[Login Component] AUTH_USER_ERROR", props<{ authUser: IAuthUser }>());