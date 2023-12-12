import NavBar from "@/components/NavBar.vue";
import { onBeforeMount, ref } from "vue";

export default {
  components: {
    NavBar,
  },
  setup() {
    const friends = ref([]);
    const getFriendDetails = async (userId) => {
      const url = `http://10.20.2.122:8080/user/get-friend-details?userId=${userId}`;
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        friends.value = jsonResponse;
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    onBeforeMount(() => {
      const userId = "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3";
      getFriendDetails(userId);
      //   getFriendRequests(userId);
    });
    const friendrequests = ref([]);
    const getFriendRequests = async (userId) => {
      const url = `http://10.20.2.122:8080/user/get-friendReq-details?userId=${userId}`;
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        friendrequests.value = jsonResponse;
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    onBeforeMount(() => {
      const userId = "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3";
      //   getFriendDetails(userId);
      getFriendRequests(userId);
    });
    return {
      friends,
      friendrequests,
    };
  },
};
