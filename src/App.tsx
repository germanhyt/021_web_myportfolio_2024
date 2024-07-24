import AppHeader from "@/components/shared/AppHeader";
import { AnimatePresence } from "framer-motion";
import ButtonWhatsapp from "@/components/reusable/ButtonWhatsapp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "@/assets/css/App.css";
import "@/assets/css/Customstyles.css";
import { lazy, Suspense } from "react";
import AppFooter from "./components/shared/AppFooter";

import { projectsData } from "./core/data/projects";

const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle"));

function App() {
  return (
    <>
      <AnimatePresence>
        <div className="m-0 p-0 border-none box-border transition duration-300 bg-secondary-light dark:bg-primary-dark">
          <ButtonWhatsapp />

          <Router>
            <AppHeader />
            <ScrollToTop />
            <Suspense
              fallback={<span className="text-center">cargando...</span>}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                {projectsData.map((project) => (
                  <Route
                    key={project.id}
                    path={`/projects/${project.id}`}
                    element={<ProjectSingle number={project.id} />}
                  />
                ))}
              </Routes>
            </Suspense>
            <AppFooter />
          </Router>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
