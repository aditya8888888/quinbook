import { ref } from "firebase/storage"

export default defineComponent({
    setup() {

        const userEmail = ref('')
        const userName = ref('')
        const userBio = ref('')
        const userProfilePic = ref('')
        const userIdPrivate = ref('')
        const userAccountType = ref('');
  
        
        const handleUpload = () => { 

        }

        
        const addUser = async (userDto) => {
            
            const url = `http://10.20.3.178:8081/user/add-user`;

            const payload = {
                value: userDto,
            };

            try {
                await FETCH_UTIL(
                    url,
                    {},
                    "POST",
                    (response) => {
                        console.log("user profile added ", response);
                    },
                    () => {
                        console.error("Failded to add user profile");
                    }
                );
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        };
    }
})