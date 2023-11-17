<template>
  <v-card theme="dark" :image="getImageUrl(ctInfo.image)">
    <template v-slot:image>
      <v-img :gradient="ctInfo.gradient"> </v-img>
    </template>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h6"> {{ ctInfo.title }} </v-card-title>

        <v-card-subtitle v-if="ctInfo.subtitle">
          {{ ctInfo.subtitle }}
        </v-card-subtitle>

        <!-- eslint-disable -->
        <v-card-text v-html="ctInfo.text"></v-card-text>
        <!-- eslint-enable -->

        <v-card-actions v-if="ctInfo.actions">
          <v-btn
            class="ms-2 text-none"
            variant="outlined"
            size="small"
            @click="tfn.action(act.emnm, act.empr)"
            v-for="(act, i) in ctInfo.actions"
            :key="i"
          >
            {{ act.name }}
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
const emits = defineEmits(['goPage']);
const props = defineProps<{
  ctInfo: IFCtInfo;
}>();
const { getImageUrl } = useCmn();

const tfn = {
  getImageUrl: useCmn().getImageUrl,
  action: (enm: any, empr: any) => {
    // emit 명에 따라 분기 처리 될 수 있도록(확장성 고려)
    if (enm) {
      emits(enm, empr);
    }
  },
};
</script>

<style scoped></style>
