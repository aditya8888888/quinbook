import { ref } from "vue";
// import storage from "@/js/fireBase.js";
export default {
  setup() {
    const selectedFile = ref(null);

    const handleFileChange = (event) => {
      console.log(event);
      const file = event.target.files[0];
      console.log(file);
      selectedFile.value = file;
    };
    // const uploadImage = async () => {
    //   if (selectedFile.value) {
    //     const storageRef = await storage.StorageRef(
    //       storage.storage,
    //       selectedFile.value.name
    //     );
    //     await storage
    //       .uploadBytes(storageRef, selectedFile.value)
    //       .then((snapshot) => {
    //         console.log("Uploaded a file ", snapshot);
    //         storage
    //           .getDownloadURL(
    //             storage.StorageRef(storage.storage, selectedFile.value.name)
    //           )
    //           .then((url) => {
    //             console.log(url);
    //           })
    //           .catch(() => {});
    //       });
    //   }
    // };
    return {
      handleFileChange,
      //   uploadImage,
      selectedFile,
    };
  },
};
