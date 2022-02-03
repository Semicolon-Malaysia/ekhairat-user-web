import { Options } from "@nuxtjs/i18n";
import ApplicationsApi from "~/services/easyKhairat/ApplicationsApi";

export const i18n: Options = {
  locales: [
    {
      code: "en",
      iso: "en-US",
      file: "en.js",
      flagCode: "gb",
      name: "English"
    },
    {
      code: "bm",
      iso: "ms",
      file: "bm.js",
      flagCode: "my",
      name: "Bahasa Melayu"
    }
  ],
  defaultLocale: "bm",
  vueI18n: {
    fallbackLocale: "bm"
  },
  lazy: true,
  langDir: "locales/"
};
