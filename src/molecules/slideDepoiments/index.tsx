import React from 'react'

import imgPerson from "../../assets/images/person.jpg";


const depoimentsData = [
  {
    name: "Pessoa 1",
    business: "Empresa 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    srcImage: imgPerson,
    altImage: "Imagem da Pessoa 1",
  },
  {
    name: "Pessoa 2",
    business: "Empresa 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    srcImage: imgPerson,
    altImage: "Imagem da Pessoa 2",
  },
  {
    name: "Pessoa 3",
    business: "Empresa 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    srcImage: imgPerson,
    altImage: "Imagem da Pessoa 3",
  },
  {
    name: "Pessoa 4",
    business: "Empresa 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    srcImage: imgPerson,
    altImage: "Imagem da Pessoa 4",
  },
  {
    name: "Pessoa 5",
    business: "Empresa 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    srcImage: imgPerson,
    altImage: "Imagem da Pessoa 5",
  },
  {
    name: "Pessoa 6",
    business: "Empresa 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    srcImage: imgPerson,
    altImage: "Imagem da Pessoa 6",
  }
];


function SlideDepoiments() {
  return (
    <>
      <div className="flex overflow-hidden space-x-5 group">

        <div className="flex space-x-10 animate-loopScroll group-hover:paused">
          {depoimentsData.map((depoiment, index) => (
            <div key={index} style={{
              background: "radial-gradient(ellipse at right top , rgba(150, 150, 150, 0.2) 55%, rgba(255, 255, 255, 1) 500%)"
            }}
              className="flex flex-row w-[500px] hover:scale-110 transform transition-transform duration-300 rounded-2xl p-10 gap-2">

              <img className="h-32 rounded-xl object-cover"
                src={depoiment.srcImage} alt={depoiment.altImage} />
              <div>
                <h2 className="text-xl text-start font-thin ">{depoiment.name}</h2>
                <p className='font-bold'>{depoiment.business}</p>
                <p className="text- text-start font-thin mt-2 ">{depoiment.text}</p>
              </div>
            </div>
          ))}

        </div>
        <div className="flex space-x-10 animate-loopScroll group-hover:paused" aria-hidden="true">
          {depoimentsData.map((depoiment, index) => (
            <div key={index} style={{
              background: "radial-gradient(ellipse at right top , rgba(150, 150, 150, 0.2) 55%, rgba(255, 255, 255, 1) 500%)"
            }}
              className="flex flex-row w-[500px] hover:scale-110 transform transition-transform duration-300 rounded-2xl p-10 gap-2">

              <img className="h-32  rounded-xl object-cover"
                src={depoiment.srcImage} alt={depoiment.altImage} />
              <div>
                <h2 className="text-xl text-start font-thin ">{depoiment.name}</h2>
                <p className='font-bold'>{depoiment.business}</p>
                <p className="text- text-start font-thin mt-2 ">{depoiment.text}</p>
              </div>
            </div>
          ))}

        </div>
        <div className="flex space-x-10 animate-loopScroll group-hover:paused" aria-hidden="true">
          {depoimentsData.map((depoiment, index) => (
            <div key={index} style={{
              background: "radial-gradient(ellipse at right top , rgba(150, 150, 150, 0.2) 55%, rgba(255, 255, 255, 1) 500%)"
            }}
              className="flex flex-row w-[500px] hover:scale-110 transform transition-transform duration-300 rounded-2xl p-10 gap-2">

              <img className="h-32  rounded-xl object-cover"
                src={depoiment.srcImage} alt={depoiment.altImage} />
              <div>
                <h2 className="text-xl text-start font-thin ">{depoiment.name}</h2>
                <p className='font-bold'>{depoiment.business}</p>
                <p className="text- text-start font-thin mt-2 ">{depoiment.text}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </>
  )
}

export default SlideDepoiments