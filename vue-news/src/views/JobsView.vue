<template>
  <div>
    <div v-for="job in jobs" :key="job.id">{{ jobs}}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from "../api/index.js";

export default {
  data() {
    return {
      jobs : []
    }
  },
  created() {
    let vm = this;
    fetchJobsList()
        .then(function (res) {
          vm.jobs = res.data;
        })
        .catch(function (err) {
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>