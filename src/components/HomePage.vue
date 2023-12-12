<template>
  <div class="home-page">
    <NavBar />
    <div class="cards-container">
      <div style="margin-top: 15rem; margin-right: 15rem"><AdCard /></div>
      <div><PostCard /></div>
      <div style="margin-top: 15rem; margin-left: 15rem"><AdCard /></div>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import PostCard from "./PostCard.vue";
import AdCard from "./AdCard.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
    PostCard,
    AdCard,
  },
};
</script>
<style>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards-container {
  display: flex;
}
</style>
