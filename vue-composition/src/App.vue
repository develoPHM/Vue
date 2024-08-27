<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">버튼</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello'
    }
  },
  methods: {
    changeMessage() {
      this.message
    }
  }
}
</script>

<style scoped>

</style>