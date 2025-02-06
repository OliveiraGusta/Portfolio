import React from 'react';

const educationData = [
  {
    institution: "Centro Universitário FEI",
    course: "Bacharelado, Ciência da Computação",
    status: "Cursando",
    urlImage: "fei-logo.png"
  },
  {
    institution: "Generation Brasil",
    course: "Desenvolvimento Full Stack Spring React",
    status: "Concluído",
    urlImage: "generation-logo.png"
  },
  {
    institution: "ETEC - Escola Técnica Estadual de São Paulo",
    course: "Técnico, Programação",
    status: "Concluído",
    urlImage: "logo-etec.png"
  }
];

function AboutMeEducation() {
  return (
    <div
      style={{
        background: "radial-gradient(ellipse at left, rgba(6, 5, 21, 0.2) 70%, rgba(255, 255, 255, 1) 500%)"
      }}
      className="flex flex-col  rounded-3xl shadow-lg p-10 px-30 lg:w-5/12 h-[50vh]"
    >
      <h1 className="text-2xl font-bold self-center pb-2">CERTIFICAÇÕES</h1>
      <ul className="list-none">
        {educationData.map((item, index) => (
          <li
            key={index}
            className="text-white py-4 flex items-center gap-4 "
          >
            <img
              src={`src/assets/logos/${item.urlImage}`}
              alt={`Logo ${item.institution}`}
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="text-lg font-bold text-white">{item.institution}</p>
              <p>{item.course}</p>
              <p className="text-gray-400">{item.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMeEducation;
