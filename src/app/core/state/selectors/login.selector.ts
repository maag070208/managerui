import { AuthState } from "@app/core/models/state/IAuth.state";
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";


export const selectAuthState = (state: AppState) => state.auth;
export const IsAuthenticatedSelector = createSelector(
    selectAuthState,
    (state: AuthState) => state.isAuthenticated
  );