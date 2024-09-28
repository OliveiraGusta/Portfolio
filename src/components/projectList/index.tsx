import React from 'react'

const projectsData = [
    {
      name: "Ortopelve",
      description: "Sistema Completo de controle de Clínicas Ortopédicas",
      isProjectOnline: true,
      linkProject: "https://app.ortopelve.com.br",
      isCodePublic: false,
      linkCodeProject: "",
      urlImage: "ortopelve-screenshot.png",
      alt: "Screenshot do site da Ortopelve",
      languages: []
    },
    {
      name: "Ortopelve2",
      description: "Sistema Completo de controle de Clínicas Ortopédicas",
      isProjectOnline: true,
      linkProject: "https://app.ortopelve.com.br",
      isCodePublic: false,
      linkCodeProject: "",
      urlImage: "ortopelve-screenshot.png",
      alt: "Screenshot do site da Ortopelve",
      languages:  ['Spring', 'Python', 'React'] 
    }
  ]

const languagesListData = [
  {
    name: 'Spring',
    size: "w-10 h-10",
    urlImage: "spring-logo.svg",
    alt: "Logo Spring"

  },
  {
    name: 'React',
    size: "w-10 h-10",
    urlImage: "react-logo.svg",
    alt: "Logo React"

  },
  {
    name: 'Python',
    size: "w-10 h-10",
    urlImage: "python-logo.svg",
    alt: "Logo python"

  }
]

function ProjectList() {
  return (
    <>
        <div className="pb-20 flex flex-col">
          <h2 className="text-3xl mb-5 px-40 font-bold">Backend</h2>
          <div className="flex flex-wrap flex-row gap-6 xl:self-center xl:justify-start lg:justify-center sm:justify-center">
    
            <div className="">
              <img width="500" src="src/assets/images/ortopelve-screenshot.png" alt="Screenshot do site da Ortopelve" className="rounded-lg" />
              <div className="mt-4 flex justify-between">
                <div> 
                <h2 className="text-3xl flex gap-5 items-center font-light mb-2">
                 Ortopelve
                 <a href="https://app.ortopelve.com.br" target="_blank" className="hover:underline">
                  <img width="20" className='hover:scale-125 transition-transform duration-500' src="src/assets/icons/linkIcon.png"/>
                  </a>
                <a href="" target="_blank" className="hover:underline">
                  <img width="20" className='hover:scale-125 transition-transform duration-500' src="src/assets/icons/webIcon.png"/>
                </a>
                </h2>
               
                </div>
                <div className='flex justify-end space-x-1'>
                  <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/react-logo.svg" alt="Logo React" />
                  <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/spring-logo.svg" alt="Logo Spring" />
                  <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/python-logo.svg" alt="Logo Python" />
                </div>
              </div>
              <p className="text-white mt-1">Sistema Completo de controle de Clínicas Ortopédicas</p>
            </div>
      
          </div>
        </div>
    </>
  )
}

export default ProjectList