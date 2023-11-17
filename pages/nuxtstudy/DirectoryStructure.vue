<template>
  <v-container fluid>
    <v-card
      class="mb-3"
      title="Nuxt3 디렉토리 구조"
      subtitle="Directory Structure"
      prepend-icon="mdi-cube"
    >
    </v-card>
    <v-card>
      <UiTableView :tbData="desc" />
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { TB_THEME } from '~/components/ui/UiTableView.vue';
const desc = {
  tbCls: 'text-caption motb',
  tbTheme: TB_THEME.LIGHT,
  hdInfo: [
    { key: 'item', name: '항목', width: '20%' },
    { key: 'desc', name: '설명', width: '80%' },
  ],
  tdInfo: [
    {
      item: '.nuxt',
      desc: `
<pre>

Nuxt는 개발 시 .nuxt/ 디렉토리를 사용하여 Vue 애플리케이션을 생성합니다.
'nuxt dev' 실행시 자동 생성되므로 해당 디렉토리 내부를 임의 변경하지 말것

</pre>`,
    },
    {
      item: '.output',
      desc: `
<pre>

Nuxt는 프로덕션용 애플리케이션을 구축할 때 .output/ 디렉터리를 생성
'nuxt build' 실행시 자동 생성되므로 해당 디렉토리 내부를 임의 변경하지 말것
</pre>`,
    },
    {
      item: 'assets',
      desc: `
<pre>

Stylesheets (CSS, SASS, etc.)
Fonts
Images 
와 같은 웹을 구성하는 파일을 포함함

</pre>`,
    },
    {
      item: 'components',
      desc: `
<pre>

모든 Vue 구성 요소를 저장하는 곳
nuxt는 이 디렉토리 안에 있는 모든 구성요소를 자동 import 합니다.

다음과 같은 하위 요소로 구성되어 있는 경우
components/main/Content.vue
components/main/MainContent.vue

디렉토리와 파일명으로 중첩된 이름을 제거하고 구성요소 명이 결정되므로 
동일하게 아래와 같이 사용할 수 있습니다.
&lt;MainContent /&gt;

순수하게 파일명으로만 구성요소 이름을 정하고 싶다면 
nuxt.config.ts 파일내에 아래와 같이 pathPrefix를 false로 설정하세요.

components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

</pre>`,
    },
  ],
};
</script>

<style scoped></style>
