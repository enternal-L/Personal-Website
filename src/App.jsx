import React from 'react';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import HeroSection from './components/HeroSection'
import Cards from './components/Cards';
import Bio from './components/Bio'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

export default function App(){
  return (
    <>
      <Router>
        <NavBar />
        <HeroSection />
        <Bio />
        <Cards />
        <Footer />
      </Router> 
    </>
  );
}

// typescript will yell if component starts with lowercase


// To Do:
// get resume file download to work
// infinite carousel in cards section
// bio page
// change react-router-dom to window scroll to
// Add Some text effects for herosection
// Clear unneeded css

