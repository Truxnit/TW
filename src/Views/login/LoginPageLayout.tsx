import React, { ReactNode } from "react";

interface LoginPageLayoutProps {
  title: ReactNode;
  loginForm: ReactNode;
}

export const LoginPageLayout: React.FC<LoginPageLayoutProps> = ({
  title,
  loginForm,
}) => {
  return (
    <section>
      {title}
      {loginForm}
    </section>
  );
};
