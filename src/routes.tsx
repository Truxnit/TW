import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "src/components/Header/Header";
import { LoginPage } from "src/Views/login/LoginPage";
import { Footer } from "src/components/Footer/Footer";
import { RegisterPage } from "src/Views/register/RegisterPage";
import { NotFoundPage } from "src/Views/notFound/NotFoundPage";
import { protectedRoute } from "src/utils/routing/protectedRoute";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <article className="wrapper">
        <Routes>
          <Route path="/" element={<div> Main Page</div>} />
          {protectedRoute({
            TargetPage: LoginPage,
            path: "/login",
            guarded: false,
          })}
          {protectedRoute({
            TargetPage: RegisterPage,
            path: "/register",
            guarded: false,
          })}

          {/*
                   example for nested routes
                   <Route path="/weapons" element={<WeaponsLayout />}> Hier würde dann outlet rein kommen, da dieses dann die WeaponList oder WeaponPOAge rendert
                <Route index element={<WeaponListPage />}/>
                <Route path=":id" element={<WeaponPage />}/>
            </Route>*/}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </article>
      <Footer />
    </Router>
  );
};
