import React, { Suspense, useEffect } from "react";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ChampsProvider } from "./context/ChampsContext";
import HomeScreen from "./screens/HomeScreen/index";
import ChampDetailScreen from "./screens/ChampDetailScreen/index";
import LoginScreen from "./screens/LoginScreen/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <AuthProvider>
      <ChampsProvider>
        <Suspense>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/*" element={<LoginScreen />} />
            <Route path="/champ-detail/:name" element={<ChampDetailScreen />} />
          </Routes>
        </Suspense>
      </ChampsProvider>
    </AuthProvider>
  );
};
