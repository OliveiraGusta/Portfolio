import React from 'react'

const languagesListData = [
  {
    classNameIcon: "w-12 hover:scale-125 transition-transform duration-500", urlLink: "",
    urlImage: "src/assets/logos/spring-logo.svg",
    alt: "Logo Spring"

  },
  {
    classNameIcon: " w-16 hover:scale-125 transition-transform duration-500", urlLink: "",
    urlImage: "src/assets/logos/react-logo.svg",
    alt: "Logo React"

  },
  {
    classNameIcon: " w-12 hover:scale-125 transition-transform duration-500", urlLink: "",
    urlImage: "src/assets/logos/python-logo.svg",
    alt: "Logo python"


  }
]
function nameHome() {
  return (
    <div>
      <div className="mb-3 flex font-light items-end justify-between">
        <div>
          <p >UI / UX DESIGNER</p>
          <p className='font-bold'>FULLSTACK DEVELOPER</p>
        </div>           
        <div className="flex gap-6 items-center">
          {languagesListData.map((language) => (
            <a className={language.classNameIcon} href={language.urlLink}>
              <img src={language.urlImage} alt={language.alt} />
            </a>
          ))}
        </div>
      </div>
          <h2 className="font-bold text-9xl border-t-[4px] border-b-[4px] border-t-[#30473F] border-b-[#30473F]">Gustavo<br />Oliveira</h2>
          <div className="mt-3 flex items-end font-light flex-col">
            <p>Desenvolvedor em</p>
            <p>ascensão</p>
          </div>
        </div>
  )
}

export default nameHome