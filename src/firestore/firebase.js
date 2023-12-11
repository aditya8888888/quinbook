import { initializeApp } from "firebase/app";
import { useCookies } from "vue3-cookies";
import useUserStore from "@/store/user-store";
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
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

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
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            const response = await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
            const idToken = response._tokenResponse.idToken;
            const userId = res.user.uid;


            const { cookies } = useCookies();
            cookies.set("token", idToken);
            cookies.set("userId", userId);
            userStore.token.value = idToken;
            userStore.userId.value = userId;
        }

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    const userStore = useUserStore()
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log("login reponse:", response)
        const idToken = response._tokenResponse.idToken;
        const userId = response.user.uid;


        const { cookies } = useCookies();
        cookies.set("token", idToken);
        cookies.set("userId", userId);
        userStore.token.value = idToken;
        userStore.userId.value = userId;

    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
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
        userStore.token.value = idToken;
        userStore.userId.value = userId;
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
    const { cookies } = useCookies();
    signOut(auth);
    cookies.remove("token")
    cookies.remove("userId")

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



