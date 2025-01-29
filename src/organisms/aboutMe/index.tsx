import React from 'react';
import AboutMePhoto from '../../molecules/aboutMePhoto';
import AboutMeText from '../../molecules/aboutMeText';
import AboutMeEducation from '../../molecules/aboutMeEducation';
import AboutMeExperience from '../../molecules/aboutMeExperience';

function AboutMe() {
  return (
    <div className="pt-5 pb-40">

      <div className='flex gap-6 pb-6'>
        <AboutMePhoto />
        <AboutMeText />
      </div>      
      <div className='flex gap-6 justify-center'>
        <AboutMeEducation/>
        <AboutMeExperience/>
      </div>
    </div>
  );
}

export default AboutMe;
