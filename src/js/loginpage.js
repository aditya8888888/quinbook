import { defineComponent,ref} from "vue";
import {logInWithEmailAndPassword, signInWithGoogle} from "@/firestore/firebase"
import router from "@/router";
import useUserStore from "@/store/user-store";
export default defineComponent({
    setup() { 

        const email = ref('')
        const password = ref('')
        const userStore = useUserStore()
        
        const handleLogin = async() => {
            console.log("i am in login ", email.value, password.value);
            await logInWithEmailAndPassword(email.value, password.value);
            // console.log(userStore.userResponse)
            router.push('/')
        }

        const handleLoginGoogle = () => { 
            console.log(signInWithGoogle())
            console.log(userStore.userResponse)
            router.push('/')
        }

        return {
            email,
            password,
            handleLogin,
            handleLoginGoogle
        }
    }
})