import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import About from './About';
import Timeline from './Timeline'
import Interests from './Interests'

const BackgroundSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [playheadPosition, setPlayheadPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const timelineRef = useRef(null);
  const videoButtonsRef = useRef([]);
  const animationFrameRef = useRef(null);

  // short_blurb, work_hist, what_i_like
  const [animationFired, setAnimationFired] = useState([
    false, false, false
  ])

  // playhead doesn't start right away
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPlaying(true);
    }, 1200); 
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, [])

  // Sections array - blocks will stretch based on this array length
  const sections = [
    { id: 'about', label: 'Short_blurb', component: About},
    { id: 'work', label: 'Work_hist', component: Timeline},
    { id: 'life', label: 'What_I_like', component: Interests}
  ];

  const updateActiveSectionFromPlayhead = (position) => {
    if (!timelineRef.current || videoButtonsRef.current.length === 0) return;
    
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const timelineStart = 86; // padding + label column
    
    // Calculate which section the playhead is over
    for (let i = 0; i < videoButtonsRef.current.length; i++) {
      const button = videoButtonsRef.current[i];
      if (!button) continue;
      
      const buttonRect = button.getBoundingClientRect();
      const buttonStart = buttonRect.left - timelineRect.left - timelineStart;
      const buttonEnd = buttonStart + buttonRect.width;
      
      if (position >= buttonStart && position < buttonEnd) {
        setActiveSection(i);
        return;
      }
    }
    
    // Handle case where playhead is at the very end
    const lastButton = videoButtonsRef.current[videoButtonsRef.current.length - 1];
    if (lastButton) {
      const lastButtonRect = lastButton.getBoundingClientRect();
      const lastButtonStart = lastButtonRect.left - timelineRect.left - timelineStart;
      const lastButtonEnd = lastButtonStart + lastButtonRect.width;
      if (position >= lastButtonStart && position <= lastButtonEnd) {
        setActiveSection(videoButtonsRef.current.length - 1);
      }
    }
  };

  const updatePlayheadPositionFromValue = (position) => {
    setPlayheadPosition(position);
    updateActiveSectionFromPlayhead(position);
  };

  const updatePlayheadPosition = (e) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    
    // Account for padding (16px) and label column (70px) = 86px from container left
    const timelineStart = 86;
    const timelineEnd = rect.width - 16; // minus right padding
    const timelineWidth = timelineEnd - timelineStart;
    const x = e.clientX - rect.left - timelineStart;
    const clampedX = Math.max(0, Math.min(timelineWidth, x));
    updatePlayheadPositionFromValue(clampedX);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPlaying(false); // Pause when dragging
    updatePlayheadPosition(e);
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      updatePlayheadPosition(e);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Animation loop for playing
  useEffect(() => {
    if (!isPlaying || isDragging || !timelineRef.current) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    const timelineStart = 86;
    const timelineWidth = timelineRef.current.offsetWidth - timelineStart - 16;
    const playSpeed = timelineWidth / 12; 
    const startTime = Date.now();
    // Capture current position when starting to play
    const startPosition = playheadPosition;

    const animate = () => {
      if (!isPlaying || isDragging) return;

      const elapsed = (Date.now() - startTime) / 1000; // in seconds
      const totalPosition = startPosition + (elapsed * playSpeed);
      
      // Use modulo to loop back to beginning when reaching the end
      const newPosition = totalPosition % timelineWidth;

      updatePlayheadPositionFromValue(newPosition);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, isDragging]); // Removed playheadPosition from dependencies to prevent restart on every update

  // Keyboard event listener for spacebar
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent spacebar from scrolling the page when not in an input field
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle window resize - recalculate active section based on current playhead position
  useEffect(() => {
    const handleResize = () => {
      if (playheadPosition >= 0) {
        updateActiveSectionFromPlayhead(playheadPosition);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [playheadPosition]);

  // Initial calculation on mount to set active section based on playhead position
  useEffect(() => {
    if (playheadPosition === 0 && videoButtonsRef.current.length > 0) {
      updateActiveSectionFromPlayhead(0);
    }
  }, []); // Only run on mount

  // Calculate playhead position as percentage for positioning (only over timeline area, not label)
  const timelineStart = 86; // 70px label + 16px left padding
  const timelineWidth = timelineRef.current 
    ? timelineRef.current.offsetWidth - timelineStart - 16 // minus right padding (16px)
    : 1;
  const playheadPercent = timelineWidth > 0
    ? (playheadPosition / timelineWidth) * 100 
    : 0;

  // Calculate scroll progress for Interests component based on playhead position within the Interests section
  let interestsScrollPosition = 0;
  
  if (videoButtonsRef.current.length > 2 && videoButtonsRef.current[2]) {
    const timelineRect = timelineRef.current?.getBoundingClientRect();
    const interestsButton = videoButtonsRef.current[2];
    const interestsButtonRect = interestsButton.getBoundingClientRect();
    
    if (timelineRect) {
      const interestsButtonStart = interestsButtonRect.left - timelineRect.left - timelineStart;
      const interestsButtonWidth = interestsButtonRect.width;
      const relativePosition = playheadPosition - interestsButtonStart;
      
      if (relativePosition >= 0 && relativePosition <= interestsButtonWidth) {
        // Calculate progress (0 to 1) within the Interests section
        interestsScrollPosition = relativePosition / interestsButtonWidth;
        interestsScrollPosition = Math.max(0, Math.min(1, interestsScrollPosition));
      } else if (relativePosition < 0) {
        interestsScrollPosition = 0;
      } else {
        interestsScrollPosition = 1;
      }
    }
  }

  return (
    <div className="relative group">
      {/* Framed main content */}
      <div className="relative mb-6 rounded-lg animated-shadow">

        {/* Main content row */}
        <div className="flex flex-row p-10 gap-8 relative z-10">
          <div className="w-full h-64">
            <div className="w-full h-full flex flex-row justify-between">
              {(() => {
                const Component = sections[activeSection].component;
                // Pass scrollPosition prop to Interests component
                if (activeSection === 2) {
                  return <Component 
                    scrollPosition={interestsScrollPosition} 
                    animationFired={animationFired} 
                    setAnimationFired={setAnimationFired}
                  />
                }
                return <Component animationFired={animationFired} setAnimationFired={setAnimationFired}/>
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline-style section selector */}
      <div className="mt-8 relative z-10 animate-fade-in">
        <div 
          ref={timelineRef}
          className="rounded-md border border-[#d0d0d0] bg-[#f5f5f5] px-4 py-3 shadow-sm relative"
          onMouseDown={handleMouseDown}
        >
          {/* Playhead - Premiere Pro style */}
          <div
            className="absolute z-30 cursor-grab active:cursor-grabbing select-none"
            style={{
              left: `calc(${timelineStart}px + ${playheadPercent}% * (100% - ${timelineStart}px - 16px) / 100%)`,
              top: 0,
              transform: 'translateX(-50%)',
              height: '100%',
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e);
            }}
          >
            {/* Pentagon marker at top */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '10px solid #2eaadc',
              }}
            />
            {/* Vertical line */}
            <div
              className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-0.5 bg-[#2eaadc]"
              style={{ height: 'calc(100% - 10px)' }}
            />
          </div>

          {/* Controls row - Play/Pause button */}
          <div className="grid grid-cols-[70px,1fr] items-center mb-2">
            <button
              onClick={togglePlayPause}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 transition-colors duration-200"
              title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
            >
              {isPlaying ? (
                <FaPause className="text-[#37352f] text-sm" />
              ) : (
                <FaPlay className="text-[#37352f] text-sm ml-0.5" />
              )}
            </button>
            <div></div>
          </div>

          {/* TIME row */}
          <div className="grid grid-cols-[70px,1fr] items-center mb-2">
            <span></span>
            <div className="relative h-6 flex items-center">
              <div className="w-full flex justify-between items-center text-[10px] text-[#6b6b6b] px-1">
                {['0:00', '0:01', '0:02', '0:03', '0:04', '0:05'].map((t, index, arr) => (
                  <React.Fragment key={t}>
                    <span className=''>{t}</span>
                    {index < arr.length - 1 && (
                      <div className="flex-1 flex justify-evenly items-center px-1">
                        <span className='text-xl flex items-center'>⋅</span>
                        <span className='text-xl flex items-center'>⋅</span>
                        <span className='text-xl flex items-center'>⋅</span>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* VIDEO row */}
          <div className="grid grid-cols-[70px,1fr] items-center">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6b6b6b] uppercase">
              VIDEO
            </span>
            <div className="h-12 rounded-sm overflow-hidden flex gap-2 p-2 border-t-2 border-l-2 border-[#d0d0d0] relative">
              
              {sections.map((item, index) => {
                const isActive = activeSection === index;
                return (
                  <button
                    key={item.id}
                    ref={(el) => (videoButtonsRef.current[index] = el)}
                    type="button"
                    onClick={() => setActiveSection(index)}
                    className='flex-1 h-full cursor-pointer relative overflow-hidden rounded-md px-4 bg-[#4a9fb8] transition-colors duration-200'
                    style={{
                      border: isActive ? '2px solid #2eaadc' : '1px solid #b0b0b0',
                    }}
                    title={item.label}
                  >
                    <p className='text-sm text-start text-white'>{item.label}.MOV</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AUDIO row */}
          <div className="grid grid-cols-[70px,1fr] items-center">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6b6b6b] uppercase">
              AUDIO
            </span>
            <div className="h-12 rounded-sm overflow-hidden flex gap-2 p-2 border-l-2 border-[#d0d0d0] relative">
              
              {sections.map((item, index) => {
                const isActive = activeSection === index;
                return (
                  <div
                    key={item.id}
                    className='flex-1 h-full cursor-pointer relative overflow-hidden rounded-md'
                    style={{
                      background: 'linear-gradient(90deg, #e0e0e0 0%, #d5d5d5 100%)',
                      border: isActive ? '2px solid #2eaadc' : '1px solid #b0b0b0',
                    }}
                    onClick={() => setActiveSection(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection; 

// TODO

// 1. set a fixed size for the divs DONE
// 2. fix the foxy and skeleton icon raising up 
// 3. experiment with different colors for the video timeline tab DONE
// 4. change the colors of the video timeline DONE

// Maybe I should change the box back to the block with shadows tbh
// Make the photocard + description of my interests

// come back and fix the play/pause button, have to seperate it 