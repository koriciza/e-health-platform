import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Mode from './routes/mode';
import Room from "./routes/Room";
import CreateRoomGroup from './routes/CreateRoomGroup';
import RoomGroup from './routes/RoomGroup';

//========================= HOME PAGES=============
import Home from './Home/Home';
import ContactPage from './Home/ContactPage';
import DoctorsPage from './Home/DoctorsPage';
import AboutUsPage from './Home/AboutUsPage';
import NewsPage from './Home/NewsPage';
import BlogDetails from './Home/BlogDetails';
import Login from './Home/Login';
import RegisterAs from './Home/RegisterAs';
import SignUpAsDoctor from './Doctors/SignUp';
import SignUpAsPatient from './Patients/SignUp';

//==========================ADMIN PAGES=============
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';

//============================DOCTOR PAGES===============
import DocDashboardLayout from './Doctors/dashboard';
import DocLogoOnlyLayout from './Doctors/LogoOnlyLayout';

import DocBlog from './Doctors/pages/Blog';
import DocUser from './Doctors/pages/User';
import DocProducts from './Doctors/pages/Products';
import DocDashboardApp from './Doctors/pages/DashboardApp';

//============================PATIENT PAGES===============

import PatDashboardLayout from './Patients/dashboard';
import PatLogoOnlyLayout from './Patients/LogoOnlyLayout';

import PatBlog from './Patients/pages/Blog';
import PatUser from './Patients/pages/User';
import PatProducts from './Patients/pages/Products';
import PatDashboardApp from './Patients/pages/DashboardApp'; 
import  DoctorsList  from './Patients/pages/DoctorsList';
//============================############================

import './App.css';

function App() {
  return (
    <>
    
  <div className="App">
 
    <Router>
  <Routes> 


   {/*  <Route path="/" exact element={<CreateRoom/>} />
    <Route path="/room/:roomID" element={<Room/>} />  */}

     <Route path="/" exact element={<Home/>} />
    <Route path="/AboutUs" element={<AboutUsPage/>} />
    <Route path="/Contact" element={<ContactPage/>} />
    <Route path="/Doctors" element={<DoctorsPage/>} />
    <Route path="/News" element={<NewsPage/>} />
    <Route path="/BlogDetails" element={<BlogDetails/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/RegisterAs" element={<RegisterAs/>} />
    <Route path="/SignUpAsDoctor" element={<SignUpAsDoctor/>} />
    <Route path="/SignUpAsPatient" element={<SignUpAsPatient/>} />
    
   <Route path="/dashboard" element={<DashboardLayout/>}>
         <Route path="/dashboard/app" element={<DashboardApp />} />  
         <Route path="/dashboard/user" element={<User/>} />  
         <Route path="/dashboard/products" element={<Products />} />  
         <Route path="/dashboard/blog" element={ <Blog/>} />  

   </Route>


   <Route path="/doctorDashboard" element={<DocDashboardLayout/>}>
         <Route path="/doctorDashboard/app" element={<DocDashboardApp />} />  
         <Route path="/doctorDashboard/user" element={<DocUser/>} />  
         <Route path="/doctorDashboard/products" element={<DocProducts />} />  
         <Route path="/doctorDashboard/blog" element={ <DocBlog/>} />  

   </Route>

   <Route path="/patientDashboard" element={<PatDashboardLayout/>}>
         <Route path="/patientDashboard/app" element={<PatDashboardApp />} />  
         <Route path="/patientDashboard/user" element={<PatUser/>} />  
         <Route path="/patientDashboard/doctors" element={<DoctorsList/>} />  
         <Route path="/patientDashboard/blog" element={ <PatBlog/>} />  

   </Route>
   

  {/*  <Route path="/" exact element={<Mode/>} />*/}



     <Route path="/createRoom" element={<CreateRoom/>} />
    <Route path="/room/:roomID" element={<Room/>} />
    <Route path="/createRoomGroup" element={<CreateRoomGroup/>} />
    <Route path="/roomGroup/:roomGroupID" element={<RoomGroup/>} /> 
  </Routes>
</Router>

</div> 

</>
    
  );
}

export default App;
