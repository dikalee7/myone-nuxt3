<template>
  <v-expansion-panel>
    <v-expansion-panel-title class="ma-0">
      {{ cardInfo.title }}
    </v-expansion-panel-title>
    <v-expansion-panel-text class="text-small-left">
      <v-card
        class="mt-3"
        variant="tonal"
        color="white"
        v-for="(card, i) in cardInfo.cards"
        :key="i"
      >
        <v-card-item class="pa-0" v-for="(item, j) in card.items" :key="j">
          <v-chip
            color="teal-darken-3"
            class="ma-0"
            label
            v-if="item.gbn == 'chip'"
          >
            <v-icon start icon="mdi-arrow-down-drop-circle-outline"></v-icon>
            {{ item.vtg }}
          </v-chip>

          <v-img
            :width="item.width"
            aspect-ratio="1/1"
            cover
            :src="tfn.getImageUrl(item.vtg)"
            v-if="item.gbn == 'img'"
            @click="tfn.viewImage(item.vtg)"
          ></v-img>

          <v-card-text
            class="bg-black text-small-left ma-0 pa-1"
            v-if="item.gbn == 'txt'"
          >
            {{ item.vtg }}
          </v-card-text>

          <UiTableView :tbData="item.vtg" v-if="item.gbn == 'table'" />
        </v-card-item>
      </v-card>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup lang="ts">
const emits = defineEmits(['viewImg']);
const props = defineProps<{
  cardInfo: Object;
}>();

const tfn = {
  getImageUrl: (imagename: string) => {
    return imagename
      ? new URL(`/assets/image/guide/${imagename}`, import.meta.url).href
      : '';
  },
  viewImage: (img: string) => {
    emits('viewImg', img);
  },
};
</script>

<style scoped></style>
