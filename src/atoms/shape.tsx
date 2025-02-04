import React from 'react';

import circle from '../assets/geometricShapes/circle.svg';
import triangle from '../assets/geometricShapes/triangle.svg';
import square from '../assets/geometricShapes/square.svg';

interface ShapeProps {
  shape: 'circle' | 'triangle' | 'square';
  size: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate?: string;
  index?: string;
}

const Shape: React.FC<ShapeProps> = ({ shape, size, top, bottom, left, right, rotate = '0deg', index }) => {
  let src = ''; 

  switch (shape) {
    case 'circle':
      src = circle;
      break;
    case 'triangle':
      src = triangle;
      break;
    case 'square':
      src = square;
      break;
    default:
      src = square; 
  }

  return (
    <img
      src={src}
      alt={shape} 
      className="absolute z-[30]"
      style={{
        width: size,
        height: size,
        top: top,
        bottom: bottom,
        left: left,
        right: right,
        transform: `rotate(${rotate}deg)`,
        zIndex: index,
      }}
    />
  );
};

export default Shape;
