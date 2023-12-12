import { initializeApp } from "firebase/app";
import { useCookies } from "vue3-cookies";
import useUserStore from "@/store/user-store";

import router from "../router/index"
// import { useRouter } from "vue-router";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    // collection,
    // addDoc,
} from "firebase/firestore";
import useAuthStore from "@/store/auth-store";
import { useRouter } from "vue-router";
// import { FETCH_UTIL } from "@/util/fetch-util";

const firebaseConfig = {
    apiKey: "AIzaSyCGQ9vD8waHzZbUYRM7KzlNUnqWZ0tOcr0",
    authDomain: "social-auth-b2fd4.firebaseapp.com",
    projectId: "social-auth-b2fd4",
    storageBucket: "social-auth-b2fd4.appspot.com",
    messagingSenderId: "607920028862",
    appId: "1:607920028862:web:7b4d2b07c0c9bbe0f172ef",
    measurementId: "G-ZENJKFKZE3"
};

const app = initializeApp(firebaseConfig, "second");
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    const authStore = useAuthStore()
    await signInWithPopup(auth, googleProvider)
        .then((response) => {
            console.log("login with google response:", response)
            const idToken = response._tokenResponse.idToken;
            authStore.getCustomToken(idToken);
            router.push("/homepage")
        })
        .catch((error) => {
            console.error('Error during signin with google:', error)
            alert(error.message)
        })
}


const logInWithEmailAndPassword = async (email, password) => {
    const authStore = useAuthStore()
    await signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            console.log(response)
            const idToken = response._tokenResponse.idToken;
            authStore.getCustomToken(idToken);
            router.push('/homepage')
        })
        .catch((error) => {
            console.error('Error during signin:', error)
            alert(error.message)
        })
};

const registerWithEmailAndPassword = async (name, email, password) => {
    const authStore = useAuthStore()
    await createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            console.log(response)
            const idToken = response._tokenResponse.idToken;
            authStore.getCustomToken(idToken);
            router.push('/createprofile')
        })
        .catch((error) => {
            console.error('Error during signin:', error)
            alert(error.message)
        })
};

const logout = () => {
    const userStore = useUserStore()
    const { cookies } = useCookies();
    signOut(auth)
        .then(() => {
            cookies.remove("token")
            cookies.remove("userId")
            cookies.remove("userEmail")
            userStore.token = '';
            userStore.userId = '';
            router.push('/')
        })
        .catch((error) => {
            console.error('Error during signout:', error)
            alert(error.message)
        })
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    //   sendPasswordReset,
    logout,
};



