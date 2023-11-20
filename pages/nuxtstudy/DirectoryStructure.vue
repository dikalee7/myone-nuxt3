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

definePageMeta({
  title: 'Nuxt3 / Directory ',
  hideHeader: false,
  hideBack: false,
  hideHome: false,
});

//.nuxt
const dotNuxt = {
  item: '.nuxt',
  desc: `
<pre>

개발 모드에서 vue application을 만들기 위한 directory
'nuxt dev' 실행시 자동 생성되므로 해당 디렉토리 내부를 임의 변경하지 말것

</pre>`,
};

//.output
const dotOutput = {
  item: '.output',
  desc: `
<pre>

배포 모드에서 vue application을 만들기 위한 directory
'nuxt build' 실행시 자동 생성되므로 해당 디렉토리 내부를 임의 변경하지 말것

</pre>`,
};

//assets
const assets = {
  item: 'assets',
  desc: `
<pre>

Stylesheets (CSS, SASS, etc.)
Fonts
Images
와 같은 웹을 구성하는 자원파일을 저장하는 곳입니다.

</pre>`,
};

//components
const components = {
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
때문에 파일명과 구성요소 명을 동일하게 설정하는 것이 좋습니다.

순수하게 파일명으로만 구성요소 이름을 정하고 싶다면
nuxt.config.ts 파일내에 아래와 같이 pathPrefix를 false로 설정하세요.

components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

*** Dynamic components ***
resolveComponent 를 사용해서 동적으로 빌트인 컴포넌트를 이용하여 component를 import 할 수 있다.
&lt;template /&gt;
  &lt;component :is="clickable ? MyButton : 'div'" /&gt;
&lt;/template&gt;
&lt;script setup&gt;
	const MyButton = resolveComponent('MyButton')
&lt;/script&gt;

</pre>`,
};

//composables
const composables = {
  item: 'composables',
  desc: `
<pre>

nuxt는 composables/ 아래에 있는 Vue 컴포저블을 애플리케이션으로 자동 import합니다.

방법1) 명명하여 export 하기
export const useFoo = () => {
  return ...
}

방법2) default로 export 하기
export default function()  {
  return ...
}

방법1의 경우 명명한 useFoo()로 해당 컴포저블을 사용할 수 있습니다.

방법2의 경우 컴포저블의 파일명을 이용하여 사용할 수 있습니다.
use-foo.ts or useFoo.ts 로 파일명을 설정한 경우 useFoo()로 사용합니다.

</pre>`,
};

//layouts
const layouts = {
  item: 'layouts',
  desc: `
<pre>

레이아웃을 지정하지 않으면 layouts/default.vue가 기본 레이아웃으로 사용됩니다.
애플리케이션에 레이아웃이 하나만 있는 경우 app.vue를 사용하는 것이 좋습니다.
다른 구성 요소와 달리 레이아웃에는 Nuxt가 레이아웃 변경 간에 전환을 적용할 수 있도록
단일 루트 요소 <slot />이 있어야 합니다.

사용법1 - definePageMeta
definePageMeta({
  layout: 'layout'
})

사용법2 - 속성 사용
&lt;NuxtLayout :name="layout" &gt;

사용법3 - 레이아웃 동적 변경
setPageLayout('layout')


</pre>`,
};

//middleware
const middleware = {
  item: 'middleware',
  desc: `
<pre>

경로 이동전 수행되는 코드


- defineNuxtRouteMiddleware(route middleweare) 사용예

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }

  if (to.path !== '/') {
    return navigateTo('/')
  }
})

navigateTo- 지정된 경로로 리디렉션
abortNavigation- 선택적 오류 메시지와 함께 탐색을 중단합니다.

- middleware 순서
============================================================
middleware/
--| analytics.global.ts
--| setup.global.ts
--| auth.ts
============================================================

definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
});

1. analytics.global.ts
2. setup.global.ts
3. Custom inline middleware
4. auth.ts

</pre>`,
};

//modules
const modules = {
  item: 'modules',
  desc: `
<pre>

애플리케이션 내에서 로컬 모듈

</pre>`,
};
const desc = {
  tbCls: 'text-caption motb',
  tbTheme: TB_THEME.LIGHT,
  hdInfo: [
    { key: 'item', name: '항목', width: '20%' },
    { key: 'desc', name: '설명', width: '80%' },
  ],
  tdInfo: [
    dotNuxt,
    dotOutput,
    assets,
    components,
    composables,
    layouts,
    middleware,
    modules,
    {
      item: '111',
      desc: `
<pre>


</pre>`,
    },
  ],
};
</script>

<style scoped></style>
