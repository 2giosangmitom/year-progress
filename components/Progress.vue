<script setup lang="ts">
import { type Title } from "~/lib/types";
defineProps<{
  title: Title;
  progress: number;
  update: void;
}>();
</script>

<template></template>
