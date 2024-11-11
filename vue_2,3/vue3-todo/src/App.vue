<template>
  <TodoHeader></TodoHeader>
  <!--  <TodoInput @하위컴포넌트 이벤트 이름="상위컴포넌트의 메서드 이름."></TodoInput>-->
  <TodoInput @add="addTodoItem"></TodoInput>
  <!--<TodoList :하위프롭스이름="상위컴포넌트의 데이터이름" -->
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import {useTodo} from '@/hooks/useTodo';

export default {
  components: {TodoInput, TodoHeader, TodoList},

  setup() {
    const {
      todoItems,
      addTodoItem,
      // fetchTodos
    } = useTodo();

    return {todoItems, addTodoItem};
  },
  methods: {
    removeTodoItem(todo, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todo)
    }
  }
}


</script>

<style scoped>

</style>