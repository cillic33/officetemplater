import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "../components/pages/MainPage.vue";
import PostsPage from "../components/pages/PostsPage.vue";
import NewPostPage from "../components/pages/NewPostPage.vue";
import EditPostPage from "../components/pages/EditPostPage.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/posts',
      name: 'PostsPage',
      component: PostsPage,
    },
    {
      path: '/posts/new',
      name: 'NewPostPage',
      component: NewPostPage,
    },
    {
      path: '/posts/:id',
      name: 'EditPostPage',
      component: EditPostPage,
    },
  ]
})
