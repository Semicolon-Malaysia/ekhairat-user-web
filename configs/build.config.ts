import { NuxtConfig } from "@nuxt/types";
import webpack from "webpack";

export const build: NuxtConfig["build"] = {
  loaders: {
    scss: {
      sassOptions: {
        prependData: `$theme-primary: ${process.env.THEME_PRIMARY}; $theme-secondary: ${process.env.THEME_SECONDARY}; $theme-accent: ${process.env.THEME_ACCENT};`
      }
    }
  },

  extend(config: webpack.Configuration, ctx: any) {
    config.node = {
      fs: "empty"
    };
  },

  babel: {
    plugins: [
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }]
    ]
  }
};
