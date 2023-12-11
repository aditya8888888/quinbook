import { ref } from "vue";

export default {
  component: {},
  setup() {
    const showComment = ref(false);
    const data = ref({});

    const openComments = async () => {
      showComment.value = !showComment.value;



      // const d = await fetch(
      //   "http://10.20.3.178:8081/feed/get-feed-by-userid?userId=c98f178f-6910-4fbf-8243-bd9d22f9c900"
      // );
      // const parseRes = await d.json();
      // data.value = { ...parseRes };
      // console.log(data.value);

      onBeforeMount(() => {
        const postId = '58b387d9-fca5-4bba-bc09-a754b8061fc6'
        getComments(postId)
      });


    };


    const getComments = async (postId) => {
      const url = `http://10.20.3.178:8081/comment/comment-by-post?postId=${postId}`;  // Replace with your actual API endpoint

      try {
        await FETCH_UTIL(url, {}, 'GET', (jsonResponse) => {
          feedStore.commentResponse = jsonResponse
          console.log(jsonResponse)
        }, () => {
          console.error('Failed to get like count');

        });
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    // onBeforeMount(() => {
    //   const userId = '3fce825f-60f1-45ea-8a31-4b69e0f36b0f';

    //   getLikeCountByPostId(userId);
    //   getCommentsByPostId(postId);
    // });



    const getFeed = async (userId) => {
      const url = `http://10.20.3.178:8081/feed/get-feed-by-userid?userId=${userId}`;  // Replace with your actual API endpoint

      try {
        await FETCH_UTIL(url, {}, 'GET', (jsonResponse) => {
          feedStore.feedResponse = jsonResponse
          console.log(jsonResponse)
        }, () => {
          console.error('Failed to get like count');

        });
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    onBeforeMount(() => {
      const userId = '3fce825f-60f1-45ea-8a31-4b69e0f36b0f';
      getFeed(userId);
    });

    return {
      showComment,
      openComments,
      data,
    };
  },
};
