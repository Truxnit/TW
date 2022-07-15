import React from "react";
import { useTranslation } from "src/i18n";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header>
      <h1>{t("header.title")}</h1>
    </header>
  );
};
