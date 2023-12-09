<template>
   
    <div class="post-page">
      <div class="user-info">
        <div class="profile-pic">
          <img :src="user.profilePic" alt="Profile Picture" />
        </div>
        <div class="user-details">
          <h2>{{ user.name }}</h2>
          <p>{{ formatDate(post.date) }}</p>
        </div>
      </div>
      <div class="post-content">
        <img v-if="post.image" :src="post.image" alt="Post Image" />
        <video v-if="post.video" controls>
          <source :src="post.video" type="video/mp4" />
         Post
        </video>
        <p>{{ post.text }}</p>
      </div>
      <div class="interaction-buttons">
        <button @click="toggleLike">
          <i :class="{ 'fas': liked, 'far': !liked } "></i>
          {{ likeCount }}
        </button>
        <button @click="toggleComment">
          <i class="fas fa-comment"></i>
          Comment
        </button>
      </div>
      <div v-if="showComments" class="comments-section">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <img :src="comment.user.profilePic" alt="Commenter Profile Picture" />
          <div class="comment-details">
            <h3>{{ comment.user.name }}</h3>
            <p>{{ comment.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  
  export default {
   
    setup() {
      const user = ref({
        profilePic: 'https://placekitten.com/50/50', // Replace with the actual URL for the profile picture
        name: 'John Doe'         // Replace with the actual user's name
      });
  
      const post = ref({
        date: '2023-12-09',       // Replace with the actual post date
        image: 'https://placekitten.com/500/300',      // Replace with the actual URL for the post image
        video: '',      // Replace with the actual URL for the post video
        text: 'This is an example post.'        // Replace with the actual post text
      });
  
      const liked = ref(false);
      const likeCount = ref(0);
      const showComments = ref(false);
      const comments = ref([]);
  
      const formatDate = (date) => {
        // Implement your date formatting logic here
        return date;
      };
  
      const toggleLike = () => {
        liked.value = !liked.value;
        likeCount.value += liked.value ? 1 : -1;
      };
  
      const toggleComment = () => {
        showComments.value = !showComments.value;
        if (showComments.value) {
          // Fetch comments from API
          // Example: axios.get(`/api/posts/${postId}/comments`).then(response => { comments.value = response.data; });
        }
      };
  
      return {
        user,
        post,
        liked,
        likeCount,
        showComments,
        comments,
        formatDate,
        toggleLike,
        toggleComment
      };
    }
  };
  </script>
  
  <style scoped>
  .post-page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .profile-pic {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .profile-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .user-details {
    flex-grow: 1;
  }
  
  .user-details h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }
  
  .user-details p {
    margin: 5px 0 0;
    color: #666;
  }
  
  .post-content img,
  .post-content video {
    width: 100%;
    max-width: 600px;
    margin-bottom: 10px;
  }
  
  .interaction-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  button {
    background-color: #3498db;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  button i {
    margin-right: 5px;
  }
  
  .comments-section {
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  
  .comment {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .comment img {
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .comment img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .comment-details h3 {
    margin: 0;
    font-size: 1rem;
    color: #333;
  }
  
  .comment-details p {
    margin: 5px 0 0;
    color: #666;
  }
  </style>
  