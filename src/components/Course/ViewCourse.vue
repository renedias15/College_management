<template>
  <div>
    <div class="card" >
    <div class="card-header">
    <h2>Course List</h2>
    </div>
      <div class="card-body">
    <div class="mb-3">
      <input type="text" class="form-control rounded-pill" placeholder="Search by name" v-model="searchText">
    </div>
    <div class="table-responsive">
    <table class="table table-striped table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>Sr.no</th>
          <th>Name</th>
          <th>Code</th>
          <th>Description</th>
          <th>Credits</th>
          <th>Pre-requisite</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course,index) in filteredcourses" :key="course[0]">
           <td>{{ index+1 }}</td>
          <td>{{ course[1] }}</td>
          <td>{{ course[2] }}</td>
          <td>{{ course[3] }}</td>
          <td>{{ course[4] }}</td>
          <td>{{ course[5] }}</td>
          <td>{{ course[6] }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  data() {
    return {
      courses: [],
      searchText: ''
    };
  },
  mounted() {
    this.fetchcourses();
  },
  computed: {
    filteredcourses() {
      // Filter the courses based on the search text
      return this.courses.filter(course => {
        const name = course[1].toLowerCase();
        const search = this.searchText.toLowerCase();
        return name.includes(search);
      });
    }
  },
  methods: {
    fetchcourses() {
      axios.get('https://hope1.onrender.com/getCourse')
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
        });
    }
  }
};
</script>
<style scoped>
.card {
  max-width: 100%;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}
</style>