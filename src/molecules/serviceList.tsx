import React from 'react';


const servicesData = [
  {
    title: 'Site Institucional e Landing Page',
    description: 'Criação de sites institucionais e landing pages personalizadas, com design atraente e responsivo.',
    icon: <img src="/assets/icons/MonitorIcon.svg" className="w-10 h-10 invert" alt="Ícone de Email" />,
    color: 'border-blue-500'
  },
  {
    title: 'Sistemas Web',
    description: 'Desenvolvimento de sistemas web sob medida, com soluções que atendem às necessidades específicas do cliente.',
    icon: <img src="/assets/icons/CodeIcon.svg" className="w-10 h-10 invert" alt="Ícone de Email" />,
    color: 'border-purple-500'
  },
  {
    title: 'Email Marketing',
    description: 'Criação de campanhas de email marketing eficazes, com design chamativo e conteúdo relevante.',
    icon: <img src="/assets/icons/MailIcon.svg" className="w-10 h-10 invert" alt="Ícone de Email" />,
    color: 'border-yellow-400'
  },
  {
    title: 'Chatbot para WhatsApp com IA',
    description: 'Implementação de chatbots inteligentes no WhatsApp, automatizando o atendimento ao cliente.',
    icon: <img src="/assets/icons/Personcon.svg" className="w-10 h-10 invert" alt="Ícone de Email" />,
    color: 'border-green-300'
  },
  {
    title: 'Criação de Identidade Visual e Flyers',
    description: 'Desenvolvimento de identidade visual completa para sua marca, incluindo logotipos e materiais promocionais.',
    icon: <img src="/assets/icons/PaintIcon.svg" className="w-10 h-10 invert" alt="Ícone de Email" />,
    color: 'border-pink-400'
  },
  {
    title: 'Ecommerce',
    description: 'Criação e gestão de lojas virtuais com design atrativo e funcional, integrando sistemas de pagamento.',
    icon: <img src="/assets/icons/CartIcon.svg" className="w-10 h-10 invert" alt="Ícone de Email" />,
    color: 'border-orange-500'
  },
];

function ServicesList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-50">
      {servicesData.map((service, index) => (
        <a href="#orcamento"><div key={index} style={{
          background: "radial-gradient(ellipse at right bottom, rgba(6, 5, 21, 0.01) 70%, rgba(255, 255, 255, 0.9) 400%)"
        }} className="flex flex-col items-center py-16 rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300">
          <div className={`mb-4 border-2 ${service.color} p-8 rounded-full `}>{service.icon}</div>
          <h3 className="text-xl text-center font-semibold mb-2 px-3">{service.title}</h3>
          <p className="text-sm text-center w-2/3">{service.description}</p>
        </div>
        </a>
      ))}
    </div>
  );
};

export default ServicesList;
