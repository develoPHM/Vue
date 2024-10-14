<template>
  <div class="app">
    <app-header></app-header>
    <div class="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  components: {
    AppHeader
  }
};
</script>

<style scoped>
@import '@/css/reset.css';
@import '@/css/common.css';
</style>
