<template>
  <TodoHeader></TodoHeader>
  <TodoInput></TodoInput>
<!--  프롭스로 내려준다-->
<!--<TodoList :하위프롭스이름="상위컴포넌트의 데이터이름" -->
  <TodoList :todoItems="todoItems"></TodoList>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import {ref} from 'vue';

export default {
  components: {TodoInput, TodoHeader, TodoList},
  setup() {
    const todoItems = ref([])

    function fetchTodos() {
      const result = []
      for (let i = 0; i < localStorage.length; i++ ) {
        const todoItem = localStorage.key(i);
        result.push(todoItem)
        // items.value.push(todoItem)
      }
      return result
    }
    todoItems.value = fetchTodos();

    return {todoItems}

  }
}
</script>

<style scoped>

</style>