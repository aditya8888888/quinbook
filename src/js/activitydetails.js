import { ref, onBeforeMount } from "vue";
import NavBar from "../components/NavBar.vue";
import { useCookies } from "vue3-cookies";

export default {
  components: { NavBar },
  setup() {
    const activity = ref([]);
    const { cookies } = useCookies();

    const getActivityDetails = async (userId) => {
      const url = `http://10.20.2.122:8080/activity/get-activity-by-id?userId=${userId}`;

      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();

        activity.value = jsonResponse;
      } catch (error) {
        console.error("Error during fetch:", error);
      }
      activity.value.reverse();
    };

    onBeforeMount(() => {
      const userId = cookies.get("userId");
      getActivityDetails(userId);
    });

    return {
      activity,
      getActivityDetails,
    };
  },
};
