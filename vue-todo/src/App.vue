<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem='addOneItem'></TodoInput>
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeItem="removeOneItem"
              v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    clearAllItems() {
      localStorage.clear()
      this.todoItems = []
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj)
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
  // created() { // 뷰 라이프사이클 훅
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         // JSON.parse 하면 스트링으로만 들어온걸 객체로 바꿔줌
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  //         // this.todoItems.push(localStorage.key(i))
  //       }
  //     }
  //   }
  // },
  components: {TodoFooter, TodoList, TodoInput, TodoHeader},
  TodoHeader,
  TodoInput,
  TodoList,
  // 'TodoFooter': TodoFooter 이와같이 생략 가능
  TodoFooter
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px white;
}
</style>
