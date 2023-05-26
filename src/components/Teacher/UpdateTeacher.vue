<template>
  <div >
    <div class="card" >
    <div class="card-header">
    <h2>Teacher List</h2>
    </div>
      <div class="card-body">
    <div class="mb-3">
      <input type="text" class="form-control rounded-pill" placeholder="Search by name" v-model="searchText">
    </div>
    <div class="table-responsive">
    <table class="table table-striped table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Course</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="teacher in filteredteachers" :key="teacher[0]">
           <td>{{ teacher[0] }}</td>
          <td>{{ teacher[1] }}</td>
          <td>{{ teacher[2] }}</td>
          <td>{{ teacher[3] }}</td>
          <td>{{ teacher[4] }}</td>
          <td>{{ teacher[5] }}</td>
          <td>
            <router-link :to="{ name: 'EditTeacher', params: { id: teacher[0] } }" class="btn btn-primary">Edit</router-link>
          </td>
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
Vue.use(VueAxios,axios)

export default {
  data() {
    return {
      teachers: [],
       searchText: ''
    };
  },
  mounted() {
    this.fetchteachers();
  },
  computed: {
    filteredteachers() {
      // Filter the teachers based on the search text
      return this.teachers.filter(teacher => {
        const name = teacher[1].toLowerCase();
        const search = this.searchText.toLowerCase();
        return name.includes(search);
      });
    }
  },
  methods: {
    fetchteachers() {
      axios.get('https://hope1.onrender.com/getTeachers')
        .then(response => {
          this.teachers = response.data;
        })
        .catch(error => {
          console.error('Error fetching teachers:', error);
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