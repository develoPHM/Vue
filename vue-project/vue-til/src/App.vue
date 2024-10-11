<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  created() {
  },
  components: {
    AppHeader
  }
}
</script>

<style scoped>

</style>