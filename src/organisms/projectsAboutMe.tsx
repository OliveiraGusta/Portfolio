import React from 'react'
import Projects from './projects'
import AboutMe from './aboutMe'
import Shape from '../atoms/shape'

function ProjectsAboutMe() {
  return (
    <div className="relative bg-projectsAboutMe-background bg-cover bg-start px-4 lg:px-44 min-h-screen z-20">
      <Projects/>
      <AboutMe/>

      <Shape
      shape="circle" size="45vh" rotate='1'
      top="15%" right="-10%"
      mobileSize="34vh"
      mobileTop="4%"  mobileRight="-30%"
      />
      
      <Shape
      shape="square" size="32vh" rotate='100'
      top="30%" left="-3%"
      mobileSize="34vh"
      mobileTop="15%"  mobileLeft="-30%"/>

      <Shape
      shape="triangle" size="45vh" rotate='140' index='1'
      bottom="20%" right="-2%"
      mobileSize="34vh"
      mobileTop="25%"  mobileRight="-25%"/>

      <Shape
      shape="circle" size="47vh"  rotate='150'
      bottom="-2%" left="-10%"
      mobileSize="30vh"
      mobileBottom="50%"  mobileLeft="-25%"/>

    </div>
  )
}

export default ProjectsAboutMe