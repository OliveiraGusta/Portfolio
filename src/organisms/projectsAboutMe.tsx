import React from 'react'
import Projects from './projects'
import AboutMe from './aboutMe'
import Shape from '../atoms/shape'

function ProjectsAboutMe() {
  return (
    <div id="about-me" className="relative bg-projectsAboutMe-background bg-cover bg-start px-44 min-h-screen z-20">
      <Projects/>
      <AboutMe/>
      <Shape shape="circle" size="45vh" top="15%" right="-10%" rotate='1' />
      <Shape shape="square" size="32vh" top="30%" left="-3%" rotate='100'/>
      <Shape shape="triangle" size="45vh" bottom="20%" right="-2%" rotate='140' index='1'/>
      <Shape shape="circle" size="47vh" bottom="-2%" left="-10%" rotate='150' />
    </div>
  )
}

export default ProjectsAboutMe