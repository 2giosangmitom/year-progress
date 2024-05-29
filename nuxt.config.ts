export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/test-utils/module", "@nuxtjs/google-fonts", "@nuxt/eslint"],
  tailwindcss: {
    config: {
      darkMode: "class",
    },
  },
  googleFonts: {
    families: {
      "Fira Code": {
        wght: 600,
      },
    },
    subsets: "latin",
  },
});
