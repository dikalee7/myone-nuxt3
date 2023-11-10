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

</script>

<style scoped>

</style>