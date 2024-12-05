<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username"/>
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button
            :disabled="!isUsernameValid || !password"
            type="submit"
            class="btn"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logmsg }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from "@/utils/validation";

export default {
  data() {
    return {
      username: 'p@h.m',
      password: '1234',
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
        await this.$store.dispatch('LOGIN', userData)
        await this.$router.push('/main');
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
<style scoped>
.btn {
  color: white;
}
</style>