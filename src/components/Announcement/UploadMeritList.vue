<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1>Form</h1>
      </div>
      <div class="card-body">
        <form @submit="submitForm" enctype="multipart/form-data">
          <div class="form-group">
            <label for="course">Course:</label>
            <select class="form-control" id="course" v-model="selectedCourse" required>
              <option value="" disabled>Select a course</option>
              <option v-for="course in courses" :value="course" :key="course">{{ course }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="file">File:</label>
            <input type="file" class="form-control-file" id="file" @change="handleFileUpload" required>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
        <b-toast v-model="showToast" :title="toastTitle" :auto-hide-delay="3000" variant="success"></b-toast>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      courses: [],
      selectedCourse: '',
      file: null,
      showToast: false,
      toastTitle: '',
    };
  },
    mounted() {
    this.fetchCourses();
  },
  methods: {
    submitForm() {
       const formData = new FormData();
        formData.append('course', this.selectedCourse);
        formData.append('file', this.file);
        console.log([...formData.entries()]);
            this.axios.post('http://localhost:5000/uploadMeritList',formData)
      .then((res)=>{
        this.showToast = true;
        this.toastTitle = 'Successfully uploaded';

        console.warn(res);
      })
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    fetchCourses() {
      axios.get('https://hope1.onrender.com/EntranceForm_courses')
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
  max-width: 500px;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.card-header {
  background-color: #f8f9fa;
  text-align: center !important;
  padding: 10px;
}

.card-body {
  padding: 20px;
}
</style>