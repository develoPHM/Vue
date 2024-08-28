<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">버튼</button>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  // data() {
  //   return {
  //     message: 'hello'
  //   }
  // },
  setup() {
    // data
    const message = ref('hello')
    // methods
    function changeMessage() {
      message.value = 'hi';
    }
    return { message, changeMessage };
  }
  // methods: {
  //   changeMessage() {
  //     this.message
  //   }
  // }
}
</script>

<style scoped>

</style>