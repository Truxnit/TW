import { translateForTest } from "src/i18n";
import { render, screen } from "@testing-library/react";
import { RegisterPage } from "src/Views/register/RegisterPage";

describe("register page", () => {
  it("displays the correct document title", async () => {
    render(<RegisterPage />);
    const pageTitle = `Two Worlds P&P - ${translateForTest(
      "registerPage.title"
    )}`;
    const titleTagText = document.title;
    expect(titleTagText).toEqual(pageTitle);
  });
  it("displays the page title", async () => {
    render(<RegisterPage />);
    const pageTitle = translateForTest("registerPage.title");
    const titleElement = await screen.findByRole("heading", {
      level: 2,
      name: pageTitle,
    });
    expect(titleElement).toBeInTheDocument();
  });
});
