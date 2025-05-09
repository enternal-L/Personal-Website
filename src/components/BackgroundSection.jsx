import React, { useState, useEffect } from 'react';
import interest from '../assets/images/misc.jpg';

const BackgroundSection = () => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    // Show description after a delay
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 1000); // 1 second delay before description appears

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 flex flex-row">
      <div className='w-full'>
        <h2 className="text-2xl font-semibold mb-4">
          I try to tell my story
        </h2>
        <div className="flex flex-row justify-between">
          <div className={`prose w-full h-full ${showDescription ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-[#6B6B6B]">
              I'm passionate about low-level software.
              Wrote C++ at the <a className="underline font-bold" target="_blank" href="https://sites.google.com/umich.edu/umdbi/home">UMDBI Lab</a>.
              <br />
              <br />
              I occasionally post content on my <a className='underline font-bold' target="_blank" href="https://www.youtube.com/@enternal0070/">youtube</a>.
              I enjoy volleyball & basketball and <a className='underline font-bold' target="_blank" href="https://www.overbuff.com/players/ZiangZ-1630">game</a>.
              <br />
              <br />
              I'll be working at <a className='underline font-bold' target="_blank" href= "https://www.nutanix.com/">Nutanix</a> this summer, working on the files team.
              <br />
              <br />
              I'll also be teaching python to first-time-coders as a <a className='underline font-bold' target="_blank" href= "https://joyofcoding.eecs.umich.edu/">Joy of Coding</a> Coach.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <img 
          className="object-cover absolute top-0 right-0 w-96 h-72" 
          alt="me" 
          src={interest}
        />
      </div>
    </div>
  );
};

export default BackgroundSection; 