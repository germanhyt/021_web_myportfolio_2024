import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";

const ProjectGallery = () => {
  const { projects, idProject } = useContext(ProjectsContext);

  return projects
    .filter((project) => project.id === idProject)
    .map((p) => (
      <div
        key={p.id}
        className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"
      >
        {p.ProjectImages.map((pp) => {
          return (
            <div key={pp.id} className="mb-10 sm:mb-0">
              <span>{pp.title}</span>
              <img
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                src={pp.img}
                alt={pp.title}
                key={pp.id}
              />
            </div>
          );
        })}
      </div>
    ));
};

export default ProjectGallery;
