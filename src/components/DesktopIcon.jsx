import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

const DRAG_THRESHOLD = 5;

const DesktopIcon = ({
  id,
  icon,
  label,
  isSelected,
  defaultPosition,
  onSelect,
  disabled = false,
  onDarkBg = false,
  imageSize = 64,
  boxSize = 76,
  shellWidth = 100,
  labelMaxWidth = 96,
}) => {
  const nodeRef = useRef(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState(defaultPosition);
  const [isPressed, setIsPressed] = useState(false);

  const handleStart = (_event, data) => {
    dragStartPos.current = { x: data.x, y: data.y };
    setIsPressed(true);
  };

  const handleStop = (_event, data) => {
    const dx = Math.abs(data.x - dragStartPos.current.x);
    const dy = Math.abs(data.y - dragStartPos.current.y);

    setPosition({ x: data.x, y: data.y });
    setIsPressed(false);

    if (dx < DRAG_THRESHOLD && dy < DRAG_THRESHOLD) {
      onSelect(id);
    }
  };

  const iconWrapClass = [
    'mac-icon-image-wrap',
    isSelected || isPressed ? 'mac-icon-image-selected' : '',
    isPressed && !isSelected ? 'mac-icon-image-pressed' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const labelClass = [
    'mac-icon-label',
    onDarkBg ? 'mac-icon-label-dark' : 'mac-icon-label-light',
    isSelected ? 'mac-icon-label-selected' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onStart={handleStart}
      onStop={handleStop}
      disabled={disabled}
      bounds="parent"
    >
      <div
        ref={nodeRef}
        className="absolute z-10 cursor-default select-none touch-none pointer-events-auto"
        style={{ width: shellWidth }}
      >
        <div className="mac-icon-shell">
          <div
            className={iconWrapClass}
            style={{ width: boxSize, height: boxSize }}
          >
            <img
              src={icon}
              alt={label}
              className="mac-icon-image"
              style={{ width: imageSize, height: imageSize }}
              draggable={false}
            />
          </div>
          <span className={labelClass} style={{ maxWidth: labelMaxWidth }}>
            {label}
          </span>
        </div>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
