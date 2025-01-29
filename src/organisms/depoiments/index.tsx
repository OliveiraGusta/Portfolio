import React from 'react'
import SlideDepoiments from '../../molecules/slideDepoiments'
import FormDepoiments from '../../molecules/formDepoiments'

function Depoiments() {
  return (
    <div className="relative pr-10 pl-10">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="src/assets/videos/Background.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 -z-10"></div>
      <div className="flex flex-col items-center gap-5 items-start relative z-10">

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
        <FormDepoiments />

      </div>
    </div>
  )
}

export default Depoiments