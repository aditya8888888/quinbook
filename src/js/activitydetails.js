import { ref, computed } from "vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: { NavBar },
  setup() {
    const userActivity = ref([
      {
        type: "like",
        user: { name: "John", avatar: "https://via.placeholder.com/30" },
        timestamp: Date.now() - 60000,
      },
      {
        type: "comment",
        user: { name: "Alice", avatar: "https://via.placeholder.com/30" },
        comment: "Great post!",
        timestamp: Date.now() - 120000,
      },
    ]);

    const sortedActivity = computed(() => {
      return userActivity.value
        .slice()
        .sort((a, b) => b.timestamp - a.timestamp);
    });

    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    const getActivityText = (activity) => {
      return activity.type === "like"
        ? "liked your post."
        : `commented: "${activity.comment}"`;
    };

    return {
      userActivity,
      sortedActivity,
      formatTimestamp,
      getActivityText,
    };
  },
};
