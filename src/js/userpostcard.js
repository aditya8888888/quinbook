import useFeedStore from "@/store/feed-store";
import { FETCH_UTIL } from "@/util/fetch-util";
import { computed, onBeforeMount, ref } from "vue";

export default {
  component: {},
  setup() {
    const showComment = ref(false);

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
      const userId = "6f83ed2e-370b-4f7a-9a51-1a76ad6a9566";
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
