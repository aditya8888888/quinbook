// import router from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";
// import { ref, computed } from "vue";
// import { useCookies } from "vue3-cookies";

const useUtilStore = defineStore('util', () => {

    const getResponse = ref([])
    const domWidth = ref(window.innerHeight)

    const FETCH_UTIL = async (url, payload, method) => { 
        const options = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload.value),
        };
       
        getResponse.value = await fetch(url, options)  
            .then(response => response.json())
            .then(data => data)
        .catch(error => error)
    }

    return {
        FETCH_UTIL,
        getResponse,
        domWidth
    }
    
})
export default useUtilStore;