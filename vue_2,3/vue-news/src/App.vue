<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <SpinMove :loading="loadingStatus"></SpinMove>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import SpinMove from '@/components/SpinMove.vue';
import bus from '@/utills/bus.js'

export default {
  components: {
    SpinMove,
    ToolBar,
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner); //
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() { // 컴포넌트 역할 끝나고 나서 이벤트버스 해지
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}
a {
  color: #35495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}
a:hover {
  color: #42b833;
  text-decoration: underline;
}
</style>
