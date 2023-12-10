import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue"
import SignUp from "@/components/SignUp.vue"

const routes = [
    {
        path:'/',
        name: 'home',
        component: LoginPage
    },
    {
        path:'/signup',
        name: 'signup',
        component: SignUp
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
