

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import vacationsReducer from "./vacationsSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    auth: authReducer,
    vacations: vacationsReducer
  }
});
console.log("store.getState():", store.getState());

