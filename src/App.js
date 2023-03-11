import React from 'react';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Dashboard  from './pages/Dashboard';
import About from './pages/About';
import FamilyDetails from './pages/FamilyDetails';
import ProductList from './pages/ProductList';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

import Experienceskills from './pages/Experienceskills';
import MyProjects from './pages/MyProjects';
import Leaves from './pages/Leaves';
import Tasks from './pages/Tasks';
import Logout from './pages/Logout';
import BankDetails from './pages/BankDetails';
import PersonalDetails from './pages/PersonalDetails';
import EmergencyDetails from './pages/EmergencyDetails';
// import Sidebar from './components/Sidebar';
// import Sample from './Sample';


const App = () => {
  return (
    
    <React.Fragment>

   
      
     <BrowserRouter>
    
        <Navbar>
          
        
        {/* <Sidebar/> */}
      <Routes>
      <Route path="/" exact element={<Dashboard/>}/>
      <Route path="/profile" exact element={<Profile/>}>
       <Route path="/profile/familydetails" exact element={<FamilyDetails/>}/>
       <Route path="/profile/personaldetails" exact element={<PersonalDetails/>}/>
       <Route path="/profile/emergencydetails" exact element={<EmergencyDetails/>}/>

      </Route>
      {/* <Route path="/personal details" exact element={<PersonalDetails/>}/> */}
      
      <Route path="/bankdetails" exact element={<BankDetails/>}/>
      <Route path="/tasks" exact element={<Tasks/>}>
      <Route path="/tasks/experienceskills" exact element={<Experienceskills/>}/>
      <Route path="/tasks/myprojects" exact element={<MyProjects/>}/>
      </Route>
      <Route path="/leaves" exact element={<Leaves/>}/>
      <Route path="/logout" exact element={<Logout/>}/>      
      <Route path="/about" exact element={<About/>}/>
      
      <Route path="/productlist" exact element={<ProductList/>}/>
      
      </Routes>
      
{/* <Sample/> */}
</Navbar>
</BrowserRouter>

      </React.Fragment>
  )
}

export default App;
