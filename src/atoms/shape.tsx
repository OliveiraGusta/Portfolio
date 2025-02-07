import React, { useState, useEffect } from 'react';
import circle from '/assets/geometricShapes/circle.svg';
import triangle from '/assets/geometricShapes/triangle.svg';
import square from '/assets/geometricShapes/square.svg';

interface ShapeProps {
  shape: 'circle' | 'triangle' | 'square';
  size: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate?: string;
  index?: string;
  className?: string;
  mobileSize?: string;
  mobileTop?: string;
  mobileBottom?: string;
  mobileLeft?: string;
  mobileRight?: string;
}


const Shape: React.FC<ShapeProps> = ({ shape, size, top, bottom, left, right, rotate = '0deg', index, className, mobileSize, mobileTop, mobileBottom, mobileLeft, mobileRight }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  let src = ''; 
  switch (shape) {
    case 'circle': src = circle; break;
    case 'triangle': src = triangle; break;
    case 'square': src = square; break;
    default: src = square; 
  }

  return (
    <img
  src={src}
  alt={shape}
  style={{
    width: isMobile ? mobileSize :size,
    height: size,
    top: isMobile ? mobileTop : top,
    left: isMobile ? mobileLeft  : left,
    right: isMobile ? mobileRight : right,
    bottom: isMobile ? mobileBottom  : bottom,
    transform: `rotate(${rotate}deg)`,
    zIndex: index,
  }}
  className={`absolute z-[30] ${className}`} 
/>

  );
};

export default Shape;
