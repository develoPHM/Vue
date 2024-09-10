<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ users }}}</div>
  </div>
</template>

<script>
import {fetchNewsList} from '../api/index.js'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    let vm = this;
    fetchNewsList()
        .then(res => {
          vm.users = res.data;
        })
  }
}
</script>

<style scoped>

</style>