import { defineStore } from "pinia";
import { ref } from "vue";

const useSearchStore = defineStore("search", () => {
  const searchResponse = ref([]);

  return {
    searchResponse,
  };
});
export default useSearchStore;
