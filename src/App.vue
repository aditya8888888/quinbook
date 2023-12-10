<template>
  <NavBar />
  <PostCard />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import PostCard from "./components/PostCard.vue";
export default {
  name: "App",
  components: {
    NavBar,
    PostCard,
  },
};
</script>

<style scoped></style>
