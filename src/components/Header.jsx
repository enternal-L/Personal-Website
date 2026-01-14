import React, { useState, useEffect } from 'react';
import profile from '../assets/images/profile.jpeg';
import SocialFooter from './SocialFooter'

const Header = ({ effectArray, setEffect }) => {
  const names = ['Marvin', 'marvincs', 'enternal', 'มาวิน'];
  const [displayText, setDisplayText] = useState(names[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);
  }, []);

  return (
    <div className={`mb-8 flex flex-row justify-between gap-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
      <img 
        src={profile} 
        className="w-24 h-24 object-cover rounded-full"
        alt="Profile"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">
          Hi, I'm{' '}
          <span className='text-scramble text-notion-default'>
            {displayText}
          </span>
          !
        </h1>
        <p className="text-[#6B6B6B]">born in the States, raised in Thailand, studying cs @umich</p>
      </div>
      <SocialFooter effectArray = {effectArray} setEffect={setEffect}/>
    </div>
  );
};

export default Header; 