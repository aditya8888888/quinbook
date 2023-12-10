import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore('user', () => {

    const userResponse = ref([])

    return {
        userResponse
    }
    
})
export default useUserStore;