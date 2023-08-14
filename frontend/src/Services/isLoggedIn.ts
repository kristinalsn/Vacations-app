// import { RootState } from "../store";

import { RootState } from "../App/store";

export const isLoggedIn = (state: RootState): boolean => {
  return state.auth.user !== null;
};