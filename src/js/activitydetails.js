import { ref, onBeforeMount } from "vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: { NavBar },
  setup() {
    const activity = ref([]);

    const getActivityDetails = async (userId) => {
      const url = `http://10.20.2.122:8080/activity/get-activity-by-id?userId=${userId}`;

      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();

        activity.value = jsonResponse;
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    onBeforeMount(() => {
      const userId = "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3";
      getActivityDetails(userId);
    });

    return {
      activity,
      getActivityDetails,
    };
  },
};
