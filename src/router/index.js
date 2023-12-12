import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/LoginPage.vue";
import SignUp from "@/components/SignUp.vue";
import ProfilePage from "@/components/ProfilePage.vue";
import CreatePost from "@/components/CreatePost.vue";
import ActivityDetails from "@/components/ActivityDetails.vue";
import HomePage from "@/components/HomePage.vue";
import FriendsPage from "../components/FriendsPage.vue";
import CreateProfile from "../components/CreateProfile";
import SearchResult from "../components/SearchResult.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/profilepage",
    name: "profilepage",
    component: ProfilePage,
  },
  {
    path: "/createpost",
    name: "createpost",
    component: CreatePost,
  },
  {
    path: "/activity",
    name: "activitydetails",
    component: ActivityDetails,
  },
  {
    path: "/homepage",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/friendspage",
    name: "friendspage",
    component: FriendsPage,
  },
  {
    path: "/createprofile",
    name: "createprofile",
    component: CreateProfile,
  },
  {
    path: "/searchresult",
    name: "searchresult",
    component: SearchResult,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
