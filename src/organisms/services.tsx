
import React from 'react';

import Shape from '../atoms/shape';
import ServicesList from '../molecules/serviceList';

function Services() {
  return (
    <div id='services' className="relative flex flex-col items-center px-10 lg:px-44 mt-28 gap-5">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-10 z-[-20]"
        style={{ 
          backgroundImage: "url('/assets/images/point-grid.svg')",
          backgroundSize: "93%" 
        }} 
      />
    
      <h1 className="font-bold text-3xl">COMO EU POSSO TE AJUDAR</h1>
        <p className="font-thin text-center">
        Sinta-se à vontade para entrar em contato se tiver alguma ideia interessante que gostaria<br/>
        de discutir mais detalhadamente ou trabalhar comigo.
        </p>
      <ServicesList/>
      <Shape 
        shape="circle" size="50vh" rotate="200" 
        top="-40%" left="-10%" 
        mobileSize="40vh"
        mobileTop="-17%" mobileLeft="-30%"
      />

      <Shape 
        shape="square" size="40vh" rotate='130'
        top="-25%" right="1%"
        mobileSize="30vh"
        mobileTop="15%"  mobileRight="-20%"
      />

      <Shape
        shape="triangle" size="50vh" rotate='130'
        bottom="-5%" left="-10%"
        mobileSize="34vh"
        mobileTop="43%" mobileLeft="-15%" 
      />
      
      <Shape
        shape="triangle" size="50vh" rotate='12'
        bottom="-20%" right="-2%"
        mobileSize="50vh" 
        mobileBottom="10%" mobileRight="-30%"
      />
      </div>
  );
}

export default Services;
