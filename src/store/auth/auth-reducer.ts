import { Reducer } from "react";
import { AuthAction } from "./auth-actions";
import { IS_LOGGED_IN } from "../../config/constants";

export interface AuthState {
  isLoggedIn: boolean;
  authToken?: string;
  userId?: string;
  name?: string;
  email?: string;
}

export const defaultAuthState: AuthState = {
  isLoggedIn: IS_LOGGED_IN,
};

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
  // user successfully authenticated
  if (action.type === "LOG_IN") {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return {
      ...state,
      isLoggedIn: true,
      authToken: action.payload.authToken,
      userId: action.payload.userId,
      name: action.payload.name,
      email: action.payload.email,
    };
  }

  // log out user
  if (action.type === "LOG_OUT") {
    localStorage.removeItem("user");
    return {
      isLoggedIn: false,
    };
  }

  return defaultAuthState;
};

export default authReducer;
