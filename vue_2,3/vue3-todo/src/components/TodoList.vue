<template>
  <ul>
    <li v-for="(item, index) in todoItems" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)"> 삭제</button>
    </li>
  </ul>
</template>

<script>
// import {ref} from 'vue';;
import {watch} from 'vue';

export default {
  props: ['todoItems'],
  setup(props, context) {
    const removeTodo = (item, index) => {
      context.emit('remove', item, index);
    }

    watch(props.todoItems, (newValue) => {
      console.log({newValue})
    })
    return {removeTodo}
  }
}
</script>

<style scoped>

</style>