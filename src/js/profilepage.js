// import PostCard from "../components/PostCard.vue";
import { FETCH_UTIL } from "@/util/fetch-util";
import { computed, onBeforeMount } from "vue";
import NavBar from "@/components/NavBar.vue";
import UserPostCard from "../components/UserPostCard.vue";
import userProfileStore from "../store/user-store";
import { useRouter } from "vue-router";
import AdCard from "@/components/AdCard.vue";
import { useCookies } from "vue3-cookies";

export default {
  components: {
    // PostCard,
    NavBar,
    UserPostCard,
    AdCard,
  },
  setup() {
    const {cookies} = useCookies()
    const router = useRouter();
    const userStore = userProfileStore();
    const userData = computed(() => userStore.userResponse);
    console.log(userData);

    const getUserDetails = async (userId) => {
      const url = `http://10.20.2.122:8080/user/get-user-by-id?userId=${userId}`;
      // const url1 = "http://10.20.2.122/user/get-user-by-id?userId=${userId}";

      try {
        await FETCH_UTIL(
          url,
          {},
          "GET",
          (jsonResponse) => {
            userStore.userResponse = jsonResponse;
            console.log(jsonResponse);
          },
          () => {
            console.error("Failed to get like count");
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    const handleEditProfile = () => {
      router.push("/editprofile");
    };

    onBeforeMount(() => {
      const userId = cookies.get('userId');
      getUserDetails(userId);
    });

    return {
      userData,
      getUserDetails,
      handleEditProfile,
    };
  },
};
