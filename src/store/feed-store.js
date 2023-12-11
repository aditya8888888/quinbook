import { defineStore } from "pinia";
import { ref } from "vue";


const useFeedStore = defineStore('feed', () => {

    const feedResponse = ref([])
    const totalLikeCount = ref(0)

    return {
        feedResponse,
        totalLikeCount
    }
    
})
export default useFeedStore;