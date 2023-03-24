import { AuthProvider } from "./context/AuthContext";
import { ChampsProvider } from "./context/ChampsContext";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <AuthProvider>
      <ChampsProvider>
        {/* <LoginScreen /> */}
        <HomeScreen />
      </ChampsProvider>
    </AuthProvider>
  );
};

export default App;
