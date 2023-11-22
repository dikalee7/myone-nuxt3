<template>
  <v-container fluid>
    <v-card class="mb-3" title="<ClientOnly>">
      <!-- prepend-icon="mdi-arrow-right-bold-hexagon-outline" -->
      <template v-slot:text>
        <div class="text-left">
          구성요소(component)를 클라이언트 측 랜더링으로 적용하기 위해 제공
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
              to="/sample/ClientOnly"
              nuxt
            >
              Sample
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Nuxt3 / Components ',
  hideHeader: false,
  hideBack: false,
  hideHome: false,
});
</script>

<style scoped></style>
