import React from 'react';
import ContactList from "../atoms/contactList";

function Footer() {
  return (
    <div style={{
      background: "radial-gradient(ellipse at right bottom, #191824 60%, #29236d 100%)"
    }}
      className="flex pt-5 flex-col ">
      
      <div className='flex items-center px-10'>

      <div className='basis-6/12 text-center items-center md:basis-2/12  flex flex-col '>
        <img src="/assets/images/Liveira.png" className="w-6/12 border-b-2 mb-2" alt="Desenho Liveira" />
          <p className='w-11/12 text-sm'>Obrigado por visitar meu portfólio! Se precisar de algo entre em contato comigo</p>
          <div className='hidden lg:flex'><ContactList /></div>
      </div>

      <div className="basis-10/12 flex justify-evenly items-end">

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

        <div className="hidden md:flex items-start">
        <p className="opacity-50 mr-2">Serviços</p>
          <div className='flex flex-col gap-2 text-sm'>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#services">Site Institucional e Landing Page</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#services">Chatbot para WhatsApp com IA</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#services">Criação de Identidade Visual e Flyers</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#services">Ecommerce</a>
            </div>
            <div className="relative  mb-2 transtion duration-200  hover:underline  hover:text-gray-400">
              <a href="#services">Email Marketing</a>
            </div>
          </div>


        </div>
      </div>

      </div>
      <div
          className="flex justify-center gap-2 py-5">
            <p>© Liveira Dev</p>
            <p>2025</p>
            <p>Todos os direitos reservados</p>
          </div>
    </div>
  );
}

export default Footer;
