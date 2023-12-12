import { computed, defineComponent, ref } from "vue";
import { registerWithEmailAndPassword } from "@/firestore/firebaselogin"
import {
    signInWithGoogle,
} from "@/firestore/firebaselogin";
import { useRouter } from "vue-router";
import useUserStore from "@/store/user-store";
// import { useCookies } from "vue3-cookies";
// import { FETCH_UTIL } from "@/util/fetch-util";


export default defineComponent({
    setup() {

        const email = ref('')
        const password = ref('')
        const name = ref('')
        const router = useRouter()
        const userStore = useUserStore;
        const isLogedIn = computed(() => {
            return userStore.token
        })

        // const isNewUser = ref(false);
        // const { cookies } = useCookies();





        const handleSignup = async () => {
            await registerWithEmailAndPassword(name.value, email.value, password.value)
            if (isLogedIn.value != '') { router.push('/createprofile') }
            // if (isNewUser.value) { router.push('/homepage') }
            // await checkNewUser()
        }


        // const checkNewUser = async () => {
        //     const userId = cookies.get('userId')
        //     const url = `http://10.20.3.178:8081/get-user-by-id?userId=${userId}`;

        //     // const payload = {
        //     //     value: userId,
        //     // };

        //     try {
        //         await FETCH_UTIL(
        //             url,
        //             {},
        //             "GET",
        //             () => {
        //                 router.push('/homepage')
        //             },
        //             () => {
        //                 console.error("Failded to find profile");
        //                 router.push('/createprofile')

        //             }
        //         );
        //     } catch (error) {
        //         console.error("Error during fetch:", error);
        //     }
        // };


        const handleLoginGoogle = async () => {
            await signInWithGoogle();
            if (isLogedIn.value != '') { router.push('/homepage') }
        };

        return {
            email,
            password,
            name,
            handleSignup,
            handleLoginGoogle
        }
    }
})