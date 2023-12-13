<!-- <template>
  <div class="home-page">
    <NavBar />
    <div class="cards-container">
      <div class="adcard1">
        <AdCard />
      </div>
      <div><PostCard /></div>
      <div class="adcard2">
        <AdCard />
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="home-page">
    <NavBar />
    <!-- <div class="cards-container"> -->
    <div class="adcard1">
      <AdCard />
    </div>
    <div><PostCard /></div>
    <div class="adcard2">
      <AdCard />
    </div>
    <!-- </div> -->
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
<style scoped>
/* .home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.home-page {
  display: flex;
}

.adcard1 {
  margin-top: 15rem;
  margin-right: 15rem;
}

.adcard2 {
  margin-top: 15rem;
  margin-left: 15rem;
}
@media screen and (max-width: 768px) {
  .home-page {
    display: flex;
    flex-direction: column;
  }
  .adcard1 {
    /* margin-top: 8rem; */
    margin-top: 8rem;
    margin-right: 0rem;
    display: flex;
    justify-content: center;
  }
  .adcard2 {
    margin: 0rem;
    display: flex;
    justify-content: center;
  }
}
</style>
