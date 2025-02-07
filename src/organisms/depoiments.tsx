import React from 'react'

import FormDepoiments from '../molecules/formDepoiments'
import FormLeads from '../molecules/formLeads'
import Shape from '../atoms/shape'
import SlideDepoiments from '../molecules/slideDepoiments'

function Depoiments() {
  return (
    <div id="depoiments" className="relative text-center ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/videos/Background.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 -z-10"></div>
      <div className="flex flex-col items-center gap-5 relative z-10">

        <div className="flex flex-col items-center gap-3 p-10 mt-10">
          <h1 className="font-bold text-3xl">ESPAÇO DE VOCÊS</h1>
          <p className="font-thin text-center">
            Este espaço é dedicado a você! Deixe seu depoimento ou compartilhe
            <br />
            suas ideias para futuros projetos
          </p>
        </div>
       
        <h1 id="forms" className="font-bold text-3xl mt-16">TEM UM DEPOIMENTO OU IDEIA?</h1>
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <FormDepoiments />
          <FormLeads />
        </div>
      </div>

      <Shape
      shape="triangle" size="40vh" rotate='100'
      top="10%" left="-15%"
      mobileSize="34vh"
      mobileTop="-10%"  mobileLeft="-35%"/>

      <Shape
      shape="square" size="28vh" rotate='20' 
      top="20%" right="-5%"
      mobileSize="34vh"
      mobileTop="20%"  mobileRight="-40%"/>

      <Shape
      shape="circle" size="45vh" rotate='190'  index='-2'
      bottom="3%" left="-10%"
      mobileSize="34vh"
      mobileBottom="25%"  mobileLeft="-30%"/>


      <Shape
      shape="triangle" size="40vh" rotate='140'  index='1'
      bottom="0%" right="-2%"
      mobileSize="34vh"
      mobileBottom="10%"  mobileRight="-20%"/>


    </div>
  )
}

export default Depoiments