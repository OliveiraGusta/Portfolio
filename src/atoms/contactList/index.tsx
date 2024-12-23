import React from "react";

const contactsListData = [
  {
    urlLink: "https://github.com/OliveiraGusta",
    urlImage: "src/assets/logos/github-logo.svg",
    alt: "Logo Github",
  },

  {
    urlLink: "mailto:gustavo.oliver456@gmail.com",
    urlImage: "src/assets/icons/email-icon.png",
    alt: "Logo Email",
  },

  {
    urlLink: "https://www.linkedin.com/in/oliveiragusta/",
    urlImage: "src/assets/logos/linkedin-logo.svg",
    alt: "Logo Linkedin",
  },
  {
    urlLink: "https://www.linkedin.com/in/oliveiragusta/",
    urlImage: "src/assets/logos/linkedin-logo.svg",
    alt: "Logo Linkedin",
  },
];

function ContactList() {
  return (
    <div className="flex gap-6 mt-3">
      {contactsListData.map((contact) => (
        <a target="_blank" href={contact.urlLink} key={contact.alt}>
          <img
            className="hover:scale-125 transition-transform duration-500 w-9"
            src={contact.urlImage}
            alt={contact.alt}
          />
        </a>
      ))}
    </div>
  );
}

export default ContactList;
