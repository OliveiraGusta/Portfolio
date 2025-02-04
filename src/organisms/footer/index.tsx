import React from 'react';
import ContactList from "../../atoms/contactList";

function Footer() {
  return (
    <div style={{
      background: "radial-gradient(ellipse at right bottom, #191824 60%, #29236d 100%)"
    }}
      className="flex pt-5 flex-col ">
      
      <div className='flex items-center px-10'>

      <div className='basis-2/12'>
        <img src="src\assets\images\Liveira.png"
          className="w-6/12 border-b-2 mb-2" alt="Desenho Liveira" />Obrigado por visitar meu portfólio!<br />Se precisar de algo entre em contato comigo<ContactList />
      </div>

      <div className="basis-10/12 flex justify-evenly items-end">
        {/*Navegação*/}
        <div className='flex items-start'>
          <p className="opacity-50 mr-2">Navegação</p>
          <div className='flex flex-col gap-2 text-sm'>
            <div className="relative mb-2 transtion duration-200 hover:underline  hover:text-gray-400">
              <a href="#home">Home</a></div>
            <div className="relative mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#services">Serviços</a>
            </div>
            <div className="relative mb-2  transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#projects">Projetos</a>
            </div>
            <div className="relative mb-2  transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#about-me">Sobre mim</a>
            </div>
            <div className="relative mb-2  transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#depoiments">Depoimentos</a>
            </div>
          </div>
        </div>
        {/*Serviços*/}
        <div className='flex items-start'>
          <p className="opacity-50 mr-2">Serviços</p>
          <div className='flex flex-col gap-2 text-sm'>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#about-me">Site Institucional e Landing Page</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#about-me">Chatbot para WhatsApp com IA</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#about-me">Criação de Identidade Visual e Flyers</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#about-me">Ecommerce</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#about-me">Email Marketing</a>
            </div>
          </div>


        </div>
      </div>

      </div>
      <div
          className="flex justify-center gap-2 py-1">
            <p>© Liveira Dev</p>
            <p>2025</p>
            <p>Todos os direitos reservados</p>
          </div>
    </div>
  );
}

export default Footer;
