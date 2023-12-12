<template>
  <div class="px-2 sm:px-6 lg:px-8 bg-gray-800">
    <div class="relative flex h-16 items-center justify-between">
      <div
        class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="flex flex-shrink-0 items-center" style="color: white">
          Quinbook
        </div>
      </div>
    </div>
  </div>

  <center>
    <div class="maindiv">
      <div class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            v-model="email"
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="password"
          />
        </div>
        <div>
          <button
            type="submit"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mb-4"
            @click="handleLogin"
          >
            Login
          </button>
        </div>
        <div>
          <button
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            @click="handleLoginGoogle"
          >
            Login with Google
          </button>
        </div>
        <div style="padding-top: 10px">
          Don't have an account ? &nbsp;
          <span
            ><router-link
              to="/signup"
              class="text-blue-500 underline hover:underline"
              >Register Now</router-link
            ></span
          >
        </div>
      </div>
    </div>
  </center>
<!-- 
  <div class="like-show">{{ likeCount }}</div>
  <button class="like-btn" @click="onLikeClick">Like Button</button> -->
</template>

<script src="@/js/loginpage.js"></script>

<style scoped>
.maindiv {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
