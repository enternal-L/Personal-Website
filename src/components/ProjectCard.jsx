import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, gitLink, textLim}) => {
  return (
    <div className="flip-card w-[400px] h-[260px] perspective-1000">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden">
          <div 
            className="w-full h-full rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col justify-end h-full p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-sm opacity-90">
                {description.split(' ').slice(0, textLim).join(' ')}...
              </p>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#f7f6f3] rounded-lg shadow-lg">
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
            <a 
              href={gitLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
            >
              Take a looksies
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 