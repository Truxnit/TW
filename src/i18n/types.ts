import { TranslationSchema } from "./translations/default-de";
// eslint-disable-next-line no-restricted-imports
import { TOptions } from "i18next";

export type CustomTFunction = (
  key: keyof TranslationSchema,
  options?: TOptions
) => string;
