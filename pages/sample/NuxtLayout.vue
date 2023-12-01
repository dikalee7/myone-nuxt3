<template>
  <v-card class="mb-3" title="layout 설정법" prepend-icon="mdi-cube">
    <template v-slot:text>
      <div class="text-left">
        - 지정하지 않으면 layouts/default.vue에 설정된 레이아웃으로 자동 설정
      </div>
      <div class="text-left">
        - definePageMeta의 layout 속성을 이용하거나 setPageLayout을 이용하여
        동적으로 설정함
      </div>
    </template>
    <v-card-actions class="">
      <v-row align="center" justify="end">
        <v-col cols="auto">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            variant="outlined"
            @click="setPageLayout('default')"
          >
            chage default layout
          </v-btn>
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            variant="outlined"
            @click="setPageLayout('custom')"
          >
            chage custom layout
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'sample / NuxtLayout',
  layout: 'custom',
});
</script>

<style scoped></style>
