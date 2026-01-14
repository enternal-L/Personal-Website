import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Header from './components/Header';
import FoxyGif from './assets/images/foxy-jumpscare.gif';
import SkeletonGif from './assets/images/skeleton-run.gif'
import SocialFooter from './components/SocialFooter';

const EFFECT_DURATION = 800; // ms the GIF stays visible

const App = () => {

  // for foxy and skeleton effects
  const [effectArray, setEffect] = useState({
    'foxy': false,
    'skeleton': false
  });

  const effectSources = {
    foxy: FoxyGif,
    skeleton: SkeletonGif,
  };

  // Auto-hide effect after a short duration
  useEffect(() => {
    // Check if any effect is active
    const activeEffect = Object.keys(effectArray).find(key => effectArray[key]);
    
    // return early
    if (!activeEffect) return;
    
    // on effect array change, change active effect to false
    const id = setTimeout(() => {
      setEffect(prev => ({ ...prev, [activeEffect]: false }));
    }, EFFECT_DURATION);
    
    return () => clearTimeout(id);
  }, [effectArray]);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#37352f]">
      <div className="max-w-6xl mx-auto px-10 py-8 m-80">
        <Header effectArray={effectArray} setEffect={setEffect} />

        {/* for each effect, if effect is active */}
        {Object.keys(effectArray).map(effectKey => 
          effectArray[effectKey] && (
            <div key={effectKey} className="pointer-events-none fixed inset-0 z-[9999]">
              <img
                src={effectSources[effectKey]}
                alt={effectKey}
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}
        <Analytics />
      </div>
    </div>
  );
};

export default App;


