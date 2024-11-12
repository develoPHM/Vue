<template>
  <li>
    <span>{{ todoItem }}</span>
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    todoItem: String,
    index: Number,
  },
  methods: {
    // 삭제클릭 이벤트를 상위컴포넌트로 올리는 함수
    removeItem() {
      this.$emit('delete', this.index);
    },
  },
});
</script>

<style scoped></style>
