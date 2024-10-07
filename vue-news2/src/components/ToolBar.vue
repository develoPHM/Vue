<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    |
    <router-link to="/asks">Ask</router-link>
    |
    <router-link to="/Jobs">Jobs</router-link>
    |
    <a href="https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md" target='_blank'>API-link</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}

.header .router-link-exact-active {
  color: #35495e
}

.header a{
  color: white;
}

</style>