<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title : </label>
          <input id = 'title' type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents : </label>
          <textarea id ='contents' type="text" rows="5" v-model="contents" />
        </div>
        <button type="submit" class="btn">
          등록
        </button>
      </form>
      <p class="log">
        {{ logMsg }}
      </p>
    </div>
  </div>
</template>

<script>
import {createPost} from "@/api";

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMsg: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        })
        this.logMsg = 'Post success'
        console.log(response)
        await this.$router.push('/main')
      } catch (err) {
        this.logMsg = err.response.data.message
      }
    }
  }
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
