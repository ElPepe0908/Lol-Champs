import React from "react";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ChampsProvider } from "./context/ChampsContext";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ChampDetailScreen from "./screens/ChampDetailScreen";

const App = () => {
  return (
    <AuthProvider>
      <ChampsProvider>
        <ChampDetailScreen />
        {/* <LoginScreen /> */}
      </ChampsProvider>
    </AuthProvider>
  );
};

export default App;
