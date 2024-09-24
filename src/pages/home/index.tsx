import React from "react";
import NavBar from "../../components/navBar";
import NameHome from "../../components/nameHome";
import ProjectList from "../../components/projectList";
import PhotoHome from "../../components/photoHome";
import './style.css';


function Home() {
  return (
    <>
      <div className="pr-10 pl-10">
        <NavBar />
        <div className="flex justify-around items-center h-[85vh]">
          <NameHome />
          <PhotoHome />
        </div>
      </div>
      <div className="bg-[#30473F]">
        <div className="flex flex-col pl-52 pr-52 relative top-[-70px]">
          <div className="pt-48 pl-8 border-l-[4px] border-b-[#FFFFF0]">
            <h2 className="text-4xl font-bold">Projetos</h2>
          </div>
          <p className="pl-9 mt-5">
            Selecionei alguns dos meus projetos, cada um por um motivo especial.<br />
            Eles refletem meu crescimento como desenvolvedor e minha busca por soluções eficientes.
          </p>
        </div>
          <ProjectList />
      </div>
    </>
  )
}

export default Home