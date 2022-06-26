import {render, screen} from "@testing-library/react";
import {LoginPage} from "./LoginPage";


describe("main page", () => {
    it("display the title", async () => {
        render(<LoginPage />);
        const title = "Login"
        const titleElement = await screen.findByText(title);
        expect(titleElement).toBeInTheDocument();
    });

});
