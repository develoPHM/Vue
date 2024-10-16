<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
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
import { loginUser } from "@/api";
import { validateEmail } from "@/utils/validation";
import { saveAuthToCookie, saveUserToCookie } from "@/utils/cookies";

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
        // 메인페이지로이동
        this.$store.commit('setToken', res.data.token )
        this.$store.commit('setUername', res.data.user.username)
        saveAuthToCookie(res.data.token)
        saveUserToCookie(res.data.user.username)
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