import { render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { translateForTest } from "src/i18n";
import userEvent from "@testing-library/user-event";

const mockPassword = "testPass";
const mockUserName = "testuser";

const getLoginInputField = async (
  placeholderText: string
): Promise<HTMLElement> => {
  const inputElement = await screen.findByPlaceholderText(placeholderText);
  expect(inputElement).toBeInTheDocument();
  return inputElement;
};

describe("login page", () => {
  it("displays the correct document title", async () => {
    render(<LoginPage />);
    const pageTitle = `Two Worlds P&P - ${translateForTest("loginPage.title")}`;
    const titleTagText = document.title;
    expect(titleTagText).toEqual(pageTitle);
  });

  it("displays the login title", async () => {
    render(<LoginPage />);
    const pageTitle = translateForTest("loginPage.title");
    const titleElement = await screen.findByRole("heading", {
      level: 2,
      name: pageTitle,
    });
    expect(titleElement).toBeInTheDocument();
  });
  it("displays the input fields", async () => {
    render(<LoginPage />);
    const userNamePlaceholderText = translateForTest("loginPage.username");
    const passwordPlaceholderText = translateForTest("loginPage.password");

    await getLoginInputField(userNamePlaceholderText);
    await getLoginInputField(passwordPlaceholderText);
  });
  it("sends login data", async () => {
    render(<LoginPage />);
    const userNamePlaceholderText = translateForTest("loginPage.username");
    const passwordPlaceholderText = translateForTest("loginPage.password");

    const usernameInput = await getLoginInputField(userNamePlaceholderText);
    const passwordInput = await getLoginInputField(passwordPlaceholderText);
    userEvent.type(usernameInput, mockUserName);
    userEvent.type(passwordInput, mockPassword);

    const buttonText = translateForTest("button.loginPage.confirm");
    const buttonElement = await screen.findByText(buttonText);
    expect(buttonElement).toBeInTheDocument();

    //check api call
  });
  it("displays the password text after click on the eye", async () => {
    render(<LoginPage />);
    const passwordPlaceholderText = translateForTest("loginPage.password");
    const passwordInput = await getLoginInputField(passwordPlaceholderText);
    userEvent.type(passwordInput, mockPassword);

    const eyeClosed = await screen.findByTestId("eyeClosed");
    expect(eyeClosed).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
    userEvent.click(eyeClosed);
    const eyeOpen = await screen.findByTestId("eyeOpen");
    expect(eyeOpen).toBeInTheDocument();

    expect(passwordInput).toHaveValue(mockPassword);
    expect(passwordInput).toHaveAttribute("type", "text");
  });

  it.todo("test validation");
});
