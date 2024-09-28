import React from 'react'

const languagesListData = [
  {
    size: "w-12", urlLink: "",
    urlImage: "spring-logo.svg",
    alt: "Logo Spring"

  },
  {
    size: " w-16", urlLink: "",
    urlImage: "react-logo.svg",
    alt: "Logo React"

  },
  {
    size: " w-12 ", urlLink: "",
    urlImage: "python-logo.svg",
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
            <a className={`hover:scale-125 transition-transform duration-500 ${language.size}`} href={language.urlLink}>
              <img src={`src/assets/logos/${language.urlImage}`} alt={language.alt} />
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