import React from 'react';
import ProjectList from '../../molecules/projectList';

function Projects() {
  return (
    <div className="pt-5">
      <div style={{
        background: "radial-gradient(circle, rgba(6, 5, 21, 0.2) 60%, rgba(255, 255, 255, 1) 700%)"
      }} className="flex flex-col items-center gap-6 pt-28 rounded-3xl shadow-lg">
        <h1 className="font-bold text-3xl">PROJETOS SELECIONADOS</h1>
        <p className="font-thin text-center">
          Sinta-se à vontade para entrar em contato comigo se tiver alguma ideia interessante que gostaria
          <br />
          de discutir mais detalhadamente ou trabalhar comigo.
        </p>
        <ProjectList/>
      </div>
      
    </div>
  );
}

export default Projects;
