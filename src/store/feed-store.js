import { FETCH_UTIL } from "@/util/fetch-util";
import { defineStore } from "pinia";
import { ref } from "vue";

const useFeedStore = defineStore("feed", () => {
  const feedUserProfileResponse = ref([]);
  const feedResponse = ref([]);
  const totalLikeCount = ref(0);
  const commentResponse = ref([]);
  const userProfileResponse = ref([]);
  const profilePicUrl = ref("");

  const postData = async (postDto) => {
    const url = "http://10.20.3.164:8765/analytics";
    const payload = {
      value: postDto,
    };

    try {
      await FETCH_UTIL(
        url,
        payload,
        "POST",
        (jsonResponse) => {
          console.log("Analytics data send", jsonResponse);
        },
        () => {
          console.error("Failed to send data");
        }
      );
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return {
    feedResponse,
    totalLikeCount,
    commentResponse,
    userProfileResponse,
    feedUserProfileResponse,
    profilePicUrl,
    postData,
  };
});
export default useFeedStore;
