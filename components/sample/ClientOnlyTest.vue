<template>
  <v-card class="mb-3" :title="str"></v-card>
</template>

<script setup lang="ts">
export interface IProps {
  str: string;
}
const props = withDefaults(defineProps<IProps>(), {
  str: 'test',
});
</script>

<style scoped></style>
