<template>
  <span>{{ `${path.join('/')}.vue 개발 필요` }}</span>
</template>

<script setup lang="ts">
const route = useRoute();
const path = route.params.slug as Array<string>;
</script>

<style scoped></style>
