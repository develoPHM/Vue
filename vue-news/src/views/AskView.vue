<template>
  <div>
    <div v-for="i in this.$store.state.ask" :key="i.id">{{ i.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS')
  }
}
</script>

<style scoped>

</style>