<template>
    <HeaderComponent></HeaderComponent>
    <FeedComponent />
</template>

<script>
import { defineComponent } from 'vue';
import HeaderComponent from './component/HeaderComponent.vue';
import FeedComponent from "./component/FeedComponent.vue";
export default defineComponent({
  components: {HeaderComponent, FeedComponent},
  setup() { 
    return {
      
    }
  }
})
</script>

<style scoped>
</style>
