import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css';

import VueRouter from 'vue-router'

import AdminLogin from './components/LoginPages/AdminLoginpage'
import TeacherLogin from './components/LoginPages/TeacherLoginpage'
import StudentLogin from './components/LoginPages/StudentLoginpage'

import AdminHomepage from './components/AdminHomepage'
import TeacherHomepage from './components/TeacherHomepage'
import HomePage from './components/HomePage'
import ViewProspectus from './components/Admission/ViewProspectus'
import FeeStructure from './components/Admission/FeeStructure'
import AdmissionProcess from './components/Admission/AdmissionProcess'
import EnteranceForm from './components/Admission/EnteranceForm'
import VerifyEntranceForm from './components/Admission/VerifyEntranceForm'

import AddStudent from './components/Student/AddStudent'
import ViewStudent from './components/Student/ViewStudent'
import UpdateStudent from './components/Student/UpdateStudent'
import EditStudent from './components/Student/EditStudent'
import DeleteStudent from './components/Student/DeleteStudent'

import AddCourse from './components/Course/AddCourse'
import ViewCourse from './components/Course/ViewCourse'
import UpdateCourse from './components/Course/UpdateCourse'
import EditCourse from './components/Course/EditCourse'
import DeleteCourse from './components/Course/DeleteCourse'

import AddTeacher from './components/Teacher/AddTeacher'
import ViewTeacher from './components/Teacher/ViewTeacher' 
import RemoveTeacher from  './components/Teacher/DeleteTeacher'
import UpdateTeacher from './components/Teacher/UpdateTeacher'
import EditTeacher from './components/Teacher/EditTeacher'

import Bonafide from './components/Certificate/BonafideCert'

import RequestLeave from './components/Leaves/RequestLeave'
import ApproveLeave from './components/Leaves/ApproveLeave'

import Announcement from './components/Announcement/CreateAnnouncement'
import AnnouncementView from './components/Announcement/AnnouncementView'
import MeritLists from './components/Announcement/MeritLists'
import UploadMeritLists from './components/Announcement/UploadMeritList'
import ViewApplicants from './components/Admission/ViewApplicants'

import AssignSubjects from './components/Subjects/AssignSubjects'
import CreateNotice from './components/Notices/CreateNotice'

import AboutPage from './components/AboutPage'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: HomePage},
  {path: '/TeacherHomepage', component: TeacherHomepage},
  {path: '/AdmissionProcess', component: AdmissionProcess},
  {path: '/enterance-form', component: EnteranceForm},
  {path: '/ViewApplicants', component: ViewApplicants},
  {path: '/verifyEntranceForm', component: VerifyEntranceForm},
  {path: '/prospectus', component: ViewProspectus},
  {path: '/fee', component: FeeStructure},
  {path: '/AdminHomepage', component: AdminHomepage},
  {path: '/Adminlogin', component: AdminLogin},
  {path: '/Teacherlogin', component: TeacherLogin},
  {path: '/Studentlogin', component: StudentLogin},
  { path: '/add-student', component: AddStudent },
  { path: '/students', component: ViewStudent },
  { path: '/update-student', component: UpdateStudent },
  { path: '/remove-student', component: DeleteStudent },
  {name: 'EditStudent',path: '/students/:id/edit',component: EditStudent},
  { path: '/add-teacher', component: AddTeacher },
  { path: '/view-teacher', component: ViewTeacher },
  { path: '/remove-teacher', component: RemoveTeacher },
  { path: '/update-teacher', component: UpdateTeacher },
  {name: 'EditTeacher',path: '/teachers/:id/edit',component: EditTeacher},
  { path: '/add-course', component: AddCourse },
  { path: '/view-course', component: ViewCourse },
  { path: '/remove-course', component: DeleteCourse },
  { path: '/update-course', component: UpdateCourse },
  {name: 'EditCourse',path: '/courses/:id/edit',component: EditCourse},
  { path: '/about', component: AboutPage },
  { path: '/certificate', component: Bonafide },
  { path: '/CreateAnnouncement', component: Announcement },
  { path: '/announcement', component: AnnouncementView },
  { path: '/meritLists', component: MeritLists },
  { path: '/UploadMeritList', component: UploadMeritLists },
  { path: '/CreateNotice', component: CreateNotice },
  {path: '/RequestLeave', component: RequestLeave},
  {path: '/ApproveLeave', component: ApproveLeave},
  {path: '/AssignSubjects', component: AssignSubjects}
  
  // { path: '/about', component: About },
  // { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
