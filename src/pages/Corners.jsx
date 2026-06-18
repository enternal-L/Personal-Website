import React from 'react';
import { cornersLinks } from '../data/content';

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.4 }}>
    <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const Corners = () => (
  <div className="corners-page">
    <div className="corners-widget">
      <div className="corners-label">
        <SearchIcon />
        <span>marvin's favourite corners of the internet</span>
      </div>
      <div className="corners-list">
        {cornersLinks.map((link) =>
          link.url ? (
            <div key={link.id} className="corners-item">
              <span className="corners-item-title">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </span>
              <span className="corners-item-sep"> — </span>
              <span className="corners-item-note">{link.note}</span>
            </div>
          ) : (
            <div key={link.id} className="corners-item corners-item--nolink">
              <span className="corners-item-title">{link.title}</span>
              <span className="corners-item-sep"> — </span>
              <span className="corners-item-note">{link.note}</span>
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

export default Corners;
