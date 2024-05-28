export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light",
  }),
  actions: {
    toggle() {
      if (this.theme === "light") {
        this.theme = "dark";
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        this.theme = "light";
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    },
  },
});
