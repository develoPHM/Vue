<template>
  <div class="inputBox">
<!-- v-on:keyup.enter로 버튼 구현  -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
<!--    <button v-on:click="addTodo">add</button>-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo() {
      // localStorage 는 순서대로 저장하지 않음.
      localStorage.setItem(this.newTodoItem,this.newTodoItem);
      this.clearInput()
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height:50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, mediumpurple);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
