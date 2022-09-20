import { translateForTest } from "src/i18n";
import { render, screen } from "@testing-library/react";
import { RegisterPage } from "src/Views/register/RegisterPage";

const getRegisterInputField = async (
  placeholderText: string
): Promise<HTMLElement> => {
  const inputElement = await screen.findByPlaceholderText(placeholderText);
  expect(inputElement).toBeInTheDocument();
  return inputElement;
};

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
  it("displays the register input fields", async () => {
    render(<RegisterPage />);
    const firstNamePlaceholderText = translateForTest("registerPage.firstName");
    const lastNamePlaceholderText = translateForTest("registerPage.lastName");
    const emailPlaceholderText = translateForTest("registerPage.email");
    const usernamePlaceholderText = translateForTest("registerPage.username");
    const passwordPlaceholderText = translateForTest("registerPage.password");
    const repeatPasswordPlaceholderText = translateForTest(
      "registerPage.repeatPassword"
    );

    await getRegisterInputField(firstNamePlaceholderText);
    await getRegisterInputField(lastNamePlaceholderText);
    await getRegisterInputField(emailPlaceholderText);
    await getRegisterInputField(usernamePlaceholderText);
    await getRegisterInputField(passwordPlaceholderText);
    await getRegisterInputField(repeatPasswordPlaceholderText);
  });
  /*
  it("reset register data", async () => {
    render(<RegisterPage />);
    const firstNamePlaceholderText = translateForTest("registerPage.firstName");
    const lastNamePlaceholderText = translateForTest("registerPage.lastName");

    const fistNameInput = await getRegisterInputField(firstNamePlaceholderText);
    const lastNameInput = await getRegisterInputField(lastNamePlaceholderText);

    await userEvent.type(fistNameInput, "John");
    await userEvent.type(lastNameInput, "Doe");

    expect(fistNameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");

    const cancelButtonText = translateForTest("button.registerPage.cancel");
    const buttonElement = await screen.findByText(cancelButtonText);
    expect(buttonElement).toBeInTheDocument();

    await userEvent.click(buttonElement);
    expect(fistNameInput).toHaveValue("");
    expect(lastNameInput).toHaveValue("");
  });*/
  it.todo("send form and display success");
  it.todo("send form and show validation");
  it.todo("send form and throw error");
});
