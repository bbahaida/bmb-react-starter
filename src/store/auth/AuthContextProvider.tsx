// Global imports
import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { redirect } from "react-router-dom";

// Project dependencies
import { AuthActionEnum } from "./auth-actions";
import authReducer, { AuthState, defaultAuthState } from "./auth-reducer";

type AuthProviderProps = {
  children: React.ReactElement;
};

export type UserData = {
  authToken: string;
  userId: string;
  name: string;
  email: string;
};

export interface AuthContext {
  authState: AuthState;
  globalLogInDispatch: (props: UserData) => void;
  globalLogOutDispatch: () => void;
}

// Auth context
const authCtx = createContext<AuthContext>({
  authState: defaultAuthState,
  globalLogInDispatch: () => {},
  globalLogOutDispatch: () => {},
});

export const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const [authState, authDispatch] = useReducer(authReducer, defaultAuthState);

  // Check if user detail is persisted, mostly catering for refreshing of the browser
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData: UserData = JSON.parse(user);
      authDispatch({ type: AuthActionEnum.LOG_IN, payload: userData });
    }
  }, []);

  const globalLogInDispatch = useCallback((props: UserData) => {
    const { authToken, email, name, userId } = props;
    authDispatch({
      type: AuthActionEnum.LOG_IN,
      payload: {
        authToken,
        userId,
        name,
        email,
      },
    });
    redirect("/");
  }, []);

  const globalLogOutDispatch = useCallback(() => {
    authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
    redirect("/");
  }, []);

  // context values to be passed down to children
  const ctx = {
    authState,
    globalLogInDispatch,
    globalLogOutDispatch,
  };

  return <authCtx.Provider value={ctx}>{children}</authCtx.Provider>;
};

export default authCtx;
