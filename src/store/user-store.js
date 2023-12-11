import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore("user", () => {
  // const token = ref('')
  // const userId = ref('')
  const userResponse = ref([]);

  return {
    userResponse,
  };
});
export default useUserStore;
