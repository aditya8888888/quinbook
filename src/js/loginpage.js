import { defineComponent, ref } from "vue";
import {
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "@/firestore/firebaselogin";

export default defineComponent({
    setup() {
        const email = ref("");
        const password = ref("");
    
        const handleLogin = async () => {
            console.log("i am in login ", email.value, password.value);
            await logInWithEmailAndPassword(email.value, password.value)
        };

        const handleLoginGoogle = async () => {
            await signInWithGoogle()
        };

        return {
            email,
            password,
            handleLogin,
            handleLoginGoogle
        };
    },
});
