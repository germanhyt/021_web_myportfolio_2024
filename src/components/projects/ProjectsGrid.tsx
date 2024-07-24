import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

interface IProps {
  page: any;
}

const ProjectsGrid = ({ page }: IProps) => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const [projectsquantity, setProjectProjectsquantity] = useState<number>(6);

  const handleAddProjects = () => {
    setProjectProjectsquantity(projectsquantity + 6);
  };

  return (
    <section
      id="projects"
      className="container mx-auto pt-8 sm:pt-16 mt-5 sm:mt-12"
    >
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-3xl  text-ternary-dark dark:text-ternary-light">
          Proyectos realizados
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        
                        "
        >
          Buscar proyectos por título o fltrar por categoría
        </h3>
        <div
          className="
            mt-12
            flex
            flex-col
            sm:flex-row						
            justify-between
            border-b border-primary-light
            dark:border-secondary-dark
            pb-3
            gap-3
          "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                                border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
								w-full
								sm:w-fit
                                "
              id="name"
              name="name"
              type="search"
              placeholder="Buscar Proyectos"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                numberproject={project.id}
                key={project.id}
              />
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                numberproject={project.id}
                key={project.id}
              />
            ))
          : page === "home"
          ? projects
              .filter((_p, index) => index < projectsquantity)
              .map((project) => (
                <ProjectSingle
                  title={project.title}
                  category={project.category}
                  image={project.img}
                  numberproject={project.id}
                  key={project.id}
                />
              ))
          : projects.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                numberproject={project.id}
                key={project.id}
              />
            ))}
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <button
          className="font-general-medium flex items-center px-4 py-2 rounded-lg shadow-lg hover:shadow-xl bg-[#0123E7] hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          onClick={handleAddProjects}
        >
          Más Proyectos
        </button>
      </div>
    </section>
  );
};

export default ProjectsGrid;
