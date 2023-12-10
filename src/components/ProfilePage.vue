<template>
  <div class="profile-page">
    <div class="profile-image-container">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMmM3MWU1NWQtMDc5ZC00YzgzLTljZGItOTVkMDJlNzkxY2MxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
        alt="Profile Image"
        class="profile-image"
      />
    </div>
    <div class="profile-info">
      <h2 class="profile-name">Rahul Gandhi</h2>
      <p class="profile-description">
        Pappu, member of Parliament, Son, COmedian.
      </p>
    </div>
    <div class="profile-actions">
      <button class="button edit-profile">Edit Profile</button>
      <button class="button add-post">Add Post</button>
      <button class="button friends">Friends</button>
    </div>
    <hr />
    <div class="profile-posts">
      <div class="post-card">
        <div class="post-user-image">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMmM3MWU1NWQtMDc5ZC00YzgzLTljZGItOTVkMDJlNzkxY2MxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
            alt="Profile Image"
            class="post-image"
          />
        </div>
        <div class="post-content">
          <div class="post-details">
            <h3 class="post-username">Rahul Gandhi</h3>
            <p class="post-caption">Modi hai to mumkin hai</p>
          </div>

          <img
            src="https://www.jansatta.com/wp-content/uploads/2023/11/Rahul-Gandhi-Rajasthan.jpg?w=768"
            alt="Post Media"
            class="post-media"
          />

          <div class="post-interaction">
            <button class="button like">Like</button>
            <button class="button comment">Comment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.profile-image-container {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.profile-info {
  flex: 1;
}
.profile-name {
  margin: 0;
  font-size: 24px;
}
.profile-description {
  margin: 10px 0;
  font-size: 16px;
}
.profile-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.edit-profile {
  background-color: #1a73e8;
  color: white;
}
.add-post {
  background-color: #1a73e8;
  color: white;
}
.friends {
  background-color: #1a73e8;
  color: white;
}
.profile-posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}
.post-card {
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-style: solid;
  border-color: black;
  /* transition: box-shadow 0.3s ease; */
}
/* .post-card:hover{
    transition: box-shadow 0.3s ease
} */
.post-user-image {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border-style: double;
}
.post-content {
  flex: 1;
}
.post-username {
  margin: 0;
  font-size: 18px;
}
.post-media {
  width: 80%;
  height: auto;
  margin: 10px 0;
  border-style: solid;
  border-color: black;
}
.post-caption {
  margin: 10px 0;
  font-size: 14px;
}
.post-interaction {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
