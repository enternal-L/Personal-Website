import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Header from './components/Header';
import CarouselSection from './components/CarouselSection';
import SocialFooter from './components/SocialFooter';

const App = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#37352f]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header />
        <CarouselSection />
        <SocialFooter />
      </div>
    </div>
  );
};

export default App;

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

