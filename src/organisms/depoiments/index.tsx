import React from 'react'
import SlideDepoiments from '../../molecules/slideDepoiments'
import FormDepoiments from '../../molecules/formDepoiments'
import FormLeads from '../../molecules/formLeads'
import Shape from '../../atoms/shape'

function Depoiments() {
  return (
    <div id="depoiments" className="relative pr-10 pl-10">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="src/assets/videos/Background.mp4" type="video/mp4" />
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
        <SlideDepoiments />
        <h1 className="font-bold text-3xl mt-16">TEM UM DEPOIMENTO OU IDEIA?</h1>
        <div className="flex flex-row gap-16">
          <FormDepoiments />
          <FormLeads />
        </div>
      </div>
      <Shape shape="triangle" size="40vh" top="10%" left="-15%" rotate='100'/>
      <Shape shape="square" size="28vh" top="20%" right="-5%" rotate='20' />
      <Shape shape="circle" size="45vh" bottom="3%" left="-10%" rotate='190' />
      <Shape shape="triangle" size="40vh" bottom="0%" right="-2%" rotate='140' index='1'/>

    </div>
  )
}

export default Depoiments