import React, { useState, useEffect } from 'react';
import notesIcon from '../assets/menu/notes.png';
import textFileIcon from '../assets/menu/text_file.png';
import ppIcon from '../assets/menu/pp_icon.png';
import chromeLogoIcon from '../assets/menu/chrome_logo.png';
import DesktopIcon from './DesktopIcon';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Videos from '../pages/Videos';
import Corners from '../pages/Corners';

const pageComponents = {
  about: About,
  experience: Experience,
  videos: Videos,
  corners: Corners,
};

const ICON_ORDER = ['about', 'experience', 'videos', 'corners'];

// Desktop: a vertical column on the left. Mobile: a row pinned near the
// bottom of the viewport, out of the way of the centered content.
const getIconPositions = (isMobile) => {
  if (!isMobile) {
    return {
      about: { x: 24, y: 80 },
      experience: { x: 24, y: 190 },
      videos: { x: 24, y: 300 },
      corners: { x: 24, y: 410 },
    };
  }
  const vw = window.innerWidth;
  const shell = 100;
  const step = 72; // compact spacing between icon centers
  const groupWidth = (ICON_ORDER.length - 1) * step + shell;
  const startX = Math.max(Math.round((vw - groupWidth) / 2), 8);
  const y = 20; // pinned near the top
  return ICON_ORDER.reduce((acc, id, i) => {
    acc[id] = { x: startX + i * step, y };
    return acc;
  }, {});
};

const Desktop = () => {
  const [activePage, setActivePage] = useState('about');
  const [isMobile, setIsMobile] = useState(false);
  const isDarkBg = ['about', 'experience', 'corners', 'videos'].includes(activePage);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const iconPositions = getIconPositions(isMobile);
  const ActiveComponent = pageComponents[activePage];

  return (
    <div
      data-system-theme={isDarkBg ? 'dark' : 'light'}
      className={`relative min-h-screen h-screen w-full overflow-hidden transition-colors duration-200 ${
        isDarkBg ? 'bg-[#1c1c1e] text-white' : 'bg-[#ffffff] text-[#37352f]'
      }`}
    >
      {/* Draggable icons. Keyed by layout mode so positions reset when
          crossing the mobile/desktop breakpoint. */}
      <div key={isMobile ? 'mobile' : 'desktop'} className="absolute inset-0 z-10 pointer-events-none">
          <DesktopIcon
            id="about"
            icon={notesIcon}
            label="about"
            isSelected={activePage === 'about'}
            defaultPosition={iconPositions.about}
            imageSize={60}
            shellWidth={100}
            labelMaxWidth={96}
            onSelect={setActivePage}
            onDarkBg={isDarkBg}
          />
          <DesktopIcon
            id="experience"
            icon={textFileIcon}
            label="experience"
            isSelected={activePage === 'experience'}
            defaultPosition={iconPositions.experience}
            imageSize={64}
            shellWidth={100}
            labelMaxWidth={96}
            onSelect={setActivePage}
            onDarkBg={isDarkBg}
          />
          <DesktopIcon
            id="videos"
            icon={ppIcon}
            label="videos"
            isSelected={activePage === 'videos'}
            defaultPosition={iconPositions.videos}
            imageSize={72}
            shellWidth={100}
            labelMaxWidth={96}
            onSelect={setActivePage}
            onDarkBg={isDarkBg}
          />
          <DesktopIcon
            id="corners"
            icon={chromeLogoIcon}
            label="corners"
            isSelected={activePage === 'corners'}
            defaultPosition={iconPositions.corners}
            imageSize={64}
            shellWidth={100}
            labelMaxWidth={96}
            onSelect={setActivePage}
            onDarkBg={isDarkBg}
          />
      </div>

      {/*
        Content region. A single full-bleed container beneath the icon
        overlay. Each page component owns its own internal layout
        (centering, scrolling, padding) via its root CSS class.
      */}
      <main className="content-area">
        <ActiveComponent key={activePage} />
      </main>

    </div>
  );
};

export default Desktop;
