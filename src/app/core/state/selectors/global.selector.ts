import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectGLobalState = (state: AppState) => state;
export const GetGlobalDataState = createSelector(
    selectGLobalState,
    (state: AppState) => state
  );
