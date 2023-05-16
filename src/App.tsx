import React, { useEffect } from "react";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { ChampsProvider } from "./context/ChampsContext";
import { LoginScreen } from "./screens/LoginScreen/index";
import { ChampDetailScreen } from "./screens/ChampDetailScreen/index";
import { HomeScreen } from "./screens/HomeScreen/index";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  RouteProps,
  Routes,
  useNavigate,
} from "react-router-dom";

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <AuthProvider>
      <ChampsProvider>
        <Routes>
          <Route path="/*" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/champ-detail/:name" element={<ChampDetailScreen />} />
        </Routes>
      </ChampsProvider>
    </AuthProvider>
  );
};

// const ProtectedRoutes = () => {
//   return <Outlet />;
// };
