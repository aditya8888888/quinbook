<template>
  <div class="head">
    <h1 class="title">What's Up?</h1>
    <div class="create-post">
      <div class="avatar">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMmM3MWU1NWQtMDc5ZC00YzgzLTljZGItOTVkMDJlNzkxY2MxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
          alt="User Avatar"
        />
      </div>
      <div class="post-form">
        <textarea
          class="text-area"
          v-model="text"
          placeholder="What's on your mind, Rahul Gandhi?"
        ></textarea>
        <div class="media-input">
          <label for="media">Media:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            @change="handleFileChange"
          />
        </div>
        <button @click="uploadImage">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import storage from "@/js/fireBase.js";
export default {
  setup() {
    const selectedFile = ref(null);

    const handleFileChange = (event) => {
      console.log(event);
      const file = event.target.files[0];
      console.log(file);
      selectedFile.value = file;
    };
    const uploadImage = async () => {
      if (selectedFile.value) {
        const storageRef = await storage.StorageRef(
          storage.storage,
          selectedFile.value.name
        );
        await storage
          .uploadBytes(storageRef, selectedFile.value)
          .then((snapshot) => {
            console.log("Uploaded a file ", snapshot);
            storage
              .getDownloadURL(
                storage.StorageRef(storage.storage, selectedFile.value.name)
              )
              .then((url) => {
                console.log(url);
              })
              .catch(() => {});
          });
      }
    };
    return {
      handleFileChange,
      uploadImage,
      selectedFile,
    };
  },
};
</script>

<style scoped>
.head {
  background-color: #2d3748;
  color: white;
  padding: 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.create-post {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.post-form {
  flex: 1;
}

.text-area {
  width: 90%;
  height: 70px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  outline: none;
  margin-bottom: 10px;
}

.media-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 3.5rem;
}

.media-input label {
  margin-right: 10px;
}

button {
  background-color: #1f2937;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 20rem;
  margin-top: 20px;
}

button:hover {
  background-color: #2e3a52;
}
/* @media only screen and (max-width: 360px) {
  .create-post {
    flex-direction: column;
    align-items: center;
  }
 
  .post-form {
    width: 50%;
    
  }
} */

/* @media only screen and (max-width: 480px) {
  .create-post {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
 
  .post-form {
    width: 70%;
  }
  .media-input{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  button{
    margin-top: 30px;
  }
} */

@media only screen and (max-width: 768px) {
  .create-post {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
  .media-input {
    margin-left: 20px;
  }

  .post-form {
    width: 60%;
  }
  button {
    margin-top: 30px;
  }
}

@media only screen and (max-width: 1024px) {
  .create-post {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  .post-form {
    width: 50%;
  }
  button {
    margin-top: 30px;
  }
  .media-input {
    margin-left: 35px;
  }
}
</style>
