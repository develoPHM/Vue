<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
// import {ref} from 'vue';

export default {
  props: ['todoItems'],

  // setup() {
  //   const items = ref([]);
  //
  //   return {items}
  // }
}
</script>

<style scoped>

</style>