import React from "react";

interface ButtonProps {
  text: string;             
  padding?: string;        
  link: string;        
  iconUrl?: string;         
  altIcon?: string;         
}

const Button: React.FC<ButtonProps> = ({
  text,
  padding = "px-4 py-2",
  link,
  iconUrl,
  altIcon = "Ícone",
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-3xl border border-white text-center inline-flex items-center gap-2 ${padding} text-white hover:bg-white hover:text-black transition duration-300`}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt={altIcon}
          className="w-5 h-5"
        />
      )}
      <span>{text}</span>
    </a>
  );
};

export default Button;
