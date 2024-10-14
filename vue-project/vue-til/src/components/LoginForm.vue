<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input id="username" type="text" v-model="username"/>
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password"/>
    </div>
    <button v-bind:disabled="!isUsernameValid || !password" type="submit">로그인</button>
    <p> {{ logmsg }}</p>
  </form>
</template>

<script>
import { loginUser } from "@/api";
import { validateEmail } from "@/utils/validation";

export default {
  data() {
    return {
      username: '',
      password: '',
      logmsg: ''
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username)
    }
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        }
        const res = await loginUser(userData)
        this.logmsg = `${res.data.user.username} 님 환영합니다.`
        console.log(res.data.user.username)
      } catch (err) {
        console.log(err.response);
        this.logmsg = err.response.data
      } finally {
        this.initForm()
      }
    },
    initForm() {
      this.username = ''
      this.password = ''
    }
  }
};
</script>

<style scoped></style>
