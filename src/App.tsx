import { Suspense } from "react";
import "./index.css";
import HomeScreen from "./screens/HomeScreen/index";
import ChampDetailScreen from "./screens/ChampDetailScreen/index";
import LoginScreen from "./screens/LoginScreen/index";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/*" element={<LoginScreen />} />
        <Route path="/champ-detail/:name" element={<ChampDetailScreen />} />
      </Routes>
    </Suspense>
  );
};
