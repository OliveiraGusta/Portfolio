import React from 'react';
import AboutMePhoto from '../molecules/aboutMePhoto';
import AboutMeText from '../molecules/aboutMeText';
import AboutMeEducation from '../molecules/aboutMeEducation';
import AboutMeExperience from '../molecules/aboutMeExperience';

function AboutMe() {
  return (
    <div id="about-me" className="pt-5 pb-40">

      <div className='flex flex-col lg:flex-row gap-6 pb-6'>
        <AboutMePhoto />
        <AboutMeText />
      </div>      
      <div className='flex flex-col lg:flex-row gap-16 justify-center'>
        <AboutMeEducation/>
        <AboutMeExperience/>
      </div>
    </div>
  );
}

export default AboutMe;
