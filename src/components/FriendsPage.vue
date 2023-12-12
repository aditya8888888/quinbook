<template>
  <NavBar />
  <center style="padding-top: 8rem">
    <h2
      v-if="friendrequests.length !== 0"
      class="text-lg font-bold dark:text-white mt-2"
    >
      Friend Request
    </h2>
    <div style="max-height: 22rem; overflow: scroll"></div>
    <div v-for="(friendrequest, index) in friendrequests" :key="index">
      <a
        class="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3 p-1"
        style="max-width: 20rem"
      >
        <img
          class="h-8 w-8 rounded-2xl ml-3"
          :src="friendrequest.userProfilePic"
          alt=""
        />
        <div class="flex flex-col p-2 leading-normal">
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ friendrequest.userName }}
          </p>
          <div style="display: flex">
            <button
              type="button"
              class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              style="margin-right: 10px"
              @click="acceptrequest(friendrequest.userId)"
            >
              <svg
                class="w-[14px] h-[14px] text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                />
              </svg>
              &nbsp; Accept
            </button>
            <button
              type="button"
              class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                class="w-[14px] h-[14px] text-white-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                />
              </svg>
              &nbsp; Reject
            </button>
          </div>
        </div>
      </a>
    </div>
    <!-- </div> -->
    <h6 class="text-lg font-bold dark:text-white mt-2">Your Friends</h6>
    <div style="max-height: 22rem; overflow: scroll">
      <div v-for="(friend, index) in friends" :key="index">
        <a
          class="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-3 p-1"
          style="max-width: 20rem"
        >
          <img
            class="h-8 w-8 rounded-2xl ml-3"
            :src="friend.userProfilePic"
            alt=""
          />
          <div class="flex flex-col p-2 leading-normal">
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {{ friend.userName }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </center>
</template>

<script src="../js/friendspage"></script>
<style scoped></style>
