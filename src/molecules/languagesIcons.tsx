import React from 'react'

const languagesIcon = [
    {
        urlImage: "src/assets/logos/circle-laravel-logo.svg",
        alt: "Logo Laravel",
    },
    {
        urlImage: "src/assets/logos/circle-spring-logo.svg",
        alt: "Logo Spring",
        
    },
    {
        urlImage: "src/assets/logos/circle-python-logo.svg",
        alt: "Logo Python",
    },
    {
        urlImage: "src/assets/logos/circle-react-logo.svg",
        alt: "Logo React",
    },
  
    {
        urlImage: "src/assets/logos/circle-figma-logo.svg",
        alt: "Logo Figma",
    }
  
  ];
  


function LanguagesIcons() {
  return (
    <div className='flex items-center flex-col gap-10'>
        <div className='flex gap-4' >
            {languagesIcon.map((language) => (
                <img
                    className="h-[9vh]"
                    src={language.urlImage}
                    alt={language.alt}
                />
            ))}
        </div>
    </div>
  )
}

export default LanguagesIcons