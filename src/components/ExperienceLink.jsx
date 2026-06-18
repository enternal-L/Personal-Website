import React from 'react';

const ExperienceLink = ({ href = '', children, className = '' }) => {
  const isPlaceholder = !href;

  return (
    <a
      href={href || undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={`experience-link ${isPlaceholder ? 'experience-link-placeholder' : ''} ${className}`.trim()}
      aria-disabled={isPlaceholder || undefined}
      onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
    >
      {children}
    </a>
  );
};

export default ExperienceLink;
