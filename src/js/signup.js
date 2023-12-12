import {  defineComponent, ref } from "vue";
import { registerWithEmailAndPassword } from "@/firestore/firebaselogin"
import {
    signInWithGoogle,
} from "@/firestore/firebaselogin";

export default defineComponent({
    setup() {

        const email = ref('')
        const password = ref('')
        const name = ref('')

        const handleSignup = async () => {
            await registerWithEmailAndPassword(name.value, email.value, password.value)
        }

        const handleLoginGoogle = async () => {
            await signInWithGoogle()
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