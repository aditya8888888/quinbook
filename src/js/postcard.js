import useFeedStore from "@/store/feed-store";
import { FETCH_UTIL } from "@/util/fetch-util";
import { computed, onBeforeMount, ref } from "vue";

export default {
  component: {},
  setup() {
    const showComment = ref(false);

    const commentDescription = ref("");
    const useFeed = useFeedStore();
    const data = computed(() => useFeed.feedResponse);
    console.log(data);

    const openComments = async () => {
      showComment.value = !showComment.value;
    };

    const likeCount = ref(0);

    const activity = async (ActivityDto) => {
      const url = "http://localhost:8080/activity/add-activity";
      const payload = {
        value: ActivityDto,
      };

      try {
        await FETCH_UTIL(
          url,
          payload,
          "POST",
          (jsonResponse) => {
            console.log("Successfully Activity", jsonResponse);
          },
          () => {
            console.error("Failed to add Activity");
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
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

    const handleToggleLike = async (likeDto) => {
      debugger;
      const url = "http://localhost:8081/like/toggle-like";

      const payload = {
        value: likeDto,
      };

      try {
        await FETCH_UTIL(
          url,
          payload,
          "PUT",
          (jsonResponse) => {
            console.log("Successfully added like:", jsonResponse);
            // console.log(likeDto.postId);
            getLikeCountByPostId(likeDto.postId);
            // setActivity({
            //   userId: userId,
            //   friendUserId: "57a560f9-3233-43fe-bc5f-9dd881761451",
            //   type: "like"
            // })
          },
          () => {
            console.error("Failed to add like");
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    const getLikeCountByPostId = async (postId) => {
      const url = `http://localhost:8081/like/like-count-by-post?postId=${postId}`; // Replace with your actual API endpoint

      try {
        await FETCH_UTIL(
          url,
          {},
          "GET",
          (jsonResponse) => {
            useFeed.totalLikeCount = jsonResponse;
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

    const addLike = (postId, userId) => {
      const likeDto = {
        userId: "57a560f9-3233-43fe-bc5f-9dd881761451", //cookies.get("userId"),
        postId: postId,
      };

      const activityDto = {
        userId: userId,
        friendUserId: "57a560f9-3233-43fe-bc5f-9dd881761451",
        type: "like",
      };
      // handleLike(likeDto)
      // removeLikeById(likeDto)
      activity(activityDto);
      handleToggleLike(likeDto);

      // getLikeCountByPostId(likeDto)
    };

    const comment = async (commentDto) => {
      const url = "http://localhost:8081/comment";
      const payload = {
        value: commentDto,
      };

      try {
        await FETCH_UTIL(
          url,
          payload,
          "POST",
          (jsonResponse) => {
            console.log("Successfully commented", jsonResponse);
          },
          () => {
            console.error("Failed to add Comment");
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    const addComment = (postId, userId) => {
      const commentDto = {
        userId: "57a560f9-3233-43fe-bc5f-9dd881761451",
        postId: postId,
        commentDescription: commentDescription.value,
      };

      const activityDto = {
        userId: userId,
        friendUserId: "57a560f9-3233-43fe-bc5f-9dd881761451", //cookies.get("userId"),
        type: "comment",
      };

      activity(activityDto);
      comment(commentDto);
    };

    onBeforeMount(() => {
      const userId = "57a560f9-3233-43fe-bc5f-9dd881761451";
      getFeed(userId);
    });
    const formatTimeAgo = (timestamp) => {
      const now = new Date();
      const postTime = new Date(timestamp);
      const timeDifference = now - postTime;
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      if (hours > 0) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
      } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
      } else {
        return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
      }
    };

    return {
      showComment,
      openComments,
      data,
      useFeed,
      addLike,
      likeCount,
      addComment,
      commentDescription,
      formatTimeAgo,
    };
  },
};
