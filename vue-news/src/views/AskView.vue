<template>
  <div>
    <div v-for="i in askItems" :key="i.id">{{ i.title }}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askItems : 'fetchedAsk'
    })
    // ...mapState({
    //   askk: state => state.ask
    // })
  }
  ,
  created() {
    this.$store.dispatch('FETCH_ASKS')
  }
}
</script>

<style scoped>

</style>