import React from 'react';

import LanguagesIcons from '../../molecules/languagesIcons';
import Shape from '../../atoms/shape';
import ServicesList from '../../molecules/serviceList';

function Services() {
  return (
    <div className="relative h-[90vh] flex flex-col items-center justify-center px-44 mt-28 gap-5">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-10 z-[-20]"
        style={{ 
          backgroundImage: "url('src/assets/images/point-grid.svg')",
          backgroundSize: "93%" 
        }} 
      />
    
      <h1 className="font-bold text-3xl">COMO EU POSSO TE AJUDAR</h1>
        <p className="font-thin text-center">
        Sinta-se à vontade para entrar em contato se tiver alguma ideia interessante que gostaria<br/>
        de discutir mais detalhadamente ou trabalhar comigo.
        </p>
      <ServicesList/>
      <Shape shape="circle" size="40vh" top="-25%" left="-10%" rotate='200' />
      <Shape shape="square" size="40vh" top="-8%" right="1%" rotate='130' />
      <Shape shape="triangle" size="50vh" bottom="-5%" left="-10%" rotate='130' />
      <Shape shape="triangle" size="50vh" bottom="-20%" right="-2%" rotate='12' />
      </div>
  );
}

export default Services;
