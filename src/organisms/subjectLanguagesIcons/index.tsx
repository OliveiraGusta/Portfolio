import React from 'react';

import LanguagesIcons from '../../molecules/languagesIcons';

import Shape from '../../atoms/shape';

function SubjectLanguagesIcons() {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-10 z-[-20]"
        style={{ 
          backgroundImage: "url('src/assets/images/point-grid.svg')",
          backgroundSize: "80%" 
        }} 
      />
      <LanguagesIcons />
      <Shape shape="circle" size="40vh" top="-25%" left="-10%" rotate='200' />
      <Shape shape="square" size="40vh" top="-8%" right="1%" rotate='130' />
      <Shape shape="triangle" size="50vh" bottom="-20%" right="-2%" rotate='12' />
      </div>
  );
}

export default SubjectLanguagesIcons;
