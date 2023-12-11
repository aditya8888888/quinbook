import { computed, defineComponent, ref } from "vue";
import {
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "@/firestore/firebase";

// import useUserStore from "@/store/user-store";
import useFeedStore from "@/store/feed-store";
import { FETCH_UTIL } from "@/util/fetch-util";
import { onBeforeMount } from "vue";
import useUserStore from "@/store/user-store";
import { useRouter } from "vue-router";



export default defineComponent({
    setup() {
        const email = ref("");
        const password = ref("");
        const userStore = useUserStore();
        const feedStore = useFeedStore();
        const router = useRouter();
        const isLogedIn = computed(() => {
            return userStore.token
        })

        const handleLogin = async () => {
            console.log("i am in login ", email.value, password.value);
            await logInWithEmailAndPassword(email.value, password.value);
            if (isLogedIn.value != '') { router.push('/homepage') }
            //check if the user login first time show create progile page
        };

        const handleLoginGoogle = async () => {
            await signInWithGoogle();
            if (isLogedIn.value != '') { router.push('/homepage') }
        };

        /**
         * Like and remove like
         */
        const likeCount = computed(() => {
            return feedStore.totalLikeCount;
        });

        // const handleLike = async (likeDto, token) => {
        //     const url = 'http://localhost:8081/like';
        //     const payload = {
        //         value: likeDto,
        //     };

        //     try {
        //         await FETCH_UTIL(url, payload, 'POST', (jsonResponse) => {
        //             console.log('Successfully added like:', jsonResponse);
        //         }, () => {
        //             console.error('Failed to add like');

        //         }, token);
        //     } catch (error) {
        //         console.error('Error during fetch:', error);

        //     }

        // };

        const handleToggleLike = async (likeDto) => {
            const url = "http://localhost:8081/like/toggle-like";
            const payload = {
                value: likeDto,
            };

            try {
                await FETCH_UTIL(
                    url,
                    payload,
                    "PUT",
                    (jsonResponse) => {
                        console.log("Successfully added like:", jsonResponse);
                        console.log(likeDto.postId);
                        getLikeCountByPostId(likeDto.postId);
                    },
                    () => {
                        console.error("Failed to add like");
                    }
                );
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        };

        const likeDto = {
            userId: "04b345af-2a94-439f-997e-94161ef6c36a",
            postId: "58b387d9-fca5-4bba-bc09-a754b8061fc6",
        };

        const onLikeClick = () => {
            // handleLike(likeDto)
            // removeLikeById(likeDto)
            handleToggleLike(likeDto);
            // getLikeCountByPostId(likeDto)
        };

        // const removeLikeById = async (likeDto) => {
        //     const url = 'http://localhost:8081/like';  // Replace with your actual API endpoint

        //     const payload = {
        //         value: likeDto,
        //     };

        //     try {
        //         await FETCH_UTIL(url, payload, 'DELETE', (jsonResponse) => {
        //             console.log('Successfully removed like:', jsonResponse);
        //         }, () => {
        //             console.error('Failed to remove like');

        //         });
        //     } catch (error) {
        //         console.error('Error during fetch:', error);

        //     }
        // };

        const getLikeCountByPostId = async (postId) => {
            const url = `http://localhost:8081/like/like-count-by-post?postId=${postId}`; // Replace with your actual API endpoint

            try {
                await FETCH_UTIL(
                    url,
                    {},
                    "GET",
                    (jsonResponse) => {
                        feedStore.totalLikeCount = jsonResponse;
                    },
                    () => {
                        console.error("Failed to get like count");
                    }
                );
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        };

        onBeforeMount(() => {
            const postIdToCheck = "58b387d9-fca5-4bba-bc09-a754b8061fc6";
            getLikeCountByPostId(postIdToCheck);
        });
        return {
            email,
            password,
            handleLogin,
            handleLoginGoogle,
            likeCount,
            onLikeClick,
            // removeLikeById,
            getLikeCountByPostId,
        };
    },
});
