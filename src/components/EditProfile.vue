<template>
  <div class="registration-page">
    <div class="registration-form">
      <h2>Edit Your Profile</h2>
      <div class="form-group">
        <label for="userName">Username</label>
        <input v-model="userName" type="text" id="userName" required />
      </div>
      <div class="form-group">
        <label for="userBio">Bio</label>
        <textarea v-model="userBio" id="userBio"></textarea>
      </div>
      <div class="form-group">
        <label for="userProfilePic">Upload Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          name="userProfilePic"
          required
          @change="handleFileChange"
        />
        <img
          v-if="profilePreview"
          :src="profilePreview"
          alt="Profile Preview"
          style="max-width: 200px; max-height: 200px"
        />
      </div>
      <div class="form-group2">
        <label>Profile Visibility</label>
        <label for="privateToggle">
          <input type="checkbox" id="privateToggle" v-model="userIsPrivate" />
          Private
        </label>
      </div>
      <div class="form-group">
        <label for="userAccountType">Account Type</label>
        <select v-model="userAccountType" id="userAccountType" required>
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </select>
      </div>
      <button @click="updateUser">Create Account</button>
    </div>
  </div>
</template>
<script src="../js/editprofile"></script>
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
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  animation: fadeInUp 0.5s ease forwards;
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}
.form-group2 {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea,
select {
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

button {
  background-color: #1f2937;

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

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
