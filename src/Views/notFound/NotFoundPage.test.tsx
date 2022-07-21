import "@testing-library/react";
import {
  expectCurrentUrlPathToBe,
  renderWithRouter,
} from "src/utils/tests/memory-router-for-view-test";
import { translateForTest } from "src/i18n";
import { NotFoundPage } from "src/Views/notFound/NotFoundPage";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { resolveRoute } from "src/utils/resolveRoute";

describe("File Not Found page", () => {
  beforeEach(() => {
    renderWithRouter([{ element: <NotFoundPage /> }]);
  });
  it("display the title", async () => {
    const title = translateForTest("notFoundPage.title.html");

    const titleElement = screen.getByRole("heading");
    expect(titleElement).toContainHTML(title);
  });

  it("navigate to main after click the button", async () => {
    const button = translateForTest("notFoundPage.button");

    const buttonElement = screen.getByRole("button", { name: button });
    expect(buttonElement).toBeInTheDocument();

    await userEvent.click(buttonElement);

    await waitFor(() => {
      expectCurrentUrlPathToBe(resolveRoute("/"));
    });
  });
});
