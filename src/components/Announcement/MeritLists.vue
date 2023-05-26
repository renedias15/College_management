<template>
  <div class="container">
    <h1 class="text-center mt-5 mb-4">Merit Lists {{ currentYear }}</h1>
    <div class="card">
      <div class="card-body">
        <div v-if="meritLists.length === 0" class="no-announcements">
      No meritLists yet.
    </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="meritList in meritLists" :key="meritList[0]">
            <a :href="meritList[2]" target="_blank" class="card-link">{{ meritList[1] }} Merit List</a>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentYear: null,
      meritLists: []
    };
  },
  mounted() {
    this.getCurrentYear();
    this.fetchMeritLists();
  },
  methods: {
    getCurrentYear() {
      const date = new Date();
      this.currentYear = date.getFullYear();
    },
    fetchMeritLists() {
      axios.get('https://hope1.onrender.com/merit-lists') // Replace with your API endpoint for fetching merit lists
        .then(response => {
          this.meritLists = response.data;
        })
        .catch(error => {
          console.error('Error fetching merit lists:', error);
        });
    }
  }
};
</script>

<style>
.card {
  max-width: 400px;
  margin: 0 auto;
}
</style>







