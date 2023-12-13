import useFeedStore from "@/store/feed-store";
import { FETCH_UTIL } from "@/util/fetch-util";
import { computed, onBeforeMount, ref } from "vue";
import { useCookies } from "vue3-cookies";

export default {
  component: {},
  setup() {
    const { cookies } = useCookies()
    const showComment = ref(false);
    const commentDescription = ref("");
    const useFeed = useFeedStore();
    const data = computed(() => useFeed.feedResponse);
    console.log(data);

    const openComments = async () => {
      showComment.value = !showComment.value;
    };

    const activity = async (ActivityDto) => {
      const url = "http://10.20.2.122:8080/activity/add-activity";
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
      // debugger;
      const url = "http://10.20.3.178:8081/like/toggle-like";
      const payload = {
        value: likeDto,
      };
      try {
        await FETCH_UTIL(url, payload, "PUT",
          (jsonResponse) => {
            console.log("Successfully added like:", jsonResponse);
            getLikeCountByPostId(likeDto.postId);
          },
          (error) => {
            console.error("Failed to add like", error);
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    // const getLikeCountByPostId = async (postId) => {
    //   const url = `http://localhost:8081/like/like-count-by-post?postId=${postId}`; // Replace with your actual API endpoint

    //   try {
    //     await FETCH_UTIL(
    //       url,
    //       {},
    //       "GET",
    //       (jsonResponse) => {
    //         useFeed.totalLikeCount = jsonResponse;
    //         console.log(jsonResponse);
    //       },
    //       () => {
    //         console.error("Failed to get like count");
    //       }
    //     );
    //   } catch (error) {
    //     console.error("Error during fetch:", error);
    //   }
    // };

    const getLikeCountByPostId = async (postId) => {
      const url = `http://10.20.3.178:8081/like/like-count-by-post?postId=${postId}`;
      try {
        await FETCH_UTIL(url, {}, "GET",
          (likeCount) => {
            const postIndex = data.value.findIndex((post) => post.postId === postId);
            if (postIndex !== -1) {
              console.log(postIndex, useFeed.feedResponse[postIndex])
              useFeed.feedResponse[postIndex].likeCount = likeCount;
            } else {
              console.error(`Post with postId ${postId} not found in data array`);
            }
          },
          (error) => {
            console.error("Error during fetch:", error);
          }
        );
      } catch (error) {
        console.error("Error outside of fetch:", error);
      }
    };

    const getCommentCountByPostId = async (postId) => {
      const url = `http://10.20.3.178:8081/comment/comment-count-by-post?postId=${postId}`;
      try {
        await FETCH_UTIL(url, {}, "GET",
          (commentCount) => {
            const postIndex = data.value.findIndex((post) => post.postId === postId);
            if (postIndex !== -1) {
              console.log(postIndex, useFeed.feedResponse[postIndex])
              useFeed.feedResponse[postIndex].commentCount = commentCount;
            } else {
              console.error(`Post with postId ${postId} not found in data array`);
            }
          },
          (error) => {
            console.error("Error during fetch:", error);
          }
        );
      } catch (error) {
        console.error("Error outside of fetch:", error);
      }
    };

    const getCommentByPost = async (postId) => {
      const url = `http://10.20.3.178:8081/comment/comment-by-post?postId=${postId}`;
      try {
        await FETCH_UTIL(url, {}, "GET",
          (commentList) => {
            const postIndex = data.value.findIndex((post) => post.postId === postId);
            if (postIndex !== -1) {
              // console.log(postIndex, useFeed.feedResponse[postIndex])
              // console.log(commentList, useFeed.feedResponse[postIndex])
              // useFeed.feedResponse[postIndex].commentList = commentList;
              const reversedCommentList = commentList.reverse();

              console.log(postIndex, useFeed.feedResponse[postIndex]);
              console.log(reversedCommentList, useFeed.feedResponse[postIndex]);
              useFeed.feedResponse[postIndex].commentList = reversedCommentList;
              
            } else {
              console.error(`Post with postId ${postId} not found in data array`);
            }
          },
          (error) => {
            console.error("Error during fetch:", error);
          }
        );
      } catch (error) {
        console.error("Error outside of fetch:", error);
      }
    };

    const addLike = async (postId, userId) => {
      const likeDto = {
        userId: cookies.get("userId"),
        // userId: "57a560f9-3233-43fe-bc5f-9dd881761451",
        postId: postId,
      };

      const activityDto = {
        userId: userId,
        friendUserId: cookies.get("userId"),
        // friendUserId: "57a560f9-3233-43fe-bc5f-9dd881761451",
        type: "like",
      };
      // handleLike(likeDto)
      // removeLikeById(likeDto)
      await activity(activityDto);
      await handleToggleLike(likeDto);

      // getLikeCountByPostId(likeDto)
    };

    const comment = async (commentDto) => {
      const url = "http://10.20.3.178:8081/comment";
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
            getCommentCountByPostId(commentDto.postId)
            getCommentByPost(commentDto.postId)
          },
          () => {
            console.error("Failed to add Comment");
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    const addComment = async (postId, userId) => {
      const commentDto = {
        userId: cookies.get("userId"),
        postId: postId,
        commentDescription: commentDescription.value,
      };

      const activityDto = {
        userId: userId,
        friendUserId: cookies.get("userId"),
        type: "comment",
      };

      await activity(activityDto);
      await comment(commentDto);
    };

    onBeforeMount(() => {
      const userId = cookies.get('userId');
      // const userId = "57a560f9-3233-43fe-bc5f-9dd881761451"
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
      addComment,
      commentDescription,
      formatTimeAgo,
    };
  },
};
