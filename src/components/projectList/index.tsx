import React from 'react'

const themeList = ['Principais', 'Javascript', 'React', 'Java', 'Spring', 'Python', 'PHP'];

function ProjectList() {
  return (
    <>
      <div className="flex justify-center pl-40">
        <div className='2xl:w-3/12 lg:w-4/12 md:w-2/12 sm:1/12 lg:text-2xl md:text-1xl'>
          <ul>
            {themeList.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex lg:w-9/12 md:w-10/12 sm:11/12 flex-wrap justify-start" id="Galeria">
          <div id="Projeto" className="mb-10 2xl:mr-20 xl:mr-10 lg:mr-5 md:mr-2">
            <img width="500" src="src/assets/images/ortopelve-screenshot.png" alt="Screenshot do site da Ortopelve" className="rounded-lg" />
            <div className="mt-4 flex justify-between">
              <h2 className="text-3xl font-light mb-2">
                <a href="https://app.ortopelve.com.br" target="_blank" className="hover:underline">Ortopelve</a>
              </h2>
              <div className='flex justify-end space-x-1'>
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/react-logo.svg" alt="Logo React" />
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/spring-logo.svg" alt="Logo Spring" />
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/python-logo.svg" alt="Logo Python" />
              </div>
            </div>
            <p className="text-white mt-1">Sistema Completo de controle de Clínicas Ortopédicas</p>
          </div>
          <div id="Projeto" className="mb-10 2xl:mr-20 xl:mr-10 lg:mr-5 md:mr-2">
            <img width="500" src="src/assets/images/ortopelve-screenshot.png" alt="Screenshot do site da Ortopelve" className="rounded-lg" />
            <div className="mt-4 flex justify-between">
              <h2 className="text-3xl font-light mb-2">
                <a href="https://app.ortopelve.com.br" target="_blank" className="hover:underline">Ortopelve</a>
              </h2>
              <div className='flex justify-end space-x-1'>
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/react-logo.svg" alt="Logo React" />
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/spring-logo.svg" alt="Logo Spring" />
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/python-logo.svg" alt="Logo Python" />
              </div>
            </div>
            <p className="text-white mt-1">Sistema Completo de controle de Clínicas Ortopédicas</p>
          </div>
          <div id="Projeto" className="mb-10 2xl:mr-20 xl:mr-10 lg:mr-5 md:mr-2">
            <img width="500" src="src/assets/images/ortopelve-screenshot.png" alt="Screenshot do site da Ortopelve" className="rounded-lg" />
            <div className="mt-4 flex justify-between">
              <h2 className="text-3xl font-light mb-2">
                <a href="https://app.ortopelve.com.br" target="_blank" className="hover:underline">Ortopelve</a>
              </h2>
              <div className='flex justify-end space-x-1'>
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/react-logo.svg" alt="Logo React" />
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/spring-logo.svg" alt="Logo Spring" />
                <img className="w-10 h-10 hover:scale-125 transition-transform duration-500" src="src/assets/logos/python-logo.svg" alt="Logo Python" />
              </div>
            </div>
            <p className="text-white mt-1">Sistema Completo de controle de Clínicas Ortopédicas</p>
          </div>

          <div id="Projeto" className="mb-10 2xl:mr-20 xl:mr-10 lg:mr-5 md:mr-2">
            <img width="500" src="src/assets/images/ortopelve-screenshot.png" alt="Screenshot do site da Ortopelve" className="rounded-lg" />
            <div className="mt-4 flex justify-between">
              <h2 className="text-3xl font-light mb-2">
                <a href="https://app.ortopelve.com.br" target="_blank" className="hover:underline">Ortopelve</a>
              </h2>
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