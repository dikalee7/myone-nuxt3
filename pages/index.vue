<template>
  <div>
    <h2>Welcome to Layouts example</h2>
    <SubOne />
  </div>
  
</template>

<script setup lang="ts">
definePageMeta({
  test: 'ddd'
})

onMounted(()=>{
  console.log('onMounted')
})
</script>

<style scoped>

</style>