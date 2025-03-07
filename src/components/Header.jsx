import React, { useState, useEffect } from 'react';
import profile from '../assets/images/profile.jpeg';

const Header = () => {
  const names = ['Marvin', 'marvincs', 'enternal', 'มาวิน'];
  const [displayText, setDisplayText] = useState(names[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const scrambleSpeed = 100;
  const pauseDuration = 8000;

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;
    let timeout;

    const scrambleText = () => {
      setIsScrambling(true);
      let scrambleCount = 0;
      const maxScrambles = 10;
      const targetText = names[(currentIndex + 1) % names.length];

      intervalId = setInterval(() => {
        if (scrambleCount < maxScrambles) {
          // Generate scrambled text of the same length as the target
          const scrambled = Array(targetText.length)
            .fill()
            .map(() => characters[Math.floor(Math.random() * characters.length)])
            .join('');
          setDisplayText(scrambled);
          scrambleCount++;
        } else {
          clearInterval(intervalId);
          setDisplayText(targetText);
          currentIndex = (currentIndex + 1) % names.length;
          setIsScrambling(false);

          // Set timeout for the next scramble
          timeout = setTimeout(scrambleText, pauseDuration);
        }
      }, scrambleSpeed);
    };

    // Start the initial scramble after a pause
    timeout = setTimeout(scrambleText, pauseDuration);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="mb-8 flex flex-row gap-8">
      <img src = {profile} className = "w-24 h-24 object-cover rounded-full"></img>
      <div className = "flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">
          Hi, I'm{' '}
          <span className='text-scramble text-notion-default'>
            {displayText}
          </span>
          !
        </h1>
        <p className="text-[#6B6B6B]">born in the States, raised in Thailand, studying cs @umich</p>
        </div>
    </div>
  );
};

export default Header; 