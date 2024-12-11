import React from 'react'

function AboutMeText() {
  return (
    <div style={{
        background: "radial-gradient(ellipse at right top , rgba(6, 5, 21, 0.2) 55%, rgba(255, 255, 255, 1) 500%)"
      }} className="flex flex-col gap-5 items-center rounded-3xl shadow-lg w-2/3 z-10 p-10 h-[24vw] w-2/3">
        <h1 className="text-2xl font-bold">SOBRE</h1>
        <p className="text-lg">
          Atuo como Desenvolvedor Web e Web Designer Freelancer conversando diretamente com o cliente, traduzindo suas ideias e necessidades utilizando Spring / Java, React / Javascript, PHP e algum construtor ou plataforma caso for necessário. Tenho experiência no desenvolvimento de soluções completas, desde a criação de interfaces agradáveis e intuitivas até a implementação de funcionalidades que garantem o funcionamento eficiente e seguro das aplicações.<br /><br />
          Em trabalhos acadêmicos utilizo Python e C/C++ para projetos que geralmente envolvem algum desses tópicos: Análise de Dados, Cálculos Numéricos, Física e Geometria Analítica.<br /><br />
          Se você estiver procurando por um desenvolvedor com conhecimento em diferentes áreas, por favor, sinta-se à vontade para entrar em contato comigo.
        </p>
      </div>
  )
}

export default AboutMeText