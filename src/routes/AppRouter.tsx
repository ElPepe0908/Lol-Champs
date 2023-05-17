import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen";
import { ChampDetailScreen } from "../screens/ChampDetailScreen/index";
import { LoginScreen } from "../screens/LoginScreen/index";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomeScreen />} />
        <Route path="/champ-detail/:name" element={<ChampDetailScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
