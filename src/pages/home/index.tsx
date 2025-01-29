import React from "react";

import VideoHome from "../../organisms/videoHome";
import Subject from "../../organisms/subjectLanguagesIcons";
import ProjectsAboutMe from "../../organisms/projectsAboutMe";
import Depoiments from "../../organisms/depoiments";
import Footer from "../../organisms/footer";

function Home() {
  return (
    <>
      <VideoHome />
      <Subject />
      <ProjectsAboutMe />
      <Depoiments />
      <Footer />
    </>
  );
}

export default Home;
