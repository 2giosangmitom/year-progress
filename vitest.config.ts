import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    exclude: ["nuxt.config.ts", "**/node_modules/**", "**/.nuxt/**"],
    coverage: {
      exclude: ["nuxt.config.ts", "**/node_modules/**", "**/.nuxt/**"],
    },
  },
});
