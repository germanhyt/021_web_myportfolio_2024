import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "@/core/hooks/context/ProjectsContext";
import SectionAboutMe from "../components/reusable/SectionAboutMe";
import SectionTechs from "../components/reusable/SectionTechs";
import { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {!show ? (
        <section className="w-screen h-screen flex items-center justify-center">
          <div className="loader">
            {/* <span className="text-white">Loading...</span> */}
          </div>
        </section>
      ) : (
        <div className="relative ">
          <AppBanner />

          <div className="w-full bg-primary-light dark:bg-secondary-dark ">
            <ProjectsProvider>
              <ProjectsGrid page="home" />
            </ProjectsProvider>

            <SectionAboutMe />

            <SectionTechs />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
