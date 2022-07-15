import { Header } from "src/components/Header/Header";
import { render, screen } from "@testing-library/react";
import { translateForTest } from "src/i18n";

describe("Header", () => {
  it("displays page title", async () => {
    render(<Header />);
    const titleText = translateForTest("header.title");
    const titleElement = await screen.findByRole("heading", {
      name: titleText,
      level: 1,
    });
    expect(titleElement).toBeInTheDocument();
  });
});
