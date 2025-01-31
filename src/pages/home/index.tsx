import React from "react";

import VideoHome from "../../organisms/videoHome";
import Services from "../../organisms/services";
import ProjectsAboutMe from "../../organisms/projectsAboutMe";
import Depoiments from "../../organisms/depoiments";
import Footer from "../../organisms/footer";

function Home() {
  return (
    <>
      <VideoHome />
      <Services />
      <ProjectsAboutMe />
      <Depoiments />
      <Footer />
    </>
  );
}

export default Home;
