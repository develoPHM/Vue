<template>
  <div>
    <p>
      {{ this.$store.state.items.title }}
    </p>
  </div>
</template>

<script>
export default {
  created() {
    const item = this.$route.params.id
    this.$store.dispatch('FETCH_ITEMS', item)
  }
}
</script>

<style scoped>

</style>
