import React from "react";
import ReactDOM from "react-dom/client";
import "src/assets/scss/styles.scss";
import { initTranslations } from "src/i18n";
import { RegisterPage } from "src/Views/register/RegisterPage";
import { LoginPage } from "src/Views/login/LoginPage";
import { Header } from "src/components/Header/Header";
import { Footer } from "src/components/Footer/Footer";

const mockApiReady: Promise<void> = Promise.resolve();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

mockApiReady
  .then(() => initTranslations())
  .then(() =>
    root.render(
      <React.StrictMode>
        <Header />
        <RegisterPage />
        <LoginPage />
        <Footer />
      </React.StrictMode>
    )
  );
