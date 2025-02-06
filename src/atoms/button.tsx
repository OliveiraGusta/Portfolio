import React from "react";

interface ButtonProps {
  text: string;
  padding?: string;
  iconUrl?: string;
  altIcon?: string;
  link: string;
  type?: "block" | "download"; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  padding = "px-4 py-2",
  iconUrl,
  altIcon = "Ícone",
  link,
  type
}) => {
  return (
    <a
      href={type === "block" ? "#" : link}
      target={type === "block" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={`rounded-3xl border text-center inline-flex items-center gap-2 ${padding} text-white transition duration-300 
        ${type === "block" ? "border-gray-600 text-gray-700 cursor-default " : "border-white hover:scale-105"}
      `}>
      {iconUrl && (
        <img
          src={iconUrl}
          alt={altIcon}
          className={`w-5 h-5 ${type === "block" ? "opacity-50" : "invert"}`}
        />
      )}
      <span>{text}</span>
    </a>
  );
};

export default Button;