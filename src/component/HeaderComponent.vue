<template>
  <div class="navbar">
    <div class="logo nav-icon">
      <span>QUINBOOK</span>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search" />
      <button @click="handleSearch">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="icons" v-if="!isMobile">
      <router-link to="/home" class="nav-icon"
        ><i class="fas fa-home"></i
      ></router-link>
      <router-link to="/profile" class="nav-icon"
        ><i class="fas fa-user"></i
      ></router-link>
      <router-link to="/friends" class="nav-icon"
        ><i class="fas fa-users"></i
      ></router-link>
      <router-link to="/notifications" class="nav-icon"
        ><i class="fas fa-bell"></i
      ></router-link>
      <router-link to="/create-post" class="nav-icon"
        ><i class="fas fa-edit"></i
      ></router-link>
      <button class="logout-button">Logout</button>
    </div>
    <div class="dropdown" v-else>
      <button class="dropbtn"><i class="fas fa-bars"></i></button>
      <div class="dropdown-content">
        <router-link to="/home" class="nav-icon"
          ><i class="fas fa-home"></i>
        </router-link>
        <router-link to="/profile" class="nav-icon"
          ><i class="fas fa-user"></i
        ></router-link>
        <router-link to="/friends" class="nav-icon"
          ><i class="fas fa-users"></i
        ></router-link>
        <router-link to="/notifications" class="nav-icon"
          ><i class="fas fa-bell"></i
        ></router-link>
        <router-link to="/create-post" class="nav-icon"
          ><i class="fas fa-edit"></i
        ></router-link>
        <div @click="logout" class="nav-icon">
          <i class="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import useUtilStore from "@/store/util-store";

export default defineComponent({
  setup() {
    const useUtil = useUtilStore();
    const isMobile = computed(() => {
      return useUtil.domWidth < 850 ? true : false;
    });

    const handleSearch = () => {
      alert("Searching...");
    };
    return {
      handleSearch,
      isMobile,
    };
  },
});
</script>

<style scoped>
:root {
  --primary-color: #2aaf66;
  --secondary-color: #fcf6f7;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: var(--primary-color);
  color: var(--primary-color);
}

.logo {
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.search-bar {
  padding: 0% 3%;
  display: flex;
  flex: 0.7;
  margin: 0 2%;
  border-radius: 10px;
  /* border: 2px solid #333; */
  background-color: var(--secondary-color);

  button {
    background-color: var(--secondary-color);
    color: black;
    padding: 0% 2%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}

.search-bar input {
  width: 100%;
  padding: 0.9%;
  /* background-color:; */
  color: black;
}

.icons {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14%;
  margin-right: 5%;
  /* margin-top: 0.8%; */
}

.nav-icon {
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 18px;
  position: relative;
  transition: transform 0.3s ease;
}

.nav-icon:hover {
  transform: scale(1.2);
}

.logout-button {
  background-color: var(--secondary-color);
  color: black;
  /* margin: 0%; */
  padding: 2% 3%;
  border-radius: 3px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.logout-button:hover {
  background-color: #016103;
  color: var(--secondary-color);
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.dropbtn {
  background-color: var(--primary-color);
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content {
  .nav-icon {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: var(--primary-color);
}
</style>
