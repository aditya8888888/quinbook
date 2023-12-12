import { defineStore } from "pinia";
import { useCookies } from "vue3-cookies";
import { ref } from "vue";


const useAuthStore = defineStore("auth", () => {

    const { cookies } = useCookies()
    const userId = ref('')
    const userEmail = ref('')

    const getCustomToken = async (idToken) => {
        const GATEWAY_URL = "http://10.20.3.164:8765/user-details"
        const response = await fetch(GATEWAY_URL, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${idToken}`,
                "Content-Type": "application/json",
            },
        });
        console.log(response.headers.get('Authorization'))
        console.log(response)
        cookies.set("token", decodeURI(response.headers.get('Authorization')))
        console.log("Token", cookies.get('token'))
        await getUserDetails()
    }

    const getUserDetails = async () => {
        const GATEWAY_URL = "http://10.20.3.164:8765/getUser"
        const response = await fetch(GATEWAY_URL, {
            method: "GET",
            headers: {
                authorization: cookies.get('token'),
                "Content-Type": "application/json",
            },

        })
        const res = await response.json()
        console.log("User", res)
        cookies.set("userId", res.uid)
        cookies.set("userEmail", res.email)
        console.log(cookies.get('userId'))
        userId.value = cookies.get('userId')
        userEmail.value = cookies.get('userEmail')

    }
    // getCustomToken(idToken)

    return {
        getCustomToken
    };
});
export default useAuthStore;
