<template>
  <div>
    <h2>Welcome to Layouts example</h2>
    <SubOne />
  </div>
  
</template>

<script setup lang="ts">
definePageMeta({
  title:'MY ONE',
  hideHeader: false,
  hideBack: true,
  hideHome: false,
})


onMounted(()=>{
  console.log('onMounted')
  const { $bus } = useNuxtApp()
  // const bus = useBu
  // bus.$emit("someEvent", 'Data to send')
  

//   this.$bus.$on("someEvent", (data) => {
//     console.log(data);
//     //Some stuff to do..
// }
})
</script>

<style scoped>

</style>