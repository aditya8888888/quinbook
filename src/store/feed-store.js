import { defineStore } from "pinia";
import { ref } from "vue";

const useFeedStore = defineStore('feed', () => {

    const feedResponse = ref([])

    return {
        feedResponse
    }
    
})
export default useFeedStore;