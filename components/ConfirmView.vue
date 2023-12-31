<template>
  <div>
    <v-dialog
      v-model="dialog"
      :max-width="options.width"
      :style="{ zIndex: options.zIndex }"
      @keydown.esc="cancel"
    >
      <v-card>
        <v-toolbar :color="options.color" dense flat>
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
          >
            {{ options.cancelTxt }}
          </v-btn>
          <v-btn
            color="primary"
            class="body-2 font-weight-bold"
            outlined
            @click="agree"
          >
            {{ options.okTxt }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
const dialog = ref(false);
const message = ref('');
const title = ref('');
const basicOptions = {
  color: 'indigo',
  width: 400,
  zIndex: 3000,
  noconfirm: false,
  okTxt: '확인',
  cancelTxt: '취소',
};
const options: Ref<IFConfirmOptions> = ref(basicOptions);

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
  initOptions();
  dialog.value = false;
};
const cancel = () => {
  $bus.$emit('returnAlert', false);
  initOptions();
  dialog.value = false;
};

const initOptions = () => {
  title.value = '';
  message.value = '';
  options.value = basicOptions;
};
</script>

<style scoped></style>
