// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { initTranslations } from "./i18n";
import { i18n } from "src/i18n";

beforeAll(async () => {
  await initTranslations();
  await i18n.changeLanguage("de");
});
