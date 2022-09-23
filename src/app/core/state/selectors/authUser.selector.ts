import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAuthState = (state: AppState) => state.auth;

// export const selectToken = createSelector(
//     selectAuthState,
//     (state:AuthUserState) => state.authUser)