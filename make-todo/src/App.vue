<template>
  <div class="main">
    <TodoHeader></TodoHeader>
    <TodoInput @add="addTodoItem"></TodoInput>
    <TodoList :todoItems="todoItems" @remove="removeFunc"></TodoList>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import {useTodo} from '@/hooks/useTodo';

export default {
  components: {TodoList, TodoInput, TodoHeader},
  setup() {
    const {todoItems, addTodoItem} = useTodo(); // usetodo.js에서 todoItems 함수를 쓴다.
    return {todoItems, addTodoItem}
  },
  methods: {
    removeFunc(item) {
      this.todoItems.splice(item,1)
      localStorage.removeItem(item);
    }
  }
}
</script>

<style scoped>
</style>