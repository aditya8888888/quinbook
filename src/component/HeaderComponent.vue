<template>
    <div class="navbar">
        <div class="logo">
            <span>QUINBOOK</span>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search">
            <button @click="handleSearch">
                <router-link to="/home" class="nav-icon"> <i class="fas fa-search"></i></router-link>
            </button>
        </div>
        <div class="icons">
            <router-link to="/home" class="nav-icon"><i class="fas fa-home"></i></router-link>
            <router-link to="/profile" class="nav-icon"><i class="fas fa-user"></i></router-link>
            <router-link to="/friends" class="nav-icon"><i class="fas fa-users"></i></router-link>
            <router-link to="/notifications" class="nav-icon"><i class="fas fa-bell"></i></router-link>
            <router-link to="/create-post" class="nav-icon"><i class="fas fa-edit"></i></router-link>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({

    setup() {

        const handleSearch = () => {
            alert("Searching...")
        }
        return {
            handleSearch
        }
    }
})
</script>

<style scoped>
:root {
    --primary-color: #2AAF66;
    --secondary-color: #FCF6F7;
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
}

.search-bar {
    padding: 0% 3%;
    display: flex;
    flex: 0.7;
    margin: 0 2%;
    border-radius: 10px;
    border: 2px solid #333;

   
}

.search-bar  button {
        background-color: white;
        color: black;
        padding: 0% 2%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

.search-bar input {
    width: 100%;
    padding: 0.9%;
    /* background-color:; */
    color: white;

}

.icons {
    display: flex;
    gap: 14%;
    margin-right: 5%;
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
</style>
