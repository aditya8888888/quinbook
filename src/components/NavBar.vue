<template>
  <Disclosure
    as="nav"
    class="bg-gray-800"
    v-slot="{ open }"
    style="position: fixed; width: 100%"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center" style="color: white">
            Quinbook
          </div>

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link to="/homepage">
                <div
                  class="flex flex-shrink-0 items-center"
                  style="color: white; cursor: pointer"
                >
                  Home
                </div>
              </router-link>
              <div
                class="flex flex-shrink-0 items-center"
                style="color: white; cursor: pointer"
                @click="openprofile"
              >
                Profile
              </div>
              <div
                class="flex flex-shrink-0 items-center"
                style="color: white; cursor: pointer"
                @click="openfriends"
              >
                Friends
              </div>
              <div
                class="flex flex-shrink-0 items-center"
                style="color: white; cursor: pointer"
                @click="opencreatepost"
              >
                Create Post
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <router-link to="/activity">
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5" />

              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </router-link>
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <router-link to="/profilepage">
                    <div
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                    >
                      Your Profile
                    </div>
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link to="/">
                    <div
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      @click="handleSignOut"
                    >
                      Sign out
                    </div>
                  </router-link>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <router-link to="/homepage">
          <div
            class="flex flex-shrink-0 items-center"
            style="color: white; cursor: pointer"
          >
            Home
          </div>
        </router-link>
        <div
          class="flex flex-shrink-0 items-center"
          style="color: white; cursor: pointer"
          @click="openprofile"
        >
          Profile
        </div>
        <div
          class="flex flex-shrink-0 items-center"
          style="color: white; cursor: pointer"
          @click="openfriends"
        >
          Friends
        </div>
        <div
          class="flex flex-shrink-0 items-center"
          style="color: white; cursor: pointer"
          @click="opencreatepost"
        >
          Create Post
        </div>
      </div>
    </DisclosurePanel>
    <center>
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            style="border-radius: 0"
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="Search your friend"
            required
            v-model="searchtext"
          />
          <router-link to="/searchresult">
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              @click="opensearchresult(searchtext)"
            >
              Search
            </button>
          </router-link>
        </div>
      </form>
    </center>
  </Disclosure>
</template>

<script setup>
import { useRouter } from "vue-router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { logout } from "@/firestore/firebaselogin";
import { ref } from "vue";

const searchtext = ref("");

const opensearchresult = (searchtext) => {
  localStorage.setItem("text", searchtext);
  // console.log(searchtext);
};

const router = useRouter();

const handleSignOut = () => {
  logout();
  // router.push("/");
};

const openprofile = () => {
  router.push("/profilepage");
};

const openfriends = () => {
  router.push("/friendspage");
};

const opencreatepost = () => {
  router.push("/createpost");
};
</script>
