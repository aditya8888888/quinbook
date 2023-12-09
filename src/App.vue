<template>
    <HeaderComponent></HeaderComponent>
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
