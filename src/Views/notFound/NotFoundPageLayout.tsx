import { ReactNode } from "react";

interface NotFoundPageLayoutProps {
  title: ReactNode;
  backToHome: ReactNode;
}

export const NotFoundPageLayout: React.FC<NotFoundPageLayoutProps> = ({
  backToHome,
  title,
}) => {
  return (
    <div>
      {title}
      {backToHome}
    </div>
  );
};
