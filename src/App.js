import './style.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import AboutMe from './Pages/Home/AboutMe';
import Testimonials from './Pages/Home/Testimonials';
import ContactMe from './Pages/Home/ContactMe';
import MySkills from './Pages/Home/MySkills';



function App() {
  return (
    <div className="App">
   <Router>
    <div>
      <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}></Route>


      <Route path="*" element={<div>404 not Found</div>}></Route>

    </Routes>
    </div>
   </Router>
    </div>
  );
} 

export default App;
