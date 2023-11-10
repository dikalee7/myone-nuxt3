<template>
  <v-layout>
    <v-main>
      <UiMyoneHeader />
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped>
.default {
  border: 1px solid #b9e39e;
  padding: 1rem;
  position: relative;
  background-color: #b8e39e87;
}
.default::before {
  content: 'layouts/default.vue';
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
