<script setup lang="ts">
useHead({
  title: "Year progress",
  meta: [
    {
      name: "description",
      content: "A website for tracking the progress of the current year visually",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
  bodyAttrs: {
    class:
      "bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500 dark:bg-gradient-to-r dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 dark:text-slate-50 duration-500",
  },
  htmlAttrs: {
    lang: "en",
  },
});

const progress = useProgressStore();

onMounted(() => {
  const intervalId = setInterval(() => {
    progress.update();
  }, 0);
  onUnmounted(() => {
    clearInterval(intervalId);
  });
});
</script>

<template>
  <TheHeader />
  <main class="xl:grid xl:grid-cols-2 gap-4 mt-5 xl:px-20 lg:px-16 md:px-10 sm:px-5 px-4">
    <TheProgress title="Year" :progress="progress.year" />
    <TheProgress title="Month" :progress="progress.month" />
    <TheProgress title="Day" :progress="progress.day" />
    <TheProgress title="Hour" :progress="progress.hour" />
    <ToggleTheme />
  </main>
  <TheFooter />
</template>

<style>
* {
  font-family: "Fira Code", monospace;
}
</style>
