<template>
  <NavBar />
  <center style="padding-top: 8rem">
    <div
      class="mt-2 w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col items-center pb-10 justify-end px-4 pt-4">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          :src="userData.userProfilePic"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {{ userData.userName }}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{
          userData.userBio
        }}</span>
        <div class="flex mt-4 md:mt-6">
          <button
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 m-2"
            @click="handleEditProfile"          
            >
            Edit Profile
          </button>
          <router-link to="/createpost">
            <button
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 m-2"
            >
              Add Post
            </button>
          </router-link>
          <button
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 m-2"
          >
            Friends
          </button>
        </div>
      </div>
    </div>
    <h1
      class="mt-2 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl"
    >
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >Your Posts</span
      >
    </h1>

    <UserPostCard />
  </center>
</template>
<script src="../js/profilepage"></script>
<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.profile-image-container {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.profile-info {
  flex: 1;
}
.profile-name {
  margin: 0;
  font-size: 24px;
}
.profile-description {
  margin: 10px 0;
  font-size: 16px;
}
.profile-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.edit-profile {
  background-color: #1a73e8;
  color: white;
}
.add-post {
  background-color: #1a73e8;
  color: white;
}
.friends {
  background-color: #1a73e8;
  color: white;
}
.profile-posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}
.post-card {
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-color: black;
  /* transition: box-shadow 0.3s ease; */
}
/* .post-card:hover{
    transition: box-shadow 0.3s ease
} */
.post-user-image {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border-style: double;
}
.post-content {
  flex: 1;
}
.post-username {
  margin: 0;
  font-size: 18px;
}
.post-media {
  width: 80%;
  height: auto;
  margin: 10px 0;
  border-style: solid;
  border-color: black;
}
.post-caption {
  margin: 10px 0;
  font-size: 14px;
}
.post-interaction {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
