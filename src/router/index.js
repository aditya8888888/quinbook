import { createRouter, createWebHistory } from 'vue-router'
import PostPage from "@/page/postupload/PostPage.vue"

const routes = [
  {
    path: '/',
    name: 'post',
    component: PostPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
