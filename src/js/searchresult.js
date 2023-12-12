import { computed, onBeforeMount, onMounted, ref } from "vue";
import NavBar from "../components/NavBar.vue";
import useSearchStore from "@/store/search-store";
import { FETCH_UTIL } from "@/util/fetch-util";

export default {
  components: {
    NavBar,
  },

  setup() {
    const useSearch = useSearchStore();
    const searchdata = computed(() => useSearch.searchResponse);
    console.log(searchdata);
    const getResults = async (searchText, userId) => {
      const url = `http://10.20.3.153:9000/quinbook/search?text=${searchText}&currentUserId=${userId}`;

      try {
        await FETCH_UTIL(
          url,
          {},
          "GET",
          (jsonResponse) => {
            useSearch.searchResponse = jsonResponse;
            console.log(jsonResponse);
          },
          () => {
            console.error("Failed to get like count");
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
      //   localStorage.setItem("text", "");
    };
    onBeforeMount(() => {
      const userId = "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3";
      const searchtext = localStorage.getItem("text");
      //   getFriendDetails(userId);
      getResults(searchtext, userId);
      //   window.location.reload();
      //   localStorage.setItem("text", "")
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
      console.log("I am entering");
      const userId = "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3";
      console.log(userId, requestedId);
      getAcceptRequests(userId, requestedId);
      //   window.location.reload();
    };

    const friendrequests = ref([]);
    const sendFriendRequests = async (personId) => {
      const userId = "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3";
      const url = `http://10.20.2.122:8080/user/send-request?userId=${userId}&requestedId=${personId}`;
      const d = {
        method: "PUT",
      };
      try {
        const response = await fetch(url, d);
        const jsonResponse = await response.json();
        friendrequests.value = jsonResponse;
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    // getFriendDetails(userId);

    return {
      searchdata,
      sendFriendRequests,
      acceptrequest,
      getAcceptRequests,
      friendacceptrequests,
    };
  },
};
