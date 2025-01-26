// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; 
import Newjar from './newjar'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define the route for Newjar page */}
        <Route path="/newjar.js" element={<Newjar />} />
      </Routes>
    </Router>
  );
}

export default App;
