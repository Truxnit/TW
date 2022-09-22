import React from "react";
import ReactDOM from "react-dom/client";
import "src/assets/scss/styles.scss";
import { initTranslations } from "src/i18n";
import { AppRoutes } from "src/routes";
import { setupMockApiForDevServer } from "src/utils/development/mock-api-for-dev-server";
import { logException, logInfo } from "src/utils/logger";

//let mockApiReady: Promise<void> = Promise.resolve();

const mockApiReady = setupMockApiForDevServer().then(
  () => logInfo("API-mocks started"),
  (error) => logException("Error while starting API-mocks:", error)
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

mockApiReady
  .then(() => initTranslations())
  .then(() =>
    root.render(
      <React.StrictMode>
        <AppRoutes />
      </React.StrictMode>
    )
  );
