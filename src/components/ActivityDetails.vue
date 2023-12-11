<template>
  <NavBar />
  <center>
    <div class="activity-page">
      <h2>Activity Page</h2>
      <div v-if="userActivity.length === 0" class="no-activity">
        No activity yet.
      </div>
      <div v-else>
        <div
          v-for="(activity, index) in sortedActivity"
          :key="index"
          :class="['activity-card', activity.type]"
        >
          <strong>{{ activity.user.name }} &nbsp;</strong>
          <p>{{ getActivityText(activity) }}</p>
          <div class="timestamp">{{ formatTimestamp(activity.timestamp) }}</div>
        </div>
      </div>
    </div>
  </center>
</template>

<script src="../js/activitydetails"></script>

<style scoped>
.activity-page {
  padding: 20px;
}

.no-activity {
  margin-top: 20px;
  text-align: center;
}

.activity-card {
  max-width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
}
.activity-card:hover {
  background-color: #f0f0f0;
}

.activity-card.like {
  background-color: #1f2937;
  color: white;
}

.activity-card.comment {
  background-color: #f9f9f9;
}

.timestamp {
  font-size: 0.8em;
  color: #888;
  margin-left: auto;
}
</style>
