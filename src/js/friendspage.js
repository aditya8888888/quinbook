import NavBar from "@/components/NavBar.vue";
import { onBeforeMount, ref } from "vue";
import AdCard from "@/components/AdCard.vue";

export default {
  components: {
    NavBar,
    AdCard,
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

    const friendacceptrequests = ref([]);
    const getAcceptRequests = async (userId, requestedId) => {
      const url = `http://10.20.2.122:8080/user/accept-request?userId=${userId}&requestedId=${requestedId}`;
      const d = {
        method: "PUT",
      };
      try {
        const response = await fetch(url, d);
        const jsonResponse = await response.json();
        friendacceptrequests.value = jsonResponse;
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    const acceptrequest = (requestedId) => {
      const userId = "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3";
      console.log(userId, requestedId);
      getAcceptRequests(userId, requestedId);
      window.location.reload();
    };
    return {
      friends,
      friendrequests,
      friendacceptrequests,
      getAcceptRequests,
      acceptrequest,
    };
  },
};
