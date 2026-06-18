import React from 'react';

const NotesLink = ({ href = '', children, className = '', rel = 'noopener noreferrer' }) => {
  const isPlaceholder = !href;

  return (
    <a
      href={href || undefined}
      target="_blank"
      rel={rel ?? undefined}
      className={`notes-link ${isPlaceholder ? 'notes-link-placeholder' : ''} ${className}`.trim()}
      aria-disabled={isPlaceholder || undefined}
      onClick={isPlaceholder ? (event) => event.preventDefault() : undefined}
    >
      {children}
    </a>
  );
};

export default NotesLink;
