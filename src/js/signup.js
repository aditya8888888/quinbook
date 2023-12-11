import { computed, defineComponent, ref } from "vue";
import { registerWithEmailAndPassword } from "@/firestore/firebase"
import {
    signInWithGoogle,
} from "@/firestore/firebase";
import { useRouter } from "vue-router";
import useUserStore from "@/store/user-store";

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



        const handleSignup = async() => {
            await registerWithEmailAndPassword(name.value, email.value, password.value)
            if (isLogedIn.value != '') { router.push('/homepage') }
        }

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