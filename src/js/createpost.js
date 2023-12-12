import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import { FETCH_UTIL } from "@/util/fetch-util";
// import { useCookies } from "vue3-cookies";
// import useFeedStore from "@/store/feed-store";

import storage from "@/js/fireBase.js";
export default {
  components: {
    NavBar,
  },
  setup() {
    // const { cookies } = useCookies();
    const selectedFile = ref(null);
    const caption = ref("");
    const imageUrl = ref("");
    // const useFeed = useFeedStore()

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
          imageUrl.value = url;
        }
      } catch (error) {
        console.error("Error during file upload:", error);
        // Handle error as needed
      }
    };

    const uploadPost = async (postDto) => {
      const url = `http://10.20.3.178:8081/post`;
      const payload = {
        value: postDto,
      };
      try {
        await FETCH_UTIL(
          url,
          payload,
          "POST",
          (jsonResponse) => {
            console.log(jsonResponse);
          },
          () => {
            console.error("Failed to post the user");
          }
        );
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };

    const handleUpload = async () => {
      await uploadImage(); // Wait for uploadImage to complete
      console.log("hffhfh" + imageUrl.value);

      const postDto = {
        userId: "0056b7c3-1387-4443-a2a7-5f0ff7ee07a3", // cookies.get('userId'),
        caption: caption.value,
        media: imageUrl.value,
        mediaType: "Image",
      };

      console.log(postDto.media);
      await uploadPost(postDto); // Wait for uploadPost to complete

      alert("Media uploaded");
    };

    return {
      handleFileChange,
      //   uploadImage,
      selectedFile,
      caption,
      handleUpload,
    };
  },
};
