import React from "react";
import ReactDOM from "react-dom/client";
import "src/assets/scss/styles.scss";
import { initTranslations } from "src/i18n";
import { RegisterPage } from "src/Views/register/RegisterPage";

const mockApiReady: Promise<void> = Promise.resolve();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

mockApiReady
  .then(() => initTranslations())
  .then(() =>
    root.render(
      <React.StrictMode>
        <RegisterPage />
        {/*        <LoginPage />*/}
      </React.StrictMode>
    )
  );
