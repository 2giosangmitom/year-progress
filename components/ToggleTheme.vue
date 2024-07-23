<script setup lang="ts">
const themeStore = useThemeStore();
const themeIcon = computed(() => {
  const isDark = themeStore.theme == "dark";
  return isDark ? "line-md:moon-loop" : "line-md:sunny-outline-twotone-loop";
});

onMounted(() => {
  const localTheme = window.localStorage.getItem("theme");
  if (localTheme) {
    themeStore.theme = localTheme;
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    themeStore.theme = "dark";
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <button
    type="button"
    aria-label="Toggle Theme"
    class="fixed sm:bottom-10 sm:right-10 outline-none bg-slate-100 rounded-full sm:p-5 active:scale-[0.9] duration-300 shadow-sm dark:text-slate-50 dark:bg-slate-900 p-3 bottom-5 right-5 flex items-center justify-center"
    @click="themeStore.toggle"
  >
    <iconify-icon :icon="themeIcon" class="text-slate-900 dark:text-slate-50 text-2xl" />
  </button>
</template>

<style scoped>
svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
