export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/test-utils/module", "@nuxtjs/google-fonts"],
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
