import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BoxContextProvider } from "./Contexts/boxContext";
import { ToolContextProvider } from "./Contexts/toolContext";
import { UserContextProvider } from "./Contexts/userContext";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={5}>
      <UserContextProvider>
        <BoxContextProvider>
          <ToolContextProvider>
            <App />
          </ToolContextProvider>
        </BoxContextProvider>
      </UserContextProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
