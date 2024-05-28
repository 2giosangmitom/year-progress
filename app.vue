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
    class: "xl:px-20 lg:px-16 md:px-10 sm:px-5 px-4 bg-zinc-300 dark:bg-stone-950 dark:text-slate-50 transition",
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
  <Header />
  <main class="xl:grid xl:grid-cols-2 gap-4 mt-5">
    <Progress title="Year" :progress="progress.year" />
    <Progress title="Month" :progress="progress.month" />
    <Progress title="Day" :progress="progress.day" />
    <Progress title="Hour" :progress="progress.hour" />
    <ToggleTheme />
  </main>
  <Footer />
</template>

<style>
* {
  font-family: "Fira Code";
}
</style>
