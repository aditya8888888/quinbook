import NavBar from "@/components/NavBar.vue";
import { onBeforeMount, ref } from "vue";

export default {
  components: {
    NavBar,
  },
  setup() {
    const ads = ref([]);
    const getAds = async (userId) => {
      const url = `http://10.20.4.27:8082/ad/getAd?userId=${userId}`;
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        ads.value = jsonResponse;
        console.log(ads.value);
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    onBeforeMount(() => {
      const userId = "CbRifGKnhxXDOlMc0ReGlzENc2q1";
      getAds(userId);
      //   getFriendRequests(userId);
    });

    return {
      ads,
      getAds,
    };
  },
};
