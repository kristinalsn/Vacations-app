


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { UserModel, UserRole } from "../Models/UserModel";

interface AuthState {
    user: UserModel | null;
    role: UserRole | 'user';
}

const initialState: AuthState = {
    user: null,
    role: "user",
  };
  
  const token = window.localStorage.getItem("token");
  
  if (token) {
    try {
      const decodedToken = jwtDecode<{ user: UserModel }>(token);
      initialState.user = decodedToken.user;
      initialState.role = decodedToken.user.role ?? "user";
    } catch (error) {
      console.error("Invalid token", error);
    }
  }
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        const decodedToken = jwtDecode<{ user: UserModel }>(action.payload);
        console.log("decodedToken:", decodedToken);
        const user = decodedToken.user; 
        console.log("user:", user);
        window.localStorage.setItem("token", action.payload);
        state.user = user;
        state.role = (user?.role ?? 'user') as UserRole | 'user'; 
      },
  
      logout: (state) => {
        window.localStorage.removeItem("token");
        state.user = null;
        state.role = 'user';
      },
    },
  });
  
  export const { login, logout } = authSlice.actions;
  
  export default authSlice.reducer;
  
