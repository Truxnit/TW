import React from "react";
import ReactDOM from "react-dom/client";
import { LoginPage } from "./Views/login/LoginPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
