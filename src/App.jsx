import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Header from './components/Header';
import CarouselSection from './components/CarouselSection';
import SocialFooter from './components/SocialFooter';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#ffffff] text-[#37352f]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Header />
          <Routes>
            <Route path="/" element={<CarouselSection />} />
          </Routes>
          <SocialFooter />
          <Analytics />
        </div>
      </div>
    </Router>
  );
};

export default App;


