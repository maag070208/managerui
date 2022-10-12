import { AuthState } from "@app/core/models/state/IAuth.state";
import { JwtHelperService } from "@auth0/angular-jwt";
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAuthState = (state: AppState) => state.auth;

export const IsAuthenticatedSelector = createSelector(
    selectAuthState,
    (state: AuthState) => isTokenExpired(state.token)
);

export const GetAuthUserRolesSelector = createSelector(
  selectAuthState,
  (state: AuthState) => state.authUser.role
)
export const GetAuthUserCollaboratorID = createSelector(
  selectAuthState,
  (state: AuthState) => state.authUser.collaboratorid
)


const isTokenExpired = (token: string):boolean =>{
  const helper = new JwtHelperService();
  const isExpired = helper.isTokenExpired(token);
  return token != "" && !isExpired;
}
