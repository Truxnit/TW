import React from "react";
import ReactDOM from "react-dom/client";
import "src/assets/scss/styles.scss";
import { LoginPage } from "./Views/login/LoginPage";
import { initTranslations } from "src/i18n";

const mockApiReady: Promise<void> = Promise.resolve();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

mockApiReady
  .then(() => initTranslations())
  .then(() =>
    root.render(
      <React.StrictMode>
        <LoginPage />
      </React.StrictMode>
    )
  );
