<template>
  <div>
    <h1>Add new post</h1>

    <form @submit.prevent="addPost()">
      <input type="text" placeholder="Enter title post" name="title" v-model.trim="post.title">
      <textarea name="description" placeholder="Enter description post" v-model.trim="post.description"></textarea>
      <button type="submit">Send</button>
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
    async addPost() {
      if (this.post.title !== '' && this.post.description !== '') {
        const newPost = {
          title: this.post.title,
          description: this.post.description,
        }
        const response = await PostsService.addNewPost(newPost)
        this.$router.push({name: 'PostsPage'})
      }
    },
  },
}
</script>

<style scoped>

</style>
