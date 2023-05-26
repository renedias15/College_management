<template>
  <div class="container">
    <h1 class="text-center mt-5 mb-4">Subject Selection</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Add new subject</th>
          <th>Selected</th>
          <th>Actions</th> 
          <th>Subjects taught(current)</th> 
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teacher, index) in teachers" :key="index">
          <td>{{ teacher.name }}</td>
          <td>{{ teacher.course}}</td>
          <td>
  <select class="form-control" v-model="teacher.selectedSubject" @change="storeSelectedSubject(teacher)">
    <option value="" disabled>Select a subject</option>
    <option v-for="value in teacher.selections" :value="value" :key="value">{{ value }}</option>
  </select>
</td>
<td>{{ teacher.arr}}</td>
<td><button class="btn btn-success mr-2" @click="saveSubject(teacher)">Save</button></td>
<td>{{ teacher.subject }}</td>

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
      subjects: [],
      data:[]
    };
  },
  mounted() {
    // this.fetchTeachers();
     this.fetchSubjects();
    
  },
  methods: {
    storeSelectedSubject(teacher) {
    // Access the selected subject value from teacher.selectedSubject
    const selectedValue = teacher.selectedSubject;

    // Do whatever you want with the selected value, such as storing it in an array or updating other properties of the teacher object
    // For example:
teacher.arr = teacher.arr && teacher.arr.length > 0 ? `${teacher.arr},${selectedValue}` : selectedValue;

    // Print the selected value for demonstration
    //  formData.append('email', this.email);
    teacher.data.push({
        'id':teacher.id,
        'subject':selectedValue
    })
      
   
    },
    // fetchTeachers(){
    // axios
    //     .get("http://localhost:5000/getTeacher-name")
    //     .then((response) => {
    //         console.warn(this.teachers)
    //       this.teacherNames = response.data;
          
    //          this.teachers = response.data.map(([name, course,id,subject]) => ({
    //             name,
    //             course,
    //             id,
    //             selections: [],
    //             subject,
    //             arr: '',
    //             data:[]
    //             }));

    //     })
    //     .catch((error) => {
    //       console.error("Error fetching teachers:", error);
    //     });
    // },
    fetchSubjects() {
   axios
        .get("http://localhost:5000/getTeacher-name")
        .then((response) => {
                 console.warn(this.teachers)
          this.teacherNames = response.data;
          
             this.teachers = response.data.map(([name, course,id,subject]) => ({
                name,
                course,
                id,
                selections: [],
                subject,
                arr: '',
                data:[]
                }));
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
       .catch((error) => {
          console.error("Error fetching teachers:", error);
        });
    },

saveSubject(teacher){
    
    const array=teacher.data
    console.log(array)
    for (let i = 0; i < array.length; i++)
    {
    axios
    .post("http://localhost:5000/saveSubject", array[i])
    .then(() => {
      console.log("Selected values saved successfully");
    window.location.reload()
    })
    .catch((error) => {
      console.error("Error saving selected values:", error);
    });
    
    }
}
},
  }
</script>

<style>
/* Add your custom styles here */
</style>