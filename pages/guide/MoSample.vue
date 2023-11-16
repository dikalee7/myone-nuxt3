<template>
  <v-container fluid>
    <v-card>
      <template v-slot:text>
        <div class="text-center">{{ callRslt }}</div>
      </template>
      <v-card-actions class="">
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <UiButton
              :btxt="'alert'"
              :dCls="'d-inline'"
              @actionClick="fnCall('alert')"
            />
            <UiButton
              :btxt="'confirm'"
              :dCls="'d-inline'"
              @actionClick="fnCall('confirm')"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <UiTableView :tbData="desc" />
  </v-container>
</template>

<script setup lang="ts">
import { TB_THEME } from '~/components/ui/TableView.vue';

definePageMeta({
  title: 'useMo 사용법',
  hideHeader: false,
  hideBack: false,
  hideHome: false,
});

const dialog = ref(false);
const callRslt = ref('alert / confirm 테스트');
const mo = useMo();

const fnCall = async (gbn: string) => {
  let rslt = false;

  switch (gbn) {
    case 'alert':
      rslt = await mo.alert({
        title: '알럿 경고',
        message: 'alert 메시지 테스트 중',
      });
      callRslt.value = `alert 결과 : ${rslt}`;
      break;

    case 'confirm':
      rslt = await mo.confirm({
        title: '컨펌 확인',
        message: 'confirm 메시지 테스트 중',
        options: {
          color: 'grey',
          width: 600,
          zIndex: 3000,
        },
      });
      callRslt.value = `confirm 결과 : ${rslt}`;
      break;
  }
};

const desc = {
  tbCls: 'text-caption',
  tbTheme: TB_THEME.DARK,
  hdInfo: [
    { key: 'item', name: '항목', width: '20%' },
    { key: 'desc', name: '설명', width: '80%' },
  ],
  tdInfo: [
    {
      item: 'composables',
      desc: `composables/useMo.ts`,
    },
    {
      item: 'alert',
      desc: `
<pre>
const mo = useMo();
const fnAlert = async() => {
  const rslt = await mo.alert({
    title: '알럿 경고',
    message: 'alert 메시지 테스트 중',
  });
}
</pre>
      `,
    },
    {
      item: 'confirm',
      desc: `
<pre>
const mo = useMo();
const fnConfirm = async() => {
  const rslt = await mo.confirm({
    title: '컨펌 확인',
    message: 'confirm 메시지 테스트 중',
  });
}
</pre>`,
    },
  ],
};
</script>

<style scoped></style>
