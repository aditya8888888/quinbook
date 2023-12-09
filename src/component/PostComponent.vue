<template>
  <div class="main-div">
    <div class="left-div"></div>
    <div class="center-div">
      <div class="feed-header">
        <div class="media">
          <img src="../assets/logo.png" class="profile-image" />
        </div>
        <div class="name-date">
          <h3 class="profile-name">Vishal</h3>
          <p>355:737</p>
        </div>
      </div>
      <div class="image-captions">
        <p class="captions">the name is goyal</p>
      </div>
      <div class="image">
        <img src="../assets/logo.png" />
      </div>
      <div class="interaction">
        <button class="like-button" @click="likePost">Like {{ likeCounter }}</button>
        <button class="comment-button" @click="commentPost">Comment</button>

        <div v-if="showComments" class="comments-box">
          <input style="border: 2px solid red;" v-model="comment" class="comment-input">
          <button class="submit-comment" @click="addComment">Comment</button>
        </div>
      </div>
    </div>
    <div class="right-div"></div>
  </div> 


</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const likeCounter = ref(0);
    const showComments = ref(false);
    const comment=ref("");
    

    const likePost = () => {
      likeCounter.value = likeCounter.value + 1;
    };

    const commentPost = () => {
      showComments.value = !showComments.value;
    };
    
    const addComment = () => {
        
    }

    return {
      likeCounter,
      showComments,
      likePost,
      commentPost,
      comment,
      addComment
    };
  },
});
</script>

<style scoped>
.profile-image{
  border-radius: 50px;
    width: 50px;
    height: 50px;
}
.img{
  width: 25px;
  height: 25px;
  border-radius: 5px;
}
.main-div {
  display: flex;
}
.left-div {
  width: 20%;
  border: 2px solid red;
}
.center-div {
  width: 60%;
  border: 2px solid red;
  background-color: rgb(119, 120, 120);
}
.feed-header {
  display: flex;
  justify-content: flex-start;
  margin-top: 2%;
}
.media {
  width: 10%;
  height: 10%;
  border-radius: 50%;
}
.right-div {
  width: 20%;
  border: 2px solid red;
}
.feed-header {
  margin-left: 3%;
}
.profile-name {
  font-weight: bold;
}
.image-captions {
  margin-left: 5%;
  margin-top: 1.5%;
}
.like-button, .comment-button {
      background-color: #4267B2; /* Facebook blue color */
      color: #fff;
      border: none;
      padding: 8px 12px;
      margin-right: 10px;
      cursor: pointer;
      border-radius: 5px;
      margin-left: 5%;
    }

    /* Hover effect for buttons */
    .like-button:hover, .comment-button:hover {
      background-color: #365899; /* Darker shade on hover */
    }
</style>
