<template>
  <div>
    <button @click="loginUser2">login</button>
    <h1>list</h1>
    <ul>
      <li v-for="item in items" :key="item.id"> {{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(res => {
            if (res.data.id === 1) {
              axios.get('https://jsonplaceholder.typicode.com/todos')
                  .then(res => {
                    this.items = res.data;
                  })
            }
          })
    },
    async loginUser2() {
      try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        if (response.data.id === 1) {
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos')
          this.items = list.data;
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>

<style scoped>

</style>