<template>
  <div>
    <div v-for="i in ask" :key="i.id">{{ i.title }}</div>
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
    fetchAskList()
        .then(res => this.ask = res.data)
        .catch(function (err) {
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>