<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '@/utills/bus';

export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner'); // 이벤트를 start:spinner 로 App.vue로 보냄
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.log(err)
          })
    }, 1500)
  }
}
</script>

<style scoped>
</style>