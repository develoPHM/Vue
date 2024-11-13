<template>
  <li>
    <span class="item complete" @click="toggleItem">{{ todoItem }}</span>
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Todo } from '@/App.vue';

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  methods: {
    // 삭제클릭 이벤트를 상위컴포넌트로 올리는 함수
    removeItem() {
      this.$emit('delete', this.index);
    },
    toggleItem() {
      this.$emit('toggle', this.todoItem, this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
