import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homeface from './components/Homeface';
import AboutUs from './components/About_us'; // Corrected component name
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homeface />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
