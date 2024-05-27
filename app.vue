<script setup lang="ts">
useSeoMeta({
  title: "Year progress",
  description: "A website for tracking the progress of the current year visually",
});

useHead({
  bodyAttrs: {
    class: "xl:px-20 lg:px-16 md:px-10 sm:px-5 px-4 bg-zinc-300 dark:bg-stone-950 dark:text-slate-50 transition",
  },
});

const progress = useProgressStore();
</script>

<template>
  <main class="xl:grid xl:grid-cols-2 gap-4 mt-5">
    <Header />
    <Progress title="Year" :progress="progress.year" :update="progress.updateYear" />
    <Progress title="Month" :progress="progress.month" :update="progress.updateMonth" />
    <Progress title="Day" :progress="progress.day" :update="progress.updateDay" />
    <Progress title="Hour" :progress="progress.hour" :update="progress.updateHour" />
    <ToggleTheme />
  </main>
</template>
