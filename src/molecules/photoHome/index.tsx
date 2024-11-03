import React from 'react'
import ContactList from '../../atoms/contactList'


function PhotoHome() {
  return (
    <div className="flex-none w-1/5 relative xl:block sm:hidden">
      <img className="animate-float rounded-full border-[1px] border-[#c3a7d1] border border-transparent" src="src/assets/images/me-home.png" />
      <div className="flex flex-col items-center m-4">
        <h2 className="font-bold pr-3 pb-2 pl-3 mt-5 text-lg text-3xl border-b-[1px] border-b-[#ffff]">
          ENTRE EM CONTATO
        </h2>
       <ContactList />
      </div>
    </div>
  )
}

export default PhotoHome