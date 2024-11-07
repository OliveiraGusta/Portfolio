import React from 'react';
import Circle from '../../atoms/circle';
import Square from '../../atoms/square';

function SplitShapes() {
  return (
    <div className="relative w-full h-full flex justify-between">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 overflow-hidden">
        <Circle />
      </div>
      
      <div className="absolute top-0 right-0 w-1/2 h-1/2 overflow-hidden">
        <Square />
      </div>
    </div>
  );
}

export default SplitShapes;
