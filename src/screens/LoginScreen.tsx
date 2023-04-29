import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginScreenTest = () => {
  const { authState, login, logout } = useContext(AuthContext);
  const { isLoggedIn, username } = authState;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>UserIsLogged: {isLoggedIn.toString()} </p>
      <p>username: {username} </p>
      <button onClick={() => login("MatuMoto")}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default LoginScreenTest;
