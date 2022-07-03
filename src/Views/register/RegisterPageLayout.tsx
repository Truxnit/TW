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
    <div>
      {title}
      {registerForm}
    </div>
  );
};
