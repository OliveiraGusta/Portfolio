import React from "react";

interface ButtonProps {
  text: string;
  padding?: string;
  link: string;
  iconUrl?: string;
  altIcon?: string;
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  padding = "px-4 py-2",
  link,
  iconUrl,
  altIcon = "Ícone",
  block = false
}) => {
  return (
    <a
      href={block ? "#" : link}
      target={block ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`rounded-3xl border text-center inline-flex items-center gap-2 ${padding} text-white transition duration-300 
        ${block ? "border-gray-500 text-gray-600 cursor-default" : "border-white hover:scale-105"}
      `}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt={altIcon}
          className={`w-5 h-5
            ${block ? "" : "invert"} `}
        />
      )}
      <span>{text}</span>
    </a>
  );
};

export default Button;
