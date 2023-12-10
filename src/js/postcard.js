import { ref } from "vue";

export default {
  component: {},
  setup() {
    const showComment = ref(false);
    const data = ref({});

    const openComments = async () => {
      showComment.value = !showComment.value;

      const d = await fetch(
        "http://10.20.3.178:8081/feed/get-feed-by-userid?userId=c98f178f-6910-4fbf-8243-bd9d22f9c900"
      );
      const parseRes = await d.json();
      data.value = { ...parseRes };
      console.log(data.value);
    };

    return {
      showComment,
      openComments,
      data,
    };
  },
};
