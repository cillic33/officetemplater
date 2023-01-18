<template>
  <div>
    <h1>Posts</h1>

    <div v-if="posts.length">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="post.title">
            <td>{{ index + 1 }}</td>
            <td>{{ post._id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td>
              <router-link :to="{path: `/posts/${post._id}`}">Edit</router-link> |
              <button type="button" @click="deletePost(post._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      здесь пока пусто
    </div>

    <router-link to="/posts/new">Add new post</router-link>
  </div>
</template>

<script>
import PostsService from "../../services/PostsService";

export default {
  name: 'PostsPage',
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost(id) {
      const response = await PostsService.deletePost(id)
      this.getPosts()
    },
  },
  mounted() {
    this.getPosts()
  },
}
</script>

<style scope>
.table {
  border-collapse: collapse;
}
.table td {
  border: 1px solid #333;
  padding: 8px 12px;
}
</style>
