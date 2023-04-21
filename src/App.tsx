import React from "react";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ChampsProvider } from "./context/ChampsContext";
import LoginScreen from "./screens/LoginScreen";
import ChampDetailScreen from "./screens/ChampDetailScreen";
import { HomeScreen } from "./screens/HomeScreen";

const App = () => {
  return (
    <AuthProvider>
      <ChampsProvider>
        {/* <ChampDetailScreen /> */}
        <HomeScreen />
        {/* <LoginScreen /> */}
      </ChampsProvider>
    </AuthProvider>
  );
};

export default App;
