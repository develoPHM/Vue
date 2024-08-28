<template>
  <TodoHeader></TodoHeader>
  <!--  <TodoInput @하위컴포넌트 이벤트 이름="상위컴포넌트의 메서드 이름"></TodoInput>-->
  <TodoInput @add="addTodoItem"></TodoInput>
  <!--<TodoList :하위프롭스이름="상위컴포넌트의 데이터이름" -->
  <TodoList :todoItems="todoItems" @remove="removeTodoItem"></TodoList>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import {ref} from 'vue';

export default {
  components: {TodoInput, TodoHeader, TodoList},

  // methods: {
  //   removeTodoItem(item, index) {
  //     this.todoItems.splice(index,1);
  //     localStorage.removeItem(item);
  //   }
  // },
  setup() {
    const todoItems = ref([])

    function fetchTodos() {
      const result = []
      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem)
        // items.value.push(todoItem)
      }
      return result
    }

    todoItems.value = fetchTodos();

    function addTodoItem(todo) {
      todoItems.value.push(todo)
      localStorage.setItem(todo, todo)
    }

    function removeTodoItem(todo,index) {
      todoItems.value.splice(index,1);
      localStorage.removeItem(todo)
    }
    return {todoItems, addTodoItem, removeTodoItem};

  }
}


</script>

<style scoped>

</style>