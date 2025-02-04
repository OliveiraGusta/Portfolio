import React from "react";

import VideoHome from "../../organisms/videoHome.tsx";
import Services from "../../organisms/services.tsx";
import ProjectsAboutMe from "../../organisms/projectsAboutMe.tsx";
import Depoiments from "../../organisms/depoiments.tsx";
import Footer from "../../organisms/footer.tsx";

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
