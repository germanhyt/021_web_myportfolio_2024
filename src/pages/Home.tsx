import { Link } from "react-router-dom";
import AppBanner from "../components/shared/AppBanner";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "@/core/hooks/context/ProjectsContext";
import Button from "../components/reusable/Button";
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

            <div className="mt-8 sm:mt-10 flex justify-center ">
              <Link
                to="/projects"
                className=" font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-[#0123E7] hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                aria-label="More Projects"
              >
                <Button title="Más Proyectos" />
              </Link>
            </div>

            <SectionAboutMe />

            <SectionTechs />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
