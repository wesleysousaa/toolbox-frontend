import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BoxContextProvider } from "./Contexts/boxContext";
import { ToolContextProvider } from "./Contexts/toolContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BoxContextProvider>
      <ToolContextProvider>
        <App />
      </ToolContextProvider>
    </BoxContextProvider>
  </React.StrictMode>
);
