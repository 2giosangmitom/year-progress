<script setup lang="ts">
type Title = "Year" | "Month" | "Day" | "Hour";

defineProps<{
  title: Title;
  progress: number; update: void;
}>();
</script>

<template></template>
