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
            @toggle="toggleTodoItemComplete"
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

// 로컬 저장소 키 초기화
const STORAGE_KEY = 'todo';

const storage = {
  // 로컬 저장소의 데이터를 JSON 문자열로 저장
  save(value: any) {
    const parsed = JSON.stringify(value);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  // 로컬 저장소에서 데이터를 불러옴
  fetch() {
    const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
    console.log(todoItems);
    return JSON.parse(todoItems);
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  components: { TodoListItem, TodoInput },
  data() {
    return {
      todoText: '',
      todoItems: [] as Todo[],
    };
  },
  methods: {
    // 입력값이 변경되었을 때 호출
    updateTodoText(value: string) {
      this.todoText = value;
    },
    // 새로운 데이터 추가할 때 호출
    addTodoItem() {
      const value = this.todoText;
      const todo: Todo = {
        title: value,
        done: false,
      };
      this.todoItems.push(todo);
      console.log(this.todoItems);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    // 인풋 빈값으로 초기화
    initTodoText() {
      this.todoText = '';
    },
    // 삭제 버튼 함수
    removeTodoItem(index: number) {
      console.log('삭제', index);
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    // 로컬 저장소의 데이터를 불러오는 함수
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
    toggleTodoItemComplete(todoItem: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        ...todoItem,
        done: !todoItem.done,
      });
      storage.save(this.todoItems);
    },
  },
  created() {
    // 컴포넌트가 생성될 때 로컬 저장소에서 데이터 불러옴
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
