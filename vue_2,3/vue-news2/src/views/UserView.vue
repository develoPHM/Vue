<template>
  <div>
    {{ this.$store.state.users }}
  </div>
</template>

<script>
export default {
  created() {
    const username = this.$route.params.id
    this.$store.dispatch('FETCH_USERS', username)
  }
}
</script>

<style scoped>

</style>