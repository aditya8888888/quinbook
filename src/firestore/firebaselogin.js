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
import useAuthStore from "@/store/auth-store";
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

    // const userStore = useUserStore()
    const authStore = useAuthStore()
    try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res)
        const idToken = res._tokenResponse.idToken;
        authStore.getCustomToken(idToken);

        // const userId = res.user.uid
        // console.log(userId)

        // const { cookies } = useCookies();
        // console.log("resgistration" + res)
        // cookies.set("token", idToken);
        // cookies.set("userId", userId)
        // userStore.token = idToken;
        // userStore.userId = userId

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
    const authStore = useAuthStore()
    // const userStore = useUserStore()
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log("login reponse:", response)
        const idToken = response._tokenResponse.idToken;
        authStore.getCustomToken(idToken);
        // const userId = response.user.uid;
        // const { cookies } = useCookies();
        // cookies.set("token", idToken);
        // cookies.set("userId", userId);
        // userStore.token = idToken;
        // userStore.userId = userId;


    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    // const router = useRouter()
    // const userStore = useUserStore()

    const authStore = useAuthStore()
    // const { cookies } = useCookies();
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
        // const userId = res.user.uid;
        authStore.getCustomToken(idToken);

        // const getCustomToken = async (idToken) => {
        //     const GATEWAY_URL = "http://10.20.3.164:8765/user-details"
        //     const response = await fetch(GATEWAY_URL, {
        //         method: "GET",
        //         headers: {
        //             "authorization": `Bearer ${idToken}`,
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     getUserDetails()
        //     console.log(response.headers.get('Authorization'))
        //     console.log(response)
        //     cookies.set("token", decodeURI(response.headers.get('Authorization')))
        //     console.log("Token", cookies.get('token'))
        // }

        // const getUserDetails = async () => {
        //     const GATEWAY_URL = "http://10.20.3.164:8765/getUser"
        //     const response = await fetch(GATEWAY_URL, {
        //         method: "GET",
        //         headers: {
        //             authorization: cookies.get('token'),
        //             "Content-Type": "application/json",
        //         },

        //     })
        //     const res = await response.json()
        //     // console.log("User", res)
        //     cookies.set("userId", res.uid)
        //     cookies.set("userEmail", res.email)
        //     // console.log(cookies.get('userId'))

        // }
        // getCustomToken(idToken)

        // const { cookies } = useCookies();
        // console.log("resgistration" + res)
        // cookies.set("token", idToken);
        // cookies.set("userId", userId);
        // userStore.token = idToken;
        // userStore.userId = userId;
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
    cookies.remove("userEmail")
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



