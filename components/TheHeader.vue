<script setup lang="ts">
const date = new Date();
const month = date.toLocaleString("default", { month: "long" });
const year = date.getFullYear();
</script>

<template>
  <header class="sm:mt-5 mt-4 xl:px-20 lg:px-16 md:px-10 sm:px-5 px-4">
    <h1 class="xl:text-2xl xl:font-bold text-lg font-semibold">Year progress - {{ month }} / {{ year }}</h1>
  </header>
</template>
