import React from 'react';
import ContactList from "../../atoms/contactList";

function Footer() {
  return (
    <div style={{
        background: "radial-gradient(ellipse at right bottom, rgba(6, 5, 21, 0.2) 50%, rgba(255, 255, 255, 1) 500%)"
      }} 
    className="p-10 flex items-center justify-around">
        <p>2025 - Gustavo Oliveira</p>
        <ContactList/>
    </div>
  );
}

export default Footer;
