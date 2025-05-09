import React from 'react';
import { FaLinkedin, FaRegFile } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const SocialFooter = () => {
  return (
    <footer className="border-t border-[#e6e6e6] pt-8">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/enternal-L"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#37352f] hover:-translate-y-1 transition-transform duration-200 focus:outline-none"
        >
          <FiGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/marvin-jirapongsuwan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#37352f] hover:-translate-y-1 transition-transform duration-200 focus:outline-none"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#37352f] hover:-translate-y-1 transition-transform duration-200 focus:outline-none"
        >
          <FaRegFile size={23} />
        </a>
      </div>
    </footer>
  );
};

export default SocialFooter; 