import { screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { translateForTest } from "src/i18n";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "src/utils/tests/memory-router-for-view-test";

const mockPassword = "testPass";
const mockUserName = "testuser10";

const getLoginInputField = async (
  placeholderText: string
): Promise<HTMLElement> => {
  const inputElement = await screen.findByPlaceholderText(placeholderText);
  expect(inputElement).toBeInTheDocument();
  return inputElement;
};

const renderLoginPage = () => {
  renderWithRouter([{ element: <LoginPage />, path: "/" }]);
};

describe("login page", () => {
  it("displays the correct document title", async () => {
    renderLoginPage();
    const pageTitle = `Two Worlds P&P - ${translateForTest("loginPage.title")}`;
    const titleTagText = document.title;
    expect(titleTagText).toEqual(pageTitle);
  });

  it("displays the login title", async () => {
    renderLoginPage();
    const pageTitle = translateForTest("loginPage.title");
    const titleElement = await screen.findByRole("heading", {
      level: 2,
      name: pageTitle,
    });
    expect(titleElement).toBeInTheDocument();
  });
  it("displays the input fields", async () => {
    renderLoginPage();
    const userNamePlaceholderText = translateForTest("loginPage.username");
    const passwordPlaceholderText = translateForTest("loginPage.password");

    await getLoginInputField(userNamePlaceholderText);
    await getLoginInputField(passwordPlaceholderText);
  });
  it("sends login data", async () => {
    renderLoginPage();
    const userNamePlaceholderText = translateForTest("loginPage.username");
    const passwordPlaceholderText = translateForTest("loginPage.password");

    const usernameInput = await getLoginInputField(userNamePlaceholderText);
    const passwordInput = await getLoginInputField(passwordPlaceholderText);
    await userEvent.type(usernameInput, mockUserName);
    await userEvent.type(passwordInput, mockPassword);

    const buttonText = translateForTest("button.loginPage.confirm");
    const buttonElement = await screen.findByText(buttonText);
    expect(buttonElement).toBeInTheDocument();

    //check api call
  });
  it("displays the password text after click on the eye", async () => {
    renderLoginPage();
    const passwordPlaceholderText = translateForTest("loginPage.password");
    const passwordInput = await getLoginInputField(passwordPlaceholderText);
    await userEvent.type(passwordInput, mockPassword);

    const eyeClosed = await screen.findByTestId("eyeClosed");
    expect(eyeClosed).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute("type", "password");
    await userEvent.click(eyeClosed);
    const eyeOpen = await screen.findByTestId("eyeOpen");
    expect(eyeOpen).toBeInTheDocument();

    expect(passwordInput).toHaveValue(mockPassword);
    expect(passwordInput).toHaveAttribute("type", "text");
  });

  it("displays validation text if username  and Password is empty", async () => {
    renderLoginPage();

    const buttonText = translateForTest("button.loginPage.confirm");
    const buttonElement = await screen.findByText(buttonText);
    await userEvent.click(buttonElement);

    const userNameValidationMessage = screen.getByText("Username is required!");
    const passwordValidationMessage = screen.getByText("Password is required!");

    expect(userNameValidationMessage).toBeInTheDocument();
    expect(passwordValidationMessage).toBeInTheDocument();
  });
  it("displays validation text if password < 10", async () => {
    renderLoginPage();
    const userNamePlaceholderText = translateForTest("loginPage.username");
    const passwordPlaceholderText = translateForTest("loginPage.password");

    const usernameInput = await getLoginInputField(userNamePlaceholderText);
    const passwordInput = await getLoginInputField(passwordPlaceholderText);
    await userEvent.type(usernameInput, mockUserName);
    await userEvent.type(passwordInput, "test");

    const buttonText = translateForTest("button.loginPage.confirm");
    const buttonElement = await screen.findByText(buttonText);
    await userEvent.click(buttonElement);

    const passwordValidationMessage = screen.getByText(
      "Password needs to be more than 10 characters!"
    );

    expect(passwordValidationMessage).toBeInTheDocument();
  });
});
