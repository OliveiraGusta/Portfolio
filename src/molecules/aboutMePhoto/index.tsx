import React from 'react'
import ContactList from '../../atoms/contactList'
import Button from '../../atoms/button'

function AboutMePhoto() {
  return (
    <div style={{
      background: "radial-gradient(ellipse at top left, rgba(6, 5, 21, 0.2) 60%, rgba(255, 255, 255, 1) 400%)"
    }} className="flex flex-col items-center rounded-3xl shadow-lg w-1/3">
      <div className="flex flex-col items-center gap-5 py-10">
        <h2 className="font-bold text-2xl">QUEM SOU EU</h2>
        <img className="animate-float w-1/2" src="src/assets/images/me-home.png" />
        <ContactList />
        <Button
          text="Currículo"
          padding="px-7 py-2"
          link=""
          iconUrl="src/assets/icons/link-icon.png"
          altIcon="Icone GitHub" />
      </div>
    </div>
  )
}

export default AboutMePhoto