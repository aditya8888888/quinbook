<template>
  <NavBar />
  <center style="padding-top: 8rem">
    <div class="head max-w-lg mt-3">
      <h1 class="title">Create Post</h1>
      <div class="create-post">
        <div class="post-form">
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
              >Describe your story!!</label
            >
            <input
              v-model="caption"
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <label
            class="block mb-2 text-sm font-medium text-white-900 dark:text-white"
            for="media"
            >Upload file</label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
            type="file"
            accept="image/*"
            name="image"
            id="file"
            @change="handleFileChange"
          />

          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            @click="handleUpload"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </center>
</template>

<script src="../js/createpost"></script>

<style scoped>
.head {
  background-color: #2d3748;
  color: white;
  padding: 10px;
}

.title {
  font-size: 1.5rem;
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
