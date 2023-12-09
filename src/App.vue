<template>
    <HeaderComponent></HeaderComponent>
    <FriendsPage/>
    <!-- <PostPage /> -->
    <RegistrationPage />
   
   

</template>

<script>
import { defineComponent } from 'vue';
import HeaderComponent from '../src/component/HeaderComponent.vue';
//import RegistrationPageVue from './page/RegistrationPage.vue';
// import PostPage from "../src/page/PostPage.vue"
// import FriendsPage from './page/FriendsPage.vue' 
import RegistrationPage from "../src/page/RegistrationPage.vue"
export default defineComponent({
  components: {HeaderComponent,RegistrationPage},
  setup() { 
    return {
      
    }
  }
})
</script>

<style scoped>
</style>
