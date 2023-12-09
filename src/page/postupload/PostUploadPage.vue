<template>
    <div class="post-upload-container">
        <h3>Create Post</h3>
        <p></p>
      <div class="user-profile">
        <div class="profile-pic">
          <img :src="user.profilePic" alt="Profile Picture" />
        </div>
        <div class="user-info">
          <h2>{{ user.name }}</h2>
          <p>{{ user.profileType }}</p>
        </div>
      </div>
      <div class="post-input">
        <label for="file-upload" class="file-label">
          <i class="upload"></i> Choose a file
        </label>
        <input id="file-upload" type="file" @change="handleFileChange" accept="image/*, video/*" />
        <textarea v-model="postDescription" placeholder="Write a description..."></textarea>
        <button @click="uploadPost">Upload</button>
      </div>
    </div>
  </template>
  
  <script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const user = ref({
      profilePic: 'https://placekitten.com/50/50', 
      name: 'John Doe',      
      profileType: 'Public'   
    });

    const postDescription = ref('');

    const uploadPost = () => {
      
      console.log('Uploading post...');
    };

    return {
      user,
      postDescription,
      uploadPost
    };
  }

});
</script>

  
  <style scoped>
  .post-upload-container {
    max-width: 60%;
    max-height: 60%;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 80px;
  }
  
  .user-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .profile-pic {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
  }
  
  .profile-pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .user-info {
    text-align: right;
  }
  
  .user-info h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
  
  .user-info p {
    margin: 5px 0 0;
    color: #666;
  }
  
  .post-input {
    display: flex;
    flex-direction: column;
  }
  
  label.file-label {
    display: inline-block;
    background-color: #34c8db;
    color: rgb(0, 0, 0);
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  label.file-label i {
    margin-right: 5px;
  }
  
  input[type="file"] {
    display: none;
  }
  
  textarea {
    margin: 10px 0;
    padding: 10px;
    resize: vertical;
    min-height: 100px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    margin: auto;
    background-color: #34c8db;
    color: rgb(0, 0, 0);
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    max-width: 50%;
  }

  button:hover{
    color: #34c8db;
    background-color: rgb(0, 0, 0);
  }
  
  /* Responsive Styles */
  @media (max-width: 600px) {
    .user-profile {
      flex-direction: column;
      align-items: center;
    }
  
    .profile-pic {
      margin-bottom: 10px;
    }
  
    .user-info {
      text-align: center;
      margin-top: 10px;
    }
  }
  </style>
  