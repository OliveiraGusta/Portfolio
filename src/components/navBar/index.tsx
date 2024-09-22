import React from 'react'

var classNav = "hover:font-bold hover:underline"

function Navbar() {
  return (
    <>
          <div className="flex justify-center text-lg mt-10">
            <div className='flex gap-8 text-xl '>
              <div className={classNav}>Home</div>
              <div className={classNav}>Projetos</div>
              <div className={classNav}>Sobre mim</div>
              <div className={classNav}>Contato</div>
            </div>
          </div>
    </>
  )
}

export default Navbar