import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostsPage from "../components/pages/PostsPage.vue";
import NewPostPage from "../components/pages/NewPostPage.vue";
import EditPostPage from "../components/pages/EditPostPage.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
