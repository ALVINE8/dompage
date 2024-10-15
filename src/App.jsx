import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div>
              <Navbar/>
     
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/> }  />
          <Route path='/About'  element={<About/> }  />
          <Route path='/Contact'  element={<Contact/> }  />
          </Routes>
          <h1>bonjour </h1>
      </BrowserRouter>
     
    </div>
  )
   
  
}

export default App;
