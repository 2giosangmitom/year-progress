export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/test-utils/module", "@nuxt/eslint", "@nuxt/fonts"],
  tailwindcss: {
    config: {
      darkMode: "class",
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
    },
  },
  compatibilityDate: "2024-07-23",
});

