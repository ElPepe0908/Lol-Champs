import { AuthState } from "./AuthContext";

type AuthAction = { type: "login"; payload: string } | { type: "logout" };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };

    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
      };

    default:
      return state;
  }
};
