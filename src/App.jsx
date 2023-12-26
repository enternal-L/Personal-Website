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
// get resume file download to work DONE
// infinite carousel in cards section DONE
// place info into infinite carousel --> maybe should make a pop up of description so its cleaner
// animation on infinite carousel section DONE
// Move text based on cursor position DONE
// bio page --> use paralax for bio text DONE
// change react-router-dom to window scroll to DONE
// Add Some text effects for herosection DONE
// Clear unneeded css DONE
// Work on phone media screen, too much spacing between image and project section DONE
// Remake Favicon.ico
// turn off animation of image going away when in mobile mode DONE

