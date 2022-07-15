import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router";
import { Header } from "src/components/Header/Header";
import { LoginPage } from "src/Views/login/LoginPage";
import { Footer } from "src/components/Footer/Footer";
import { RegisterPage } from "src/Views/register/RegisterPage";
import { NotFoundPage } from "src/Views/notFound/NotFoundPage";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <article className="wrapper">
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </article>
      <Footer />
    </Router>
  );
};
