<script setup lang="ts">
// Every image on a slide must name its source and license; the required prop makes a missing license a type error
defineProps<{ license: string }>();
</script>

<template>
  <div class="text-[10px] opacity-75 pt-1">Source: <slot />. License: {{ license }}.</div>
</template>
