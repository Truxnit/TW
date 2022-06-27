// eslint-disable-next-line no-restricted-imports
import { useTranslation as useOriginalTranslation } from "react-i18next";
// eslint-disable-next-line no-restricted-imports
import { i18n } from "i18next";
import { CustomTFunction } from "./types";

interface UseTranslationResult {
  t: CustomTFunction;
  i18n: i18n;
}

export function useTranslation(): UseTranslationResult {
  const { t, i18n } = useOriginalTranslation();
  return { t: t as CustomTFunction, i18n };
}
