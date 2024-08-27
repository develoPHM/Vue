import Vue from 'vue';
import Vuex from 'vuex'

// vuex를 사용한다.
Vue.use(Vuex)

const storage = {
  fetch() {
    const localItems = localStorage.getItem('Do');
    if (localItems) {
      return JSON.parse(localItems);
    }
    return []
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    onUpdate(state, payload) { // 인풋 유지
      localStorage.setItem('todoTemp', payload.text)
    },
    addOneItem(state, todoItem) { // 인풋 추가
      const obj = { completed: false, todo: todoItem };
      state.todoItems.push(obj);  // 상태 업데이트
      localStorage.setItem('Do', JSON.stringify(state.todoItems));  // 로컬 스토리지 업데이트
    },
    removeOneItem(state, payload) { // 요소 제거
      state.todoItems.splice(payload.index, 1);  // 상태에서 항목 제거
      localStorage.setItem('Do', JSON.stringify(state.todoItems));  // 로컬 스토리지 업데이트
    },
    toggleOneItem(state, payload) { // 체크박스
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.setItem('Do', JSON.stringify(state.todoItems));  // 로컬 스토리지 업데이트
    },
    clearAllItems(state) { // 전부삭제
      state.todoItems = [];
      localStorage.removeItem('Do');
    }
  }
})

