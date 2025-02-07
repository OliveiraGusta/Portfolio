import React from "react";

import Navbar from "../molecules/navBar";
import PhotoHome from "../molecules/photoHome";
import NameHome from "../molecules/nameHome";

function VideoHome() {
  return (
    <div id="home" className="relative pr-10 pl-10">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/videos/Background.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <Navbar />
      <div className="flex justify-around items-center h-[85vh] relative z-10">
        <NameHome />
        <PhotoHome />
      </div>
    </div>
  );
}

export default VideoHome;
