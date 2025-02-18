import React from "react";

const contactsListData = [
  {
    urlLink: "https://github.com/OliveiraGusta",
    urlImage: "/assets/icons/GithubIcon.svg",
    alt: "Logo Github",
  },

  {
    urlLink: "mailto:gustavo.oliver456@gmail.com",
    urlImage: "/assets/icons/MailIcon.svg",
    alt: "Logo Email",
  },

  {
    urlLink: "https://www.instagram.com/devliveira",
    urlImage: "/assets/icons/InstagramIcon.svg",
    alt: "Logo Linkedin",
  },
  {
    urlLink: "https://www.linkedin.com/in/oliveiragusta/",
    urlImage: "/assets/icons/LinkedinIcon.svg",
    alt: "Logo Linkedin",
  },
];

function ContactList() {
  return (
    <div className="flex gap-6 mt-3">
      {contactsListData.map((contact) => (
        <a target="_blank" href={contact.urlLink} key={contact.alt}>
          <img
            className="hover:scale-125 transition-transform duration-500 w-9 invert"
            src={contact.urlImage}
            alt={contact.alt}
          />
        </a>
      ))}
    </div>
  );
}

export default ContactList;
