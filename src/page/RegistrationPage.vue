<template>
    <div class="registration-page">
      <form @submit.prevent="registerUser" class="registration-form">
        <h2>Create Your Account</h2>
        <div class="form-group">
          <label for="userId">User ID</label>
          <input v-model="userData.userId" type="text" id="userId" required />
        </div>
        <div class="form-group">
          <label for="userEmail">Email</label>
          <input v-model="userData.userEmail" type="email" id="userEmail" required />
        </div>
        <div class="form-group">
          <label for="userName">Username</label>
          <input v-model="userData.userName" type="text" id="userName" required />
        </div>
        <div class="form-group">
          <label for="userBio">Bio</label>
          <textarea v-model="userData.userBio" id="userBio"></textarea>
        </div>
        <div class="form-group">
          <label for="userProfilePic">Profile Picture (URL)</label>
          <input v-model="userData.userProfilePic" type="url" id="userProfilePic" required />
        </div>
        <div class="form-group">
          <label for="userAccountType">Account Type</label>
          <select v-model="userData.userAccountType" id="userAccountType" required>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const userData = ref({
        userId: '',
        userEmail: '',
        userName: '',
        userBio: '',
        userProfilePic: '',
        userIsPrivate: false,
        userAccountType: 'personal',
        userFriends: '', 
        userRequest: '', 
      });
  
      const registerUser = () => {
        
        userData.value.userFriends = userData.value.userFriends.split(',').map(id => id.trim());
        userData.value.userRequest = userData.value.userRequest.split(',').map(item => {
          const [userId, status] = item.split(':').map(value => value.trim());
          return { userId, status };
        });
  
               console.log('User registration data:', userData.value);
      };
  
      return {
        userData,
        registerUser,
      };
    },
  };
  </script>
  
  <style scoped>
.registration-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.registration-form {
  max-width: 400px;
  width: 90%; 
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

button {
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
}


@media only screen and (min-width: 600px) {
  .registration-form {
    width: 70%; 
  }
}

@media only screen and (min-width: 768px) {
  .registration-form {
    width: 50%; 
  }
}
</style>