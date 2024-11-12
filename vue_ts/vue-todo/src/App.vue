<template>
  <div>
    <header>
      <h1>Vue todo with TS</h1>
    </header>
    <main>
      <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem" />
      <div>
        <ul>
          <TodoListItem
            v-for="(todoItem, index) in todoItems"
            :key="index"
            :todoItem="todoItem"
            :index="index"
            @delete="removeTodoItem"
          ></TodoListItem>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoListItem from '@/components/TodoListItem.vue';

const STORAGE_KEY = 'todo';
const storage = {
  save(value: any) {
    const parsed = JSON.stringify(value);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch() {
    const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
    console.log(todoItems);
    return JSON.parse(todoItems);
  },
};

export default Vue.extend({
  components: { TodoListItem, TodoInput },
  data() {
    return {
      todoText: '',
      todoItems: [] as any[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      this.todoItems.push(value);
      console.log(this.todoItems);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = '';
    },
    removeTodoItem(index: number) {
      console.log('삭제', index);
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
