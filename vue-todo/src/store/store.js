import Vue from 'vue';
import Vuex from 'vuex'

// vuex를 사용한다.
Vue.use(Vuex)

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // JSON.parse 하면 스트링으로만 들어온걸 객체로 바꿔줌
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
          // this.todoItems.push(localStorage.key(i))
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations : {
    addOneItem(state, todoItem) {
      console.log(state)
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj)
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item)
      localStorage.setItem(payload.todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
      localStorage.clear()
      state.todoItems = []
    }
  }
})
