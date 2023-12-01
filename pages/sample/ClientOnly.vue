<template>
  <v-container fluid>
    <v-card class="mb-3" title="테스트 확인 방법" prepend-icon="mdi-cube">
      <template v-slot:text>
        <div class="text-left">chrome toggle javascript로 확인가능</div>
      </template>
    </v-card>

    <client-only>
      <ClientOnlyTest :str="`client only 적용`" />
    </client-only>
    <ClientOnlyTest :str="`client only 미적용`" />

    <ClientOnlyImage />
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'sample / ClientOnly',
});
</script>

<style scoped></style>
