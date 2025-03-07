import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialFooter = () => {
  return (
    <footer className="border-t border-[#e6e6e6] pt-8">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/enternal-L"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#37352f] hover:text-[#2eaadc] transition-colors focus:outline-none"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/marvin-jirapongsuwan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#37352f] hover:text-[#2eaadc] transition-colors focus:outline-none"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:marvincs@umich.edu"
          className="text-[#37352f] hover:text-[#2eaadc] transition-colors focus:outline-none"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
};

export default SocialFooter; 