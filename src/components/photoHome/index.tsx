import React from 'react'

const contactsListData = [
  {
    classNameImage:"hover:scale-125 transition-transform duration-500 w-9",  urlLink:"https://github.com/OliveiraGusta",
    urlImage:"src/assets/logos/github-logo.svg",
    alt:"Logo Github"
  },

  {
    classNameImage:"hover:scale-125 transition-transform duration-500 w-9",  urlLink:"mailto:gustavo.oliver456@gmail.com",
    urlImage:"src/assets/logos/email-logo.png",
    alt:"Logo Email"
  },

  {
    classNameImage:"hover:scale-125 transition-transform duration-500 w-9",  urlLink:"https://www.linkedin.com/in/oliveiragusta/",
    urlImage:"src/assets/logos/Linkedin-logo.svg",
    alt:"Logo Linkedin"
  }
]

function PhotoHome() {
  return (
    <div className="flex-none w-1/4 relative xl:block sm:hidden">
      <img className="animate-float" src="src/assets/images/gustavo-home.png" />
      <div className="flex flex-col items-center m-4">
        <h2 className="font-bold pr-3 pl-3 border-b-[4px]  border-b-[#30473F] mt-5 text-lg text-3xl">
          ENTRE EM CONTATO
        </h2>
        <div className="flex gap-6 mt-3">
          {
            contactsListData.map((contact) => (
              <a target='_blank' href={contact.urlLink} key={contact.alt}>
                <img className={contact.classNameImage} src={contact.urlImage} alt={contact.alt} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PhotoHome