import React from 'react'

var classNav = "relative px-2 mb-2 hover:mb-0 hover:border-b-2 hover:border-white-500 transtion duration-200"

function Navbar() {
  return (
    <>
          <div className="flex justify-center text-lg lg:text-xl pt-20">
            <div className='flex gap-4 lg:gap-16'>
              <div className={classNav}>
                <a href="#home">Home</a></div>
              <div className={classNav}>
                <a href="#services">Serviços</a>
              </div>
              <div className={classNav}>
                <a href="#projects">Projetos</a>
              </div>
              <div className={classNav}>
                <a href="#about-me">Sobre mim</a>
              </div>
              <div className={classNav}>
                <a href="#depoiments">Depoimentos</a>
              </div>
            </div>
          </div>
    </>
  )
}

export default Navbar