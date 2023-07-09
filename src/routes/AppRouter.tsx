import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen/index";
import ChampDetailScreen from "../screens/ChampDetailScreen/index";
import LoginScreen from "../screens/LoginScreen/index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/champ-detail/:name" element={<ChampDetailScreen />} />
      <Route path="/*" element={<LoginScreen />} />
    </Routes>
  );
};
