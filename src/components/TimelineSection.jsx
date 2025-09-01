import React, { useState, useEffect } from 'react';
import walls from '../assets/images/Unilver.png';
import ummed from '../assets/images/um_logo.png';
import ddx from '../assets/images/ddx.jpg';
import nutanix from '../assets/images/nutanix.png'

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  const timelineData = [
    {
      year: '2018-2021',
      company: "Wall's Ice Cream, Unilever",
      position: 'Data Analyst Intern',
      image: walls,
      link: 'https://www.unilever.com/brands/ice-cream/walls/',
      description: 'Studied and optimized supply chain processes'
    },
    {
      year: '2022',
      company: 'Delta Dynamics (DDX)',
      position: 'Web Developer Intern',
      image: ddx,
      link: 'https://www.ddxtransformation.com/',
      description: 'Developed mockup of BMW financial website'
    },
    {
      year: '2024-Present',
      company: 'UMDBI Lab',
      position: 'Undergraduate Researcher Assistant',
      image: ummed,
      link: 'https://sites.google.com/umich.edu/umdbi/home',
      description: 'Wrote Brain-Computer Interfaces (BCI) software for people to communicate via brain signals'
    },
    {
      year: '2025-Present',
      company: 'Nutanix',
      position: 'Member of Technical Staff (Intern)',
      image: nutanix,
      link: 'https://www.nutanix.com/',
      description: 'Implemented async I/O into core file server'
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-8">I try to write software</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-[71px] left-0 right-0 h-0.5 bg-notion-default"></div>
        
        {/* Timeline items */}
        <div className="flex justify-between relative">
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col w-full items-center ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-20px]'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Company Logo */}
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
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