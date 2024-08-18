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
    // headerText : 'Todo it~~'
    todoItems: storage.fetch()
  }
})
