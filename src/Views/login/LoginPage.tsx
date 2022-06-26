import React from "react";
import { LoginPageLayout } from "./LoginPageLayout";

export const LoginPage: React.FC = () => {
  const title = <h2>Login</h2>;

  return <LoginPageLayout title={title} loginForm={<div>Hallo Welt</div>} />;
};
