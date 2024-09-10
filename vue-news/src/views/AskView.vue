<template>
  <div>
    <div v-for="i in ask" :key="i.id">{{ ask }}}</div>
  </div>
</template>

<script>
import {fetchAskList} from "../api/index.js";

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    let vm = this;
    fetchAskList()
        .then(function (res) {
          vm.ask = res.data;
        })
        .catch(function (err) {
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>