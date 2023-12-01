<template>
  <v-container fluid>
    <v-card
      class="mb-3"
      :title="item.title"
      v-for="(item, j) in items"
      :key="j"
    >
      <!-- prepend-icon="mdi-arrow-right-bold-hexagon-outline" -->
      <template v-slot:text>
        <div class="text-left">
          {{ item.desc }}
        </div>
      </template>
      <v-card-actions class="" v-if="item.to">
        <v-row align="center" justify="end">
          <v-col cols="auto">
            <v-btn
              class="text-none"
              color="medium-emphasis"
              min-width="92"
              variant="outlined"
              :to="item.to"
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

interface IItem {
  title: string;
  desc: string;
  to?: string;
}

const items: IItem[] = [
  {
    title: '<ClientOnly>',
    desc: '구성요소(component)를 클라이언트 측 랜더링으로 적용하기 위해 제공',
    to: '/sample/ClientOnly',
  },
  {
    title: '<NuxtPage>',
    desc: 'pages 디렉토리내에 위치한 페이지들을 표시하기 위해 제공되는 구성요소',
  },
  {
    title: '<NuxtLayout>',
    desc: '페이지 및 오류 페이지에 특정 레이아웃을 지정할 수 있도록 제공하는 구성요소',
    to: '/sample/NuxtLayout',
  },
  {
    title: '<NuxtLink>',
    desc: '어플리케이션 내 링크 처리를 위해 제공되는 구성요소',
  },
];
</script>

<style scoped></style>
