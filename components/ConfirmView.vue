<template>
  <div>
    <v-dialog
      v-model="dialog"
      :max-width="options.width"
      :style="{ zIndex: options.zIndex }"
      @keydown.esc="cancel"
    >
      <v-card>
        <v-toolbar dark :color="options.color" dense flat>
          <v-toolbar-title class="text-body-2 font-weight-bold grey--text">
            {{ title }}
          </v-toolbar-title>
        </v-toolbar>
        <!-- eslint-disable -->
        <v-card-text
          v-show="!!message"
          class="pa-4 black--text"
          v-html="message"
        ></v-card-text>
        <!-- eslint-enable -->
        <v-card-actions class="pt-3">
          <v-spacer></v-spacer>
          <v-btn
            v-if="!options.noconfirm"
            color="grey"
            text
            class="body-2 font-weight-bold"
            @click="cancel"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            class="body-2 font-weight-bold"
            outlined
            @click="agree"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const dialog = ref(false);
const message = ref('');
const title = ref('');
const options: Ref<IFConfirmOptions> = ref({
  color: 'indigo',
  width: 400,
  zIndex: 3000,
  noconfirm: false,
});

const { $bus } = useNuxtApp();

onMounted(() => {
  $bus.$on('showAlert', (p: any) => {
    open(p.title, p.message, p.options);
  });
});

const open = (t: string, m: string, opt: IFConfirmOptions | undefined) => {
  dialog.value = true;
  title.value = t;
  message.value = m;
  options.value = {
    ...options.value,
    ...opt,
  };
};
const agree = () => {
  $bus.$emit('returnAlert', true);
  dialog.value = false;
};
const cancel = () => {
  $bus.$emit('returnAlert', false);
  dialog.value = false;
};
</script>

<style scoped></style>
