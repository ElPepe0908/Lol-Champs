import { AuthProvider } from "./context/AuthContext";
import { ChampsProvider } from "./context/ChampsContext";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <AuthProvider>
      <ChampsProvider>
        <LoginScreen />
      </ChampsProvider>
    </AuthProvider>
  );
};

export default App;
