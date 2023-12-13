import useFeedStore from "@/store/feed-store";
import { FETCH_UTIL } from "@/util/fetch-util";
import { computed, onBeforeMount, ref } from "vue";
import { useCookies } from "vue3-cookies";

export default {
  component: {},
  setup() {
    const showComment = ref(false);
    const {cookies} = useCookies()
    const useProfileFeed = useFeedStore();

    const profileData = computed(() => useProfileFeed.feedUserProfileResponse);
    console.log(profileData);

    const getUserProfileFeed = async (userId) => {
      const url = `http://10.20.3.178:8081/post/get-post-by-userid?userId=${userId}`;

      try {
        await FETCH_UTIL(
          url,
          {},
          "GET",
          (jsonResponse) => {
            useProfileFeed.feedUserProfileResponse = jsonResponse;
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

    onBeforeMount(() => {
      const userId = cookies.get('userId');
      getUserProfileFeed(userId);
    });

    const openComments = async () => {
      showComment.value = !showComment.value;
    };

    return {
      showComment,
      openComments,
      profileData,
    };
  },
};
