import React, { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

// Definir como luce mi context y que informacion voy a tener en el context
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
}

// Estado inicial del context
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  login: (username: string) => void;
  logout: () => void;
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const login = (username: string) => {
    dispatch({ type: "login", payload: username });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
