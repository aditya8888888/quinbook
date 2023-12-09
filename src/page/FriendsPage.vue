<template>
    <div class="friends-page">
      <div v-for="friend in friends" :key="friend.id" class="friend-item">
        <div class="friend-details">
          <div class="profile-pic">
            <img :src="friend.profilePic" alt="Profile Picture" />
          </div>
          <div class="friend-info">
            <h2>{{ friend.name }}</h2>
            <p>{{ friend.pending ? 'Unfriend' : 'friend' }}</p>
          </div>
        </div>
        <div class="friend-action">
          <button @click="handleAction(friend.id)">
            {{ friend.pending ? 'Add Friend' : 'Unfriend' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const friends = ref([]);
  
      const fetchFriends = async () => {
        
        friends.value = [
          { id: 1, profilePic: 'https://placekitten.com/50/50', name: 'Friend 1', pending: false },
          { id: 2, profilePic: 'https://placekitten.com/50/50', name: 'Friend 2', pending: false },
          { id: 3, profilePic: 'https://placekitten.com/50/50', name: 'Friend 3', pending: false }
         
        ];
      };
  
      const handleAction = (friendId) => {
        const friend = friends.value.find(f => f.id === friendId);
        friend.pending = !friend.pending;
        
      };
  
      onMounted(() => {
        fetchFriends();
      });
  
      return {
        friends,
        handleAction
      };
    }
  };
  </script>
  
  <style scoped>
  .friends-page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
  }
  
  .friend-item {
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .friend-details {
    display: flex;
    align-items: center;
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
  
  .friend-info {
    flex-grow: 1;
  }
  
  .friend-info h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
  
  .friend-info p {
    margin: 5px 0 0;
    color: #666;
  }
  
  .friend-action button {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  