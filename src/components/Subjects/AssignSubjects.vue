<template>
  <div class="container">
    <h1 class="text-center mt-5 mb-4">Course Selection</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Selection</th>
          <th>Selected Values</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teacher, index) in teachers" :key="index">
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.course}}</td>
          <td>
  <select class="form-control" v-model="teacher.selectedSubject" @change="storeSelectedSubject(teacher)">
    <option value="" disabled>Select a value</option>
    <option v-for="value in teacher.selections" :value="value" :key="value">{{ value }}</option>
  </select>
</td>
<td>{{ teacher.selectedSubject }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      teacherNames:[],
      teachers:[],
      courses: [],
      subjects: []
    };
  },
  mounted() {
    this.fetchTeachers();
     this.fetchSubjects();
    
  },
  methods: {
    storeSelectedSubject(teacher) {
    // Access the selected subject value from teacher.selectedSubject
    const selectedValue = teacher.selectedSubject;

    // Do whatever you want with the selected value, such as storing it in an array or updating other properties of the teacher object
    // For example:
    teacher.arr.push(selectedValue);

    // Print the selected value for demonstration
    console.warn(teacher);},
    fetchTeachers(){
    axios
        .get("http://localhost:5000/getTeacher-name")
        .then((response) => {
            console.warn(this.teachers)
          this.teacherNames = response.data;
          
             this.teachers = response.data.map(([name, course]) => ({
                name,
                course,
                selections: [],
                selectedSubject: '',
                arr: []
                }));

        })
        .catch((error) => {
          console.error("Error fetching teachers:", error);
        });
    },
    fetchSubjects() {
  axios
    .get("http://localhost:5000/getStudents")
    .then(() => {
      this.teachers.forEach((teacher) => {
        axios
          .get(`http://localhost:5000/getSubjects/${teacher.course}`)
          .then((response) => {
            teacher.selections = response.data;
          })
          .catch((error) => {
            console.error("Error fetching subject for teacher:", error);
          });
      });
    })
}
    
  },
};
</script>

<style>
/* Add your custom styles here */
</style>