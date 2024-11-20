<template>
  <div>
    <list-item :items="newsItems"></list-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListItem from '../components/ListItem.vue';
import { fetchNews, NewsItem } from '@/api';

export default Vue.extend({
  components: {
    ListItem,
  },

  data() {
    return {
      newsItems: [] as NewsItem[],
    };
  },

  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      console.log(response.data);
      this.newsItems = response.data;
    },
  },
  created() {
    this.fetchNewsItems();
  },
});
</script>

<style></style>
