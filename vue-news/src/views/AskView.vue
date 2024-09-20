<template>
  <div>
    <p v-for="item in askItems" :key="item.id">
      <router-link v-bind:to="`item/${item.id}`">
        {{ item.title}}
      </router-link>
      <small>{{ item.time_ago}} by {{ item.user}}</small>
    </p>
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