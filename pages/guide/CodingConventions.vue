<template>
  <v-container fluid>
    <v-card
      title="코딩 규칙(추후 nuxt3에 맞게 변경할 예정)"
      subtitle="Coding Convention"
      prepend-icon="mdi-cube"
    >
      <v-expansion-panels variant="default" class="pa-0 mb-3" v-model="panel">
        <GuideExpensionPanel :cardInfo="directoryInfo" @viewImg="emViewImg" />
        <GuideExpensionPanel :cardInfo="codingInfo" @viewImg="emViewImg" />
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { TB_THEME } from '~/components/ui/UiTableView.vue';

definePageMeta({
  title: 'Coding Conventions',
  hideHeader: false,
  hideBack: false,
  hideHome: false,
});

const panel = ref([0]);

const directoryInfo = ref({
  title: '디렉토리 구조',
  cards: [
    {
      items: [
        { gbn: 'chip', vtg: 'src/domains 아래 각 업무별로 구성함' },
        { gbn: 'img', vtg: 'directory.jpg', width: '300' },
      ],
    },
    {
      items: [
        { gbn: 'chip', vtg: '각 업무별 하위 디렉토리 구조' },
        {
          gbn: 'table',
          vtg: {
            tbCls: 'text-caption',
            tbTheme: TB_THEME.DARK,
            hdInfo: [
              { key: 'item', name: '항목', width: '20%' },
              { key: 'desc', name: '설명', width: '80%' },
            ],
            tdInfo: [
              {
                item: 'component',
                desc: `업무에서 사용하는 공통컴포넌트`,
              },
              {
                item: 'composables',
                desc: `업무에서 사용하는 공통 기능으로 VUE3의 컴포지션 API를 활용한 재사용 함수`,
              },
              {
                item: 'router',
                desc: `업무 페이지 router 설정`,
              },
              {
                item: 'views',
                desc: `업무 페이지`,
              },
            ],
          },
        },
      ],
    },
  ],
});

const codingInfo = ref({
  title: '코딩 가이드',
  cards: [
    {
      items: [
        { gbn: 'chip', vtg: '샘플' },
        { gbn: 'img', vtg: 'coding_template.jpg', width: '' },
        { gbn: 'txt', vtg: 'domains/sample/views/SamplePage.vue' },
      ],
    },
    {
      items: [
        { gbn: 'chip', vtg: '참고' },
        {
          gbn: 'table',
          vtg: {
            tbCls: 'text-caption',
            tbTheme: TB_THEME.DARK,
            hdInfo: [
              { key: 'item', name: '항목', width: '20%' },
              { key: 'desc', name: '설명', width: '80%' },
            ],
            tdInfo: [
              {
                item: 'props',
                desc: `Vue2 option api 형태로 작성`,
              },
              {
                item: 'data',
                desc: `Vue3 composition api 형태로 작성`,
              },
              {
                item: 'computed',
                desc: `Vue3 composition api 형태로 작성`,
              },
              {
                item: 'lifecycle hooks',
                desc: `Vue2 option api 형태로 작성`,
              },
              {
                item: 'method',
                desc: `Vue2 option api 형태로 작성`,
              },
              {
                item: 'composable',
                desc: `Vue3의 컴포지션 API를 활용한 재사용 함수
                    <br /><br />Vue3에서는 mixin을 사용하지 말고 composable 기능을 사용하도록 권고함
                    <br /><br />*공통 utils를 composable방식으로 제공하였음`,
              },
            ],
          },
        },
        {
          gbn: 'txt',
          vtg: 'data / computed는 vue3의 composition api로 작성하고, 그외 props 및 hook 그리고 method는 vue2의 option api 형태로 작성하도록 함',
        },
      ],
    },
  ],
});

const reveal = ref(false);
const vImg = ref('directory.jpg');
const emViewImg = (img: string) => {
  vImg.value = img;
  //this.reveal = true;
};
</script>

<style scoped></style>
