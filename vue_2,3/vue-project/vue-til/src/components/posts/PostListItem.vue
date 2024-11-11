<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}&ensp;
<!--      <i class="icon ion-md-create"></i>-->
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from "@/api";

export default {
  props: {
    postItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    async deleteItem() {
      if (confirm("Are you sure you want to delete this post?")) {
        await deletePost(this.postItem._id);
        this.$emit('refresh')
      }
    }
  }
}
</script>

<style scoped>

</style>