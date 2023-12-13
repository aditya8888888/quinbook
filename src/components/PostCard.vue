<template>
  <center>
    <!-- {{ data }} -->
    <div v-for="(post, index) in data" :key="index" style="padding-top: 8rem">
      <!-- {{ post }} -->
      <div v-if="post.mediaType === 'Video'">
        <div
          style="margin-top: 10px"
          class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="min-w-0 flex-row main-section">
              <img
                class="h-9 w-9 rounded-3xl m-2"
                :src="post.userProfilePic"
                alt=""
              />

              <div
                class="text-2xl font-bold leading-7 text-black-300 sm:truncate sm:text-sm sm:tracking-tight m-2"
              >
                {{ post.userName }}
                <span class="flex items-center text-xs text-gray-400">
                  {{ formatTimeAgo(post.createdDate) }}</span
                >
              </div>
            </div>
            <div class="mt-5 flex lg:ml-4 lg:mt-0"></div>
          </div>
          <div>
            <iframe
              width="420"
              height="315"
              :src="post.media"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div class="px-5 pb-5">
            <h5
              class="text-sm font-semibold tracking-tight text-black-200 dark:text-white"
            >
              {{ post.caption }}
            </h5>

            <div class="flex items-center mt-2.5 mb-5">
              <div
                class="flex items-center space-x-1 rtl:space-x-reverse"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <div
                style="display: flex; cursor: pointer"
                class="text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <div style="width: 20px; padding: 2px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
                <div @click="addLike(post.postId, post.userId)">
                  Like &nbsp;
                </div>
                {{ post.likeCount }}
              </div>
              <div
                style="display: flex; cursor: pointer"
                class="text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <div style="width: 20px; padding: 2px">
                  <svg
                    style="text-align: center"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </div>
                <div class="pl-2" @click="openComments">
                  Comments &nbsp; {{ post.commentCount }}
                </div>
              </div>
            </div>
            <form @submit.prevent class="pt-4">
              <div
                class="w-full mb-1 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              >
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea
                    id="comment"
                    rows="4"
                    class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                    v-model="commentDescription"
                  ></textarea>
                </div>
                <div
                  class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600"
                >
                  <button
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800"
                    @click="addComment(post.postId, post.userId)"
                  >
                    Post comment
                  </button>
                </div>
              </div>

              <div
                class="CommentSection"
                style="max-height: 12rem; overflow: auto"
                v-show="showComment"
              >
                <div v-for="comment in post.commentList" :key="comment">
                  <div class="flex items-start gap-2.5 pt-2">
                    <img
                      class="w-8 h-8 rounded-full"
                      :src="comment.userProfilePic"
                      alt="Jese image"
                    />
                    <div class="flex flex-col gap-1 w-full max-w-[320px]">
                      <div
                        class="flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <span
                          class="text-sm font-semibold text-gray-900 dark:text-white"
                          >{{ comment.userName }}</span
                        >
                      </div>
                      <div
                        class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
                      >
                        <p
                          class="text-sm font-normal text-gray-900 dark:text-white"
                        >
                          {{ comment.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          style="margin-top: 10px"
          class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="min-w-0 flex-row main-section">
              <img
                class="h-9 w-9 rounded-3xl m-2"
                :src="post.userProfilePic"
                alt=""
              />

              <div
                class="text-2xl font-bold leading-7 text-black-300 sm:truncate sm:text-sm sm:tracking-tight m-2"
              >
                {{ post.userName }}
                <span class="flex items-center text-xs text-gray-400">
                  {{ formatTimeAgo(post.createdDate) }}</span
                >
              </div>
            </div>
            <div class="mt-5 flex lg:ml-4 lg:mt-0"></div>
          </div>

          <img
            style="height: 25rem; width: 23rem"
            class="p-4 rounded-t-lg"
            :src="post.media"
            alt="product image"
          />

          <div class="px-5 pb-5">
            <h5
              class="text-sm font-semibold tracking-tight text-black-200 dark:text-white"
            >
              {{ post.caption }}
            </h5>

            <div class="flex items-center justify-between">
              <div
                style="display: flex; cursor: pointer"
                class="text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <div style="width: 20px; padding: 2px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </div>
                <div @click="addLike(post.postId, post.userId)">
                  Like &nbsp; {{ post.likeCount }}
                </div>
              </div>
              <div
                style="display: flex; cursor: pointer"
                class="text-white bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <div style="width: 20px; padding: 2px">
                  <svg
                    style="text-align: center"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </div>
                <div class="pl-2" @click="openComments">
                  Comments &nbsp; {{ post.commentCount }}
                </div>
              </div>
            </div>
            <form @submit.prevent class="pt-4">
              <div
                class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              >
                <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea
                    id="comment"
                    rows="4"
                    class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                    v-model="commentDescription"
                  ></textarea>
                </div>
                <div
                  class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600"
                >
                  <button
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800"
                    @click="addComment(post.postId, post.userId)"
                  >
                    Post comment
                  </button>
                </div>
              </div>
              <div
                class="CommentSection"
                style="max-height: 12rem; overflow: auto"
                v-show="showComment"
              >
                <div v-for="comment in post.commentList" :key="comment">
                  <div class="flex items-start gap-2.5 pt-2">
                    <img
                      class="w-8 h-8 rounded-full"
                      :src="comment.userProfilePic"
                      alt="Jese image"
                    />
                    <div class="flex flex-col gap-1 w-full max-w-[320px]">
                      <div
                        class="flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <span
                          class="text-sm font-semibold text-gray-900 dark:text-white"
                          >{{ comment.userName }}</span
                        >
                      </div>
                      <div
                        class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
                      >
                        <p
                          class="text-sm font-normal text-gray-900 dark:text-white"
                        >
                          {{ comment.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </center>
</template>

<script src="../js/postcard"></script>
<style scoped>
.main-section {
  display: flex;
}
</style>
