import React from 'react';
import Button from '../atoms/button';

const projectsData = [
  {
    name: "Ortopelve",
    description: "Sistema Completo de controle de Clínicas Ortopédicas",
    theme: "Fullstack",
    isProjectOnline: true,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: false,
    linkCodeProject: "",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ['Spring', 'React']
  },
  {
    name: "Ortopelve2",
    description: "Sistema Completo de controle de Clínicas Ortopédicas",
    theme: "Backend",
    isProjectOnline: true,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: true,
    linkCodeProject: "https://app.ortopelve.com.br",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ['Spring', 'Python']
  },
  {
    name: "Ortopelve3",
    description: "Sistema Completo de controle de Clínicas Ortopédicas",
    theme: "Frontend",
    isProjectOnline: true,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: false,
    linkCodeProject: "",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ['React']
  },
  {
    name: "Ortopelve",
    description: "Sistema Completo de controle de Clínicas Ortopédicas",
    theme: "Fullstack",
    isProjectOnline: true,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: false,
    linkCodeProject: "",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ['Spring', 'React']
  },
  {
    name: "Ortopelve5",
    description: "Sistema Completo de controle de Clínicas Ortopédicas",
    theme: "Backend",
    isProjectOnline: true,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: true,
    linkCodeProject: "https://app.ortopelve.com.br",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ['Spring', 'Python']
  },
  {
    name: "Ortopelve6",
    description: "Sistema Completo de controle de Clínicas teste tes testeTeste",
    theme: "Frontend",
    isProjectOnline: true,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: false,
    linkCodeProject: "",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ['React']
  }
];

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
    alt: "Logo Python"
  }
];

function ProjectList() {
  return (
    <div className="pb-20 z-50 flex flex-col">

      <div className="flex flex-wrap flex-row gap-10 xl:justify-center xl:self-center lg:justify-center sm:justify-center">
        {projectsData.map((project, index) => (
          <div key={index} className="max-w-md">

            <img
              width="400"
              src={`src/assets/images/${project.urlImage}`}
              alt={project.alt}
              className="rounded-lg"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h2 className="text-sm font-bold uppercase">{project.theme}</h2>
                <h2 className="text-2xl flex gap-x-2 items-center font-light mb-2">
                  {project.name}
                </h2>
              </div>


              <div className="flex justify-end space-x-1 gap-3">
                {project.languages.map((language, i) => {
                  const languageData = languagesListData.find(
                    (lang) => lang.name === language
                  );
                  return languageData ? (
                    <img
                      key={i}
                      className={`hover:scale-125 transition-transform duration-500 ${languageData.size}`}
                      src={`src/assets/logos/${languageData.urlImage}`}
                      alt={languageData.alt}
                    />
                  ) : null;
                })}
              </div>
            </div>
            <p className="text-white mt-1 w-5/6
            ">{project.description}</p>

            <div className="mt-6 flex gap-4">
              {project.isProjectOnline && (
                <Button
                  text="Ver Projeto"
                  padding="px-5 py-2"
                  link={project.linkProject}
                  iconUrl="src/assets/icons/link-icon.png"
                  altIcon="Ícone GitHub"
                />
              )}
              {project.isCodePublic && (
                <Button
                  text="Ver Código"
                  padding="px-5 py-2"
                  link={project.linkCodeProject}
                
                  iconUrl="src/assets/logos/github-logo.svg"
                  altIcon="Ícone GitHub"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
