import { defineStore } from "pinia";
import { ref } from "vue";

const useUserStore = defineStore('user', () => {

    const token = ref("")
    const userId = ref("")
    

    return {
        token,
        userId
    }

})
export default useUserStore;