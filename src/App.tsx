import React from "react";
import { AuthProvider } from "./context/AuthContext";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <AppState>
      <LoginScreen />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
