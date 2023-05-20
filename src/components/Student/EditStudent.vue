<template>
  <div class="card" >
    <div class="card-header">
    <h2>Edit Student</h2>
    </div>
    <div class="card-body">
    <form @submit="updateStudent">
      <span >PERSONAL DETAILS</span>
        <div class="row mt-3">
          <div class="form-group col-md-4">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="Enter your first name"
              v-model="student.firstName"
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
              v-model="student.lastName"
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
            v-model="student.age"
            required
          />
        </div>
        </div>
        <div class="row">
          <div class="form-group col-md-4">
            <label for="course">Course</label>
          <input
            type="text"
            class="form-control"
            id="course"
            v-model="student.course"
            readonly
          />
          </div>
          <div class="form-group col-md-4">
          <label for="Gender">Gender</label>
         <select class="form-control" id="gender" v-model="student.gender" name="gender" required>
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
            v-model="student.email"
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
            v-model="student.address"
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
            v-model="student.phone"
            required
          />
        </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    </div>
    <b-toast v-model="showToast" :title="toastTitle" :auto-hide-delay="1000" variant="success"></b-toast>
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
      student: {
        id: null,
        firstName: '',
        lastName: '',
        // Other student properties...
      },
      showToast: false,
      toastTitle: ''
    };
  },
  mounted() {
    const studentId = this.$route.params.id;
  // Make an API request to fetch the student details
  axios.get(`https://hope1.onrender.com/getStudent/${studentId}`)
    .then(response => {
      // Populate the student object with the fetched data
         const data = response.data;
      this.student = {
        id: data[0],
        firstName: data[1],
        lastName: data[2],
        age: data[3],
        address: data[4],
        phone: data[5],
        course:data[6]
      };
    })
    .catch(error => {
      console.error('Error fetching student details:', error);
    });
  },
  methods: {
    updateStudent(e) {
        const confirmation = window.confirm('Are you sure you want to update the student?');
        if (!confirmation) {
            return; // Cancel the update if the user cancels the confirmation
        }
      axios.put(`https://hope1.onrender.com/updateStudent/${this.student.id}`, this.student)
        .then(response => {
            console.warn(response);
          console.log('Student updated successfully');
           this.showToast = true;
          this.toastTitle = 'Successfully uupdated student'
       setTimeout(() => {
            this.$router.push('/AdminHomepage');
          }, 1500);
        })
        e.preventDefault()
        .catch(error => {
          console.error('Error updating student:', error);
        });
    }
  }
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
.b-toast {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>