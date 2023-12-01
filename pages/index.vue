<template>
  <v-card class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col cols="12" v-for="ct in mainCont" :key="ct.id">
          <MainContent :ctInfo="ct" @goPage="tfn.goPage" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'MY ONE',
  hideHeader: false,
  hideBack: true,
  hideHome: false,
});

const router = useRouter();
const mo = useMo();
const { mainCont } = useMainCt();
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;

const tfn = {
  goPage: (p: any) => {
    if (p.name == 'main') {
      mo.alert({
        title: '준비중',
        message: '아직 제공되지 않습니다.',
      });
    } else {
      router.push({ name: p.name, params: p.params });
    }
  },
};
</script>

<style scoped></style>
