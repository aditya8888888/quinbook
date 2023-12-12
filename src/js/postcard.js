import useFeedStore from "@/store/feed-store";
import { FETCH_UTIL } from "@/util/fetch-util";
import { computed, onBeforeMount, ref } from "vue";

export default {
  component: {},
  setup() {
    const showComment = ref(false);

    const useFeed = useFeedStore();
    const data = computed(() => useFeed.feedResponse);
    console.log(data);

    const openComments = async () => {
      showComment.value = !showComment.value;
    };

    const getFeed = async (userId) => {
      const url = `http://10.20.3.178:8081/feed/get-feed-by-userid?userId=${userId}`;

      try {
        await FETCH_UTIL(
          url,
          {},
          "GET",
          (jsonResponse) => {
            useFeed.feedResponse = jsonResponse;
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
      const userId = "57a560f9-3233-43fe-bc5f-9dd881761451";
      getFeed(userId);
    });

    return {
      showComment,
      openComments,
      data,
      useFeed,
    };
  },
};
