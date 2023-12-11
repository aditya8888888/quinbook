import { defineStore } from "pinia";
import { ref } from "vue";

const useFeedStore = defineStore("feed", () => {
  const feedUserProfileResponse = ref([]);
  const feedResponse = ref([]);
  const totalLikeCount = ref(0);
  const commentResponse = ref([]);
  const userProfileResponse = ref([]);

  return {
    feedResponse,
    totalLikeCount,
    commentResponse,
    userProfileResponse,
    feedUserProfileResponse,
  };
});
export default useFeedStore;
