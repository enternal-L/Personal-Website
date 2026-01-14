import React, { useEffect, useRef } from 'react';
import ummed from '../assets/images/um_logo.png';
import nutanix from '../assets/images/nutanix.png'
import viam from '../assets/images/viam.jpg'

const TimelineSection = ({animationFired, setAnimationFired}) => {

    const elementRef = useRef(null);

    useEffect(() => {

        const element = elementRef.current;

        const handleAnimationEnd = () => {
            setAnimationFired(prev => prev.map((val, index) => index === 1 ? true : val))
        };

        element.addEventListener('animationend', handleAnimationEnd);
        
          return () => {
            element.removeEventListener('animationend', handleAnimationEnd);
        };
    }, [setAnimationFired]);

  const timelineData = [
    {
      year: '2024-2025',
      company: 'UMDBI Lab',
      position: 'Undergraduate Researcher Assistant',
      image: ummed,
      link: 'https://sites.google.com/umich.edu/umdbi/home',
      description: 'Wrote Brain-Computer Interfaces (BCI) software for people to communicate via brain signals',
      width: 12,
      height: 12
    },
    {
      year: '2025',
      company: 'Nutanix',
      position: 'Member of Technical Staff (Intern)',
      image: nutanix,
      link: 'https://www.nutanix.com/',
      description: 'Implemented async I/O into core file server',
      width: 12,
      height: 12
    },
    {
      year: '2026',
      company: 'Viam',
      position: 'Software Engineer Intern',
      image: viam,
      link: 'https://www.viam.com/',
      description: 'Incoming',
      width: 20,
      height: 12
    }
  ];

  return (
    <div className="w-full h-full p-8">
      <div className="w-full h-full relative">
        {/* Timeline line */}
        <div className="absolute top-[71px] w-full left-0 right-0 h-0.5 bg-notion-default"></div>
        
        {/* Timeline items */}
        <div className="flex justify-between relative">
          {timelineData.map((item, index) => (
            <div 
              ref = {elementRef}
              key={index} 
              className={`relative flex flex-col w-full items-center ${!animationFired[1] ? 'animate-fade-in-left opacity-0' : 'opacity-1'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Company Logo */}
              <div className={`w-${item.width} h-${item.height} overflow-hidden mb-2`}>
                <a href = {item.link} target="_blank">
                    <img 
                    src={item.image} 
                    alt={item.company}
                    className="w-full h-full object-cover"
                    />
                </a>
              </div>

              {/* Timeline dot container */}
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-3 h-3 bg-notion-default rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="mt-6 flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-md font-semibold">{item.company}</h3>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{item.year}</span>
                </div>
                <p className="font-medium mb-1">{item.position}</p>
                <p className="text-gray-600 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection; 