import { initializeApp } from "firebase/app";
import { useCookies } from "vue3-cookies";
import useUserStore from "@/store/user-store";
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
    collection,
    addDoc,
} from "firebase/firestore";
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {

    const userStore = useUserStore()
    try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res)
        const idToken = res._tokenResponse.idToken;
        const userId = res.user.uid
        console.log(userId)

        const { cookies } = useCookies();
        console.log("resgistration" + res)
        cookies.set("token", idToken);
        cookies.set("userId", userId)
        userStore.token = idToken;
        userStore.userId = userId

        // const url = 'http://10.20.3.164:9090/private/user-details';
        // const payload = {
        //     value: {},  // Adjust the payload if needed
        // };

        // await FETCH_UTIL(url, payload, 'GET', (response) => {

        //     console.log(response)
        //     const newToken = response.headers.get('Authorization');
        //     const { cookies } = useCookies();
        //     cookies.set('token', newToken);
        //     cookies.set('userid', response.uid);
        //     userStore.token = newToken;
        //     userStore.userId = response.uid;

        //     console.log('Token stored successfully.');
        // }, () => {
        //     console.error('Failed to update token');
        // }, idToken);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }

    // const { cookies } = useCookies();
    // console.log("resgistration" + res)
    // cookies.set("token", idToken);
    // userStore.token = idToken;
}


const logInWithEmailAndPassword = async (email, password) => {
    // const router = useRouter()
    const userStore = useUserStore()
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log("login reponse:", response)
        const idToken = response._tokenResponse.idToken;
        const userId = response.user.uid;
        const { cookies } = useCookies();
        cookies.set("token", idToken);
        cookies.set("userId", userId);
        userStore.token = idToken;
        userStore.userId = userId;


    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    // const router = useRouter()
    const userStore = useUserStore()
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
        const idToken = res._tokenResponse.idToken;
        const userId = res.user.uid;
        const { cookies } = useCookies();
        console.log("resgistration" + res)
        cookies.set("token", idToken);
        cookies.set("userId", userId);
        userStore.token = idToken;
        userStore.userId = userId;
        // router.push('/homepage');


    } catch (err) {
        console.error(err);
        alert(err.message);

    }
};

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

const logout = () => {
    const userStore = useUserStore()
    const { cookies } = useCookies();
    signOut(auth);
    cookies.remove("token")
    cookies.remove("userId")
    userStore.token = '';
    userStore.userId = '';


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



