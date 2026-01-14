import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaRegFile, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import FoxyImg from '../assets/images/foxy.jpeg';
import SkeletonImg from '../assets/images/Skeleton.png';
import mich_logo from '../assets/images/um_logo.svg'

const SocialFooter = ( {effectArray, setEffect} ) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isRevealed) {
      // Start showing and animating in
      setShouldRender(true);
      setIsExiting(false);
    } else if (shouldRender) {
      // Start exit animation
      setIsExiting(true);
      // After exit animation completes, remove from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsExiting(false);
      }, 500); // Match exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isRevealed, shouldRender]);

  return (
    <>
    <div className="border-b-2 border-[#e6e6e6] flex justify-center items-end space-x-6 ml-auto pb-2 mb-2">
      <a
        href="https://github.com/enternal-L"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#37352f] hover:-translate-y-1 transition-transform duration-200 focus:outline-none"
      >
        <FiGithub size={30} />
      </a>
      <a
        href="https://linkedin.com/in/marvin-jirapongsuwan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#37352f] hover:-translate-y-1 transition-transform duration-200 focus:outline-none"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#37352f] hover:-translate-y-1 transition-transform duration-200 focus:outline-none"
      >
        <FaRegFile size={28} />
      </a>
      <button
        onClick={() => setIsRevealed(!isRevealed)}
        className={`text-[#37352f] -translate-y-1 transition-all duration-200 focus:outline-none
          ${isRevealed ? 'hover:-translate-x-1' : 'hover:translate-x-1'}
          `
        }
        aria-label="Toggle effects"
      >
        {isRevealed ? (
          <FaChevronLeft size={23} className="transition-all duration-300" />
        ) : (
          <FaChevronRight size={23} className="transition-all duration-300" />
        )}
      </button>

      {shouldRender &&
        <div className={`flex items-end space-x-4 overflow-hidden ${isExiting ? 'exit-panel' : 'reveal-panel'}`}>
          <button
            className='transition-all duration-300 ease-in-out focus:outline-none translate-y-2 hover:translate-y-1'
            onClick={() => {
              if (!effectArray['foxy']) {
                setEffect(prev => ({ ...prev, 'foxy': true }));
              }
            }}
          >
            <img className="size-10 cursor-pointer" src={FoxyImg} alt="Foxy" />
          </button>
          <button
            type="button"
            className='transition-all duration-300 ease-in-out focus:outline-none translate-y-2 hover:translate-y-1'
            onClick={() => {
              if (!effectArray['skeleton']) {
                setEffect(prev => ({ ...prev, 'skeleton': true }));
              }
            }}
          >
            <img className="size-10 cursor-pointer" src={SkeletonImg} alt="Skeleton" />
          </button>
          <a
            className='cursor-pointer transition-all duration-300 ease-in-out focus:outline-none hover:-translate-y-1'
            src={mich_logo} 
            alt="webring" 
            href="https://michigan-webring.vercel.app/"
            target="_blank"
          >
            <img className='object-contain size-8'
            src={mich_logo} 
            alt="webring">
            </img>
          </a>
        </div>
      }
    </div>
    </>
  );
};

export default SocialFooter; 