import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home'
import Project from './pages/projects/projects'
import About from './pages/about/about'
import Skills from './pages/skills/skills'
import Contact from './pages/contact/contact'
import Footer from './components/footer/footer';


function App() {
  return (
    <div id="home">
      <Navbar /> 
      <Home />
      <Project />
       <About />
       <Skills /> 
       <Contact />
      <Footer />
    </div>
  );
}

export default App;
