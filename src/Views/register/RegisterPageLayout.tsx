import React, { ReactNode } from "react";

interface RegisterPageLayoutProps {
  title: ReactNode;
  registerForm: ReactNode;
}
export const RegisterPageLayout: React.FC<RegisterPageLayoutProps> = ({
  title,
  registerForm,
}) => {
  return (
    <section className={"pageHeadline"}>
      {title}
      {registerForm}
    </section>
  );
};
