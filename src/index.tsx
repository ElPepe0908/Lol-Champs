import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ChampDetailScreen from "./screens/ChampDetailScreen";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <ChampDetailScreen /> */}
  </React.StrictMode>
);
