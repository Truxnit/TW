// eslint-disable-next-line no-restricted-imports
import { initReactI18next } from "react-i18next";
// eslint-disable-next-line no-restricted-imports
import i18next from "i18next";
import { DefaultDe } from "src/i18n/translations/default-de";
import { CustomTFunction } from "src/i18n/types";
export { useTranslation } from "./useTranslation";

export async function initTranslations(): Promise<void> {
  await i18next.use(initReactI18next).init({
    lng: "de",
    fallbackLng: "de",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      de: {
        translation: DefaultDe,
      },
    },
  });
}

export const i18n = i18next;

/*
 * For use in unit-test
 */
export const translateForTest = i18next.t.bind(i18next) as CustomTFunction;
