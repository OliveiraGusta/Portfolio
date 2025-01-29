import React from 'react'

const experienceData = [
    {
      role: "Desenvolvedor - Freelancer",
      period: "Jun de 2024 - Atual"
    },
    {
      role: "Professor de Desenvolvimento Web - Projeto SSF",
      period: "Fev de 2025 - Atual"
    },
    {
      role: "Desenvolvedor Fullstack - Ortopelve (Freelancer)",
      period: "Fev de 2023 - Jun de 2023"
    },
    {
      role: "Desenvolvedor Web - 4WSites",
      period: "Jul de 2022 - Set de 2023"
    },
    {
      role: "Suporte Técnico - Lorac Informatica (Prefeitura Diadema)",
      period: "Abr de 2022 - Jun de 2022"
    },
    {
      role: "Social Media Designer - Colégio IEMANO",
      period: "Ago de 2021 - Jan de 2022"
    }
  ];
  
  function AboutMeExperience() {
    return (
        <div style={{
            background: "radial-gradient(ellipse at right bottom, rgba(6, 5, 21, 0.2) 50%, rgba(255, 255, 255, 1) 500%)"
          }} className="flex flex-col rounded-3xl shadow-lg p-10 px-30 w-7/12 mt-[-5vh]">
        <h2 className="text-2xl font-bold self-center pb-2 ">XP PROFISSIONAL</h2>
        <ul className="space-y-4">
          {experienceData.map((item, index) => (
            <li key={index} className="py-2 border-l-2 pl-5">
              <p className="text-lg text-white font-bold">{item.role}</p>
              <p className="text-gray-400">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AboutMeExperience;
  