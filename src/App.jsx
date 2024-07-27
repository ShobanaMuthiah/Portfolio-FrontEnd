import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Nav from './Components/Nav';
import Foot from './Components/Foot';

const App = () => {
  
  return (
    <div className="App">
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>

   <Nav/>
     <div className="flex-grow">
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skill' element={<Skills/>}/>

        <Route path='/about' element={<About/>}/>
        
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>


        
      </Routes>
     </div>
      <Foot/>    
      </div>
  );
};

export default App;