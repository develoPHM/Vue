<template>
  <div>
    <ul>
      <li v-bind:key="todoItem.item" v-for="(todoItem, index) in propsdata">
        <!-- completed가 true냐 false냐에 따라 스타일이 적용 되는지 안되는지 구현-->
        <i class="fas fa-check checkBtn"
           v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  props: ['propsdata'],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index)
      // localStorage.removeItem(todoItem.item);
      // this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem, index) {
      this.$emit('toggleItem', todoItem, index);

    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
