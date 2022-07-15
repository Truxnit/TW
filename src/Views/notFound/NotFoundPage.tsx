import React from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "src/i18n";
import { resolveRoute } from "src/utils/resolveRoute";
import { NotFoundPageLayout } from "src/Views/notFound/NotFoundPageLayout";

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const title = (
    <h2 dangerouslySetInnerHTML={{ __html: t("notFoundPage.title.html") }} />
  );

  //  const fileNotFoundImage = <img src={} alt="File not found image" />;
  const backToHomeClickHandler = () => {
    navigate(resolveRoute("/"));
  };

  const backToHome = (
    <p style={{ textAlign: "center" }}>
      <button onClick={() => backToHomeClickHandler()}>
        {t("notFoundPage.button")}
      </button>
    </p>
  );

  return (
    <NotFoundPageLayout
      title={title}
      /*image={fileNotFoundImage}*/ backToHome={backToHome}
    />
  );
};
