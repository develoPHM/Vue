<template>
  <div>
    <label for="todo-input">오늘 할 일</label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    // input 변경 이벤트 발생
    handleInput(event: InputEvent): void {
      const eventTarget = event.target as HTMLInputElement;
      this.$emit('input', eventTarget.value);
    },
    // 추가버튼 이벤트를 상위 컴포넌트로 올리는 함수
    addTodo() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>
