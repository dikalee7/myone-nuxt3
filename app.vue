<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      :height="loadingIndicatorHeight"
      :duration="loadingIndicatorDuration"
      :throttl="throttl"
    />
    <NuxtPage />
    <ConfirmView />
  </NuxtLayout>
</template>

<script setup lang="ts">
const loadingIndicatorHeight = 10;
const loadingIndicatorDuration = 10000;
const throttl = 0;
</script>

<style scoped></style>
