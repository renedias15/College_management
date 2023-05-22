<template>
  <div class="card">
    <div class="card-header">
      <h1>Student Information Form</h1>
    </div>
    <div class="card-body">
      <form @submit="postData" method="post">
        <span >PERSONAL DETAILS</span>
        <div class="row mt-3">
          <div class="form-group col-md-4">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="Enter your first name"
              v-model="posts.firstName"
              required
            />
          </div>

          <div class="form-group col-md-4">
            <label for="surname">Surname</label>
            <input
              type="text"
              class="form-control"
              id="surname"
              placeholder="Enter your surname"
              v-model="posts.surname"
              required
            />
          </div>
        
        
        <div class="form-group col-md-4">
          <label for="age">Date of Birth</label>
          <input
            type="date"
            class="form-control"
            id="dob"
            placeholder="Enter your dob"
            v-model="posts.age"
            required
          />
        </div>
        </div>
        <div class="row">
          <div class="form-group col-md-4">
          <label for="course">Course:</label>
            <select class="form-control" id="course" v-model="posts.selectedCourse" name="selectedCourse" required>
              <option value="" disabled>Select a course</option>
              <option v-for="course in courses" :value="course" :key="course">{{ course }}</option>
            </select>
          </div>
          <div class="form-group col-md-4">
          <label for="Gender">Gender</label>
         <select class="form-control" id="gender" v-model="posts.gender" name="gender" required>
              <option value="" disabled>Select a gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Others</option>
            </select>
        </div>
        <div class="form-group col-md-4">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="emaili"
            placeholder="Enter your email address"
            v-model="posts.email"
            required
          />
        </div>
        </div>
        <div class="row">
        <div class="form-group col-md-6">
          <label for="address">Address</label>
          <input
            class="form-control"
            id="address"
            v-model="posts.address"
            placeholder="Enter your address"
            required
          />
        </div>
        
        <div class="form-group col-md-4">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            placeholder="Enter your phone number"
            v-model="posts.phone"
            required
          />
        </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      <router-view></router-view>
    </div>
    <b-toast v-model="showToast" :title="toastTitle" :auto-hide-delay="2000" variant="success"></b-toast>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "AddStudent",
  data() {
    return {
      courses: [],
      posts: {
        firstName: "",
        surname: "",
        age: null,
        address: "",
        phone: null,
        selectedCourse:'',
        email:'',
        gender:''
        
      },
      showToast: false,
      toastTitle: '',
    };
  },
  mounted() {
    this.fetchCourses();
  },
  methods: {
    postData(e) {
      this.axios
        .post("https://hope1.onrender.com/addStudent", this.posts)
        .then((res) => {
          console.warn(res);
          this.showToast = true;
          this.toastTitle = 'student added';
          this.$router.push("/AdminHomepage");
        });
      e.preventDefault();
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
  },
};
</script>

<style scoped>
* {
  text-align: start;
}
.card {
  max-width: 100%;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.card-header {
  font-family: Verdana;
  /* background-color: #343a40;
  color: #fff; */
  border-radius: 15px 15px 0 0;
  padding: 10px 20px;
}

.card-body {
  padding:20px 40px ;
} 
/*
.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.btn-primary {
  background-color: #3f51b5;
  border-color: #3f51b5;
  margin-top: 20px;
} */
</style>
