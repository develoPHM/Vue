<template>
  <div>
    <p v-for="ask in this.$store.state.asks" :key="ask.id">
      <router-link v-bind:to="'/item/' + ask.id">
        <a>
          {{ ask.title }}
        </a>
      </router-link>
    </p>
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