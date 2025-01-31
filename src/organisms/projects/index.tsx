import React from 'react';
import ProjectList from '../../molecules/projectList';
import LanguagesIcons from '../../molecules/languagesIcons';


function Projects() {
  return (
    <div id="projects" className="pt-6">
      <div style={{
        background: "radial-gradient(circle, rgba(6, 5, 21, 0.2) 60%, rgba(255, 255, 255, 1) 700%)"
      }} className="flex flex-col items-center gap-12 pt-20 rounded-3xl shadow-lg">
        <div>
          <h1 className="font-bold text-3xl text-center mb-4">PROJETOS SELECIONADOS</h1>
          <p className="font-thin text-center">
          Esses são alguns dos projetos que selecionei com cuidado. Alguns são freelances, outros são estudos e há também os que escolhi<br/>por algum motivo especial, como o desafio ou a oportunidade de aprender algo novo.
          </p>
          </div>
        <LanguagesIcons />
        <ProjectList />
      </div>

    </div>
  );
}

export default Projects;
