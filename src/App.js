import React from 'react';
import './App.css';
//import {Router, Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './components/Home';
import {About} from './components/About';
import {Navbar} from './components/navbar';
import {Projects} from './components/Projects';
import {Contacts} from './components/Contacts';

function App() {
  return (
   <Router>
      <Navbar /> 
        <div className="Container pt-4">
          <Routes>
            <Route path={'/'} exact element={<Home/>} />
            <Route path={'/About'} element={<About/>} />
            <Route path={'/Projects'} element={<Projects/>} />
            <Route path={'/Contacts'} element={<Contacts/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
