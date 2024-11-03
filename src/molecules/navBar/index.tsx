import React from 'react'

var classNav = "relative px-2 mb-2 hover:mb-0 hover:border-b-2 hover:border-white-500"

function Navbar() {
  return (
    <>
          <div className="flex justify-center text-lg pt-20">
            <div className='flex gap-20 text-xl '>
              <div className={classNav}>Home</div>
              <div className={classNav}>Projetos</div>
              <div className={classNav}>Sobre mim</div>
              <div className={classNav}>Depoimentos</div>
            </div>
          </div>
    </>
  )
}

export default Navbar