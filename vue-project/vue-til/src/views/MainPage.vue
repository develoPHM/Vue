<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-else>
        <post-list-item
            v-for="postItem in postItems"
            :key="postItem._id"
            :postItem="postItem"></post-list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from "@/api";
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";

export default {
  data() {
    return {
      postItems: [],
      isLoading: false
    }
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const response = await fetchPosts();
      this.isLoading = false;
      this.postItems = response.data.posts
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped>

</style>