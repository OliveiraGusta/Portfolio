import React from "react";
import NavBar from "../../components/navBar";
import NameHome from "../../components/nameHome";
import PhotoHome from "../../components/photoHome";

function Home() {
  return (
    <div className="mr-8 ml-8"> 
      <NavBar />
      <div className="flex justify-around items-center h-screen ml-5 mr-5">
        <NameHome />
        <PhotoHome />
      </div>



    </div>
  )
}

export default Home