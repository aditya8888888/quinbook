<template>
    <HeaderComponent></HeaderComponent>
<<<<<<< HEAD
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
=======
    <FeedComponent />
</template>

<script>
import {  defineComponent, onBeforeUnmount, onMounted } from 'vue';
import HeaderComponent from './component/HeaderComponent.vue';
import useUtilStore from '@/store/util-store'

export default defineComponent({
  components: {HeaderComponent},
  setup() {
    const useUtil = useUtilStore()

    const updateWidth = () => {
      useUtil.domWidth = window.innerWidth
      console.log(useUtil.domWidth)
    }

    onMounted(() => {
      window.addEventListener('resize', updateWidth)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateWidth)
    })

>>>>>>> d23b79ba1b1095e22aee1c03d08039b5053e9150
    return {
    }
  }
})
</script>

<style >
:root {
    --primary-color: #2AAF66;
    --secondary-color: #FCF6F7;
}
</style>
