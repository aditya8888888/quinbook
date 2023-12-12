import { FETCH_UTIL } from "@/util/fetch-util";
import { useCookies } from "vue3-cookies";
// import userpostcard from "./userpostcard";
// import { defineComponent } from "vue"
import storage from "@/js/fireBase.js";
import { ref } from "vue";
import router from "@/router";

// import { reactive } from "vue";



export default {
    setup() {

        const selectedFile = ref(null);
        const userName = ref('')
        const userBio = ref('')
        const userProfilePic = ref('')
        const userIsPrivate = ref(false)
        const userAccountType = ref('')

        const { cookies } = useCookies()
        // const registerUser = () => {

        //     userData.value.userFriends = userData.value.userFriends.split(',').map(id => id.trim());
        //     userData.value.userRequest = userData.value.userRequest.split(',').map(item => {
        //         const [userId, status] = item.split(':').map(value => value.trim());
        //         return { userId, status };
        //     });

        //     console.log('User registration data:', userData.value);
        // };


        const handleFileChange = (event) => {
            console.log(event);
            const file = event.target.files[0];
            console.log(file);
            selectedFile.value = file;
        };


        const uploadImage = async () => {
            try {
                if (selectedFile.value) {
                    const storageRef = storage.StorageRef(
                        storage.storage,
                        selectedFile.value.name
                    );

                    // Upload the file
                    const snapshot = await storage.uploadBytes(
                        storageRef,
                        selectedFile.value
                    );
                    console.log("Uploaded a file", snapshot);

                    // Get the download URL
                    const url = await storage.getDownloadURL(
                        storage.StorageRef(storage.storage, selectedFile.value.name)
                    );
                    console.log(url);

                    // Update the imageUrl.value
                    userProfilePic.value = url;
                }
            } catch (error) {
                console.error("Error during file upload:", error);
                // Handle error as needed
            }
        };

        const uploadUser = async (userDto) => {
            const url = `http://10.20.2.122:8080/user/update-user`;
            const payload = {
                value: userDto,
            };
            try {
                await FETCH_UTIL(
                    url,
                    payload,
                    "PUT",
                    (jsonResponse) => {
                        console.log("User Add", jsonResponse);
                    },
                    () => {
                        console.error("Failed to add the user");
                    }
                );
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        };

        const updateUser = async () => {
            await uploadImage(); // Wait for uploadImage to complete
            console.log("hffhfh" + userProfilePic.value);

            const userDto = {
                userId: "1164f27d-c763-438c-adb0-8a6d8e733e3a",
                userEmail: cookies.get('userEmail'),
                userName: userName.value,
                userBio: userBio.value,
                userProfilePic: userProfilePic.value,
                userIsPrivate: userIsPrivate.value,
                userAccountType: userAccountType.value
            };

            await uploadUser(userDto); // Wait for uploadPost to complete

            alert("User Updated");
            router.push('/profilepage')
        };




        return {
            updateUser,
            userName,
            userBio,
            userIsPrivate,
            userAccountType,
            handleFileChange
        };
    },
};


// const userEmail = ref('')
// const userName = ref('')
// const userBio = ref('')
// const userProfilePic = ref('')
// const userIdPrivate = ref('')
// const userAccountType = ref('');


// const handleUpload = () => {

// }


// const addUser = async (userDto) => {

//     const url = `http://10.20.3.178:8081/user/add-user`;

//     const payload = {
//         value: userDto,
//     };

//     try {
//         await FETCH_UTIL(
//             url,
//             {},
//             "POST",
//             (response) => {
//                 console.log("user profile added ", response);
//             },
//             () => {
//                 console.error("Failded to add user profile");
//             }
//         );
//     } catch (error) {
//         console.error("Error during fetch:", error);
//     }
// };
//     }
// })