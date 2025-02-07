import React from "react";
import ContactList from "../atoms/contactList";

function PhotoHome() {
  return (
    <div className="flex-none w-1/5 relative xl:block hidden">
      <div className="relative w-fit p-[7px] rounded-full before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-700 before:via-pink-500 before:to-blue-700 before:bg-[length:300%_300%] before:animate-gradientMove">
        
        <img className="relative z-10 rounded-full" src="/assets/images/me.png" />
      </div>

      <div className="flex flex-col items-center m-4">
        <h2 className="font-bold pr-3 pb-2 pl-3 mt-5 text-lg text-3xl border-b-[1px] border-b-[#ffff]">
          ENTRE EM CONTATO
        </h2>
        <ContactList  />
      </div>
    </div>
  );
}

export default PhotoHome;
