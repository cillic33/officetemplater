<template>
  <div>
    <h1>Update post</h1>

    <form @submit.prevent="updatePost">
      <input type="text" name="title" placeholder="Enter title" v-model.trim="post.title">
      <textarea name="description" placeholder="Enter description" v-model.trim="post.description"></textarea>
      <button type="submit">Update</button>
    </form>

    <router-link to="/posts">To posts page</router-link>
  </div>
</template>

<script>
import PostsService from "../../services/PostsService";

export default {
  data() {
    return {
      post: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    async getPost() {
      const response = await PostsService.getPost({id: this.$route.params.id})
      this.post.title = response.data.title;
      this.post.description = response.data.description;
    },
    async updatePost() {
      if (this.post.title !== '' && this.post.description !== '') {
        const response = await PostsService.updatePost({
          id: this.$route.params.id,
          title: this.post.title,
          description: this.post.description,
        })
        this.$router.push({name: 'PostsPage'})
      }
    },
  },
  mounted() {
    this.getPost()
  },
}
</script>

<style scoped>

</style>
