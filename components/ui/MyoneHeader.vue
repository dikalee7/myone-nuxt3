<template>
  <v-app-bar
    color="teal-darken-4"
    v-if="!hInfo.hideHeader"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-icon class="ml-5" v-if="hInfo.hideBack">mdi-wallet</v-icon>

    <v-btn icon v-if="!hInfo.hideBack" @click="tfn.goBack">
      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>

    <v-app-bar-title>{{ hInfo.title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-if="!hInfo.hideHome" @click="tfn.goHome">
      <v-icon>mdi-home-circle</v-icon>
    </v-btn>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        const store = useHeaderStore();
        const router = useRouter();

        const tfn = {
            goBack: () => {
                router.go(-1);
            },
            goHome: () => {
                router.replace('main');
            }
        }

        return {
            hInfo: computed(() => store.getHeaderInfo),
            tfn
        }
    },
})
</script>

<style scoped>

</style>