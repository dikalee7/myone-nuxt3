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
  </v-container>
</template>

<script setup lang="ts">
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
      });
      callRslt.value = `confirm 결과 : ${rslt}`;
      break;
  }
};
</script>

<style scoped></style>
