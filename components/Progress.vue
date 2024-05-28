<script setup lang="ts">
type Title = "Year" | "Month" | "Day" | "Hour";

const props = defineProps<{
  title: Title;
  progress: number;
}>();
</script>

<template>
  <div class="xl:my-0 my-5">
    <p class="mb-2">{{ props.title }}: {{ props.progress.toFixed(5) }}%</p>
    <div
      class="border border-black shadow-lg w-full h-5 dark:border-slate-50"
      role="progressbar"
      :aria-valuenow="props.progress"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="`${props.title} progress`"
    >
      <div class="bg-slate-900 h-full w-0 duration-1000 dark:bg-stone-300" :style="{ width: `${props.progress}%` }" />
    </div>
  </div>
</template>
