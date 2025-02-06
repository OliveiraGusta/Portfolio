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
        urlImage: "src/assets/logos/circle-javascript-logo.svg",
        alt: "Logo Javascript",

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
        <div className='flex md:gap-5 gap-2' >
            {languagesIcon.map((language) => (
                <img
                    className="md:h-[9vh] h-[7vh] "
                    src={language.urlImage}
                    alt={language.alt}
                />
            ))}
        </div>
    )
}

export default LanguagesIcons