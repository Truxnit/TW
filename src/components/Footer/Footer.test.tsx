import { render, screen } from "@testing-library/react";
import { translateForTest } from "src/i18n";
import { Footer } from "src/components/Footer/Footer";

describe("Footer", () => {
  it("displays footer list elements", async () => {
    render(<Footer />);
    const footerListElementsText = [translateForTest("footer.copyright")];
    for (let i = 0; i < footerListElementsText.length; i++) {
      expect(screen.getByText(footerListElementsText[i])).toBeInTheDocument();
    }
  });
});
