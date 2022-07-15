import React from "react";
import { useTranslation } from "src/i18n";
import styles from "src/components/Footer/Footer.module.scss";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <ul className={styles.footerList}>
        <li>{t("footer.copyright")}</li>
      </ul>
    </footer>
  );
};
