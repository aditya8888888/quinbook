import { defineComponent, ref } from "vue";
import { registerWithEmailAndPassword } from "@/firestore/firebase"
import { useRouter } from "vue-router";
export default defineComponent({
    setup() {

        const email = ref('')
        const password = ref('')
        const name = ref('')

        const router = useRouter();

        const handleSignup = () => {
            console.log("i am in signup ", email.value, password.value, name.value);
            console.log(registerWithEmailAndPassword(name.value, email.value, password.value));
            router.push('/')
        }

        return {
            email,
            password,
            name,
            handleSignup

        }
    }
})