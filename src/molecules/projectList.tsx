import React from 'react';
import Button from '../atoms/button';

const projectsData = [
  {
    name: "Ortopelve",
    description: "Sistema Completo Gestão de Clínicas, gestão de serviços, horarios, consultas, financeiro etc..",
    theme: "Freelance Fullstack",
    isProjectOnline: false,
    linkProject: "https://app.ortopelve.com.br",
    isCodePublic: false,
    linkCodeProject: "https://github.com/OliveiraGusta/ortopelve",
    urlImage: "ortopelve-screenshot.png",
    alt: "Screenshot do site da Ortopelve",
    languages: ['Laravel', 'Javascript']
  },
  {
    name: "Blog",
    description: "API para blog pessoal, com temas e postagens de diversos usuarios",
    theme: "Backend",
    isProjectOnline: false,
    linkProject: "",
    isCodePublic: true,
    linkCodeProject: "https://github.com/OliveiraGusta/BlogPessoal_backend",
    urlImage: "blog-screenshot.png",
    alt: "Screenshot de um termianal de computador e um bloco de notas aberto",
    languages: ['Spring']
  },
  {
    name: "Starwars",
    description: "Sistema de avaliação com notas e comentarios, teste técnico Fullstack utilizando a API Swapi",
    theme: "Teste Fullstack",
    isProjectOnline: false,
    linkProject: "",
    isCodePublic: true,
    linkCodeProject: "https://github.com/OliveiraGusta/L5-Networks-StarwarsAPI",
    urlImage: "starwars-screenshot.png",
    alt: "Screenshot do sistema",
    languages: ['Laravel', 'Javascript']
  },
 
  {
    name: "AutoClick",
    description: "Automatizei a geração um processo repetitivo para uma empresa",
    theme: "Automação Desktop",
    isProjectOnline: false,
    linkProject: "",
    isCodePublic: true,
    linkCodeProject: "",
    urlImage: "clicker-screenshot.png",
    alt: "Screenshot de um terminal rodando um boy",
    languages: ['Python']
  },
  {
    name: "Ramais",
    description: "Sistema de controle de ramais, teste técnico Fullstack utilizando um arquivo de ramais",
    theme: "Teste Fullstack",
    isProjectOnline: false,
    linkProject: "",
    isCodePublic: true,
    linkCodeProject: "https://github.com/OliveiraGusta/L5Networking-Test-Ramal",
    urlImage: "ramais-screenshot.png",
    alt: "Screenshot de um sistemas site de ramais",
    languages: ['Laravel', 'Javascript']
  },
  {
    name: "Politicas de Privacidade",
    description: "Automatizei a geração de Politicas de Privacidade da uma empresa",
    theme: "Automação Desktop",
    isProjectOnline: false,
    linkProject: "",
    isCodePublic: true,
    linkCodeProject: "https://github.com/OliveiraGusta/Gerador-de-Politicas-de-Privacidade",
    urlImage: "gerador-politica-screenshot.png",
    alt: "",
    languages: ['Python']
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
    name: 'Laravel',
    size: "w-10 h-10",
    urlImage: "laravel-logo.svg",
    alt: "Logo Laravel"
  },
  {
    name: 'Javascript',
    size: "w-10 h-10",
    urlImage: "javascript-logo.svg",
    alt: "Logo Javascript"
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
              src={`/assets/images/${project.urlImage}`}
              alt={project.alt}
              className="rounded-lg w-[100%] h-[250px]"
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
                      src={`/assets/logos/${languageData.urlImage}`}
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
                  iconUrl="/assets/icons/GlobeIcon.svg"
                  altIcon="Ícone de Globo"
                />
              )}

              {project.isCodePublic ?
                <Button
                  text="Ver Código"
                  padding="px-5 py-2"
                  link={project.linkCodeProject}
                  iconUrl="/assets/icons/GithubIcon.svg"
                  altIcon="Ícone GitHub"
                /> :
                <Button
                  text="Codigo Privado"
                  padding="px-5 py-2 "
                  type="block"
                  link={project.linkCodeProject}
                  iconUrl="/assets/icons/LockIcon.svg"
                  altIcon="Ícone GitHub" />
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
