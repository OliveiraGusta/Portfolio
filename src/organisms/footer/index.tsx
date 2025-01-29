import React from 'react';
import ContactList from "../../atoms/contactList";

function Footer() {
  return (
    <div style={{
        background: "radial-gradient(ellipse at right bottom, #191824 60%, #29236d 100%)"
      }} 
    className="p-10 flex items-center justify-around">
        <p>2025 - Gustavo Oliveira</p>
        <ContactList/>
    </div>
  );
}

export default Footer;
