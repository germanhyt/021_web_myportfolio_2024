import { useState, createContext } from "react";
import { projectsData } from "@/core/data/projects";

// Create projects context
export const ProjectsContext = createContext<{
  projects: {
    id: number;
    title: string;
    category: string;
    img: string;
    ProjectHeader: {
      title: string;
      publishDate: string;
      tags: string;
      link: string;
    };
    ProjectImages: { id: number; title: string; img: string }[];
    ProjectInfo: any;
  }[];
  setProjects: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        category: string;
        img: string;
        ProjectHeader: {
          title: string;
          publishDate: string;
          tags: string;
          link: string;
        };
        ProjectImages: { id: number; title: string; img: string }[];
        ProjectInfo: any;
      }[]
    >
  >;
  searchProject: string;
  setSearchProject: React.Dispatch<React.SetStateAction<string>>;
  searchProjectsByTitle: {
    id: number;
    title: string;
    category: string;
    img: string;
    ProjectHeader: {
      title: string;
      publishDate: string;
      tags: string;
      link: string;
    };
    ProjectImages: { id: number; title: string; img: string }[];
    ProjectInfo: any;
  }[];
  selectProject: string | null;
  setSelectProject: React.Dispatch<React.SetStateAction<string | null>>;
  selectProjectsByCategory: {
    id: number;
    title: string;
    category: string;
    img: string;
    ProjectHeader: {
      title: string;
      publishDate: string;
      tags: string;
      link: string;
    };
    ProjectImages: { id: number; title: string; img: string }[];
    ProjectInfo: any;
  }[];
  idProject: number | undefined;
}>({
  projects: [],
  setProjects: () => {},
  searchProject: "",
  setSearchProject: () => {},
  searchProjectsByTitle: [],
  selectProject: null,
  setSelectProject: () => {},
  selectProjectsByCategory: [],
  idProject: undefined,
});

interface IProps {
  children: React.ReactNode;
  idProject?: number;
}

// Create the projects context provider
export const ProjectsProvider = (props: IProps) => {
  const [projects, setProjects] = useState(projectsData);
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState<string | null>(null); //"Null" representa la ausencia de valor o la falta de selección. En contraste, si se usa '' como valor predeterminado, podría resultar ambiguo, ya que una cadena vacía se interpreta como una categoría válida y podría ser confuso distinguir entre la selección de "Categoría proyecto" y la selección de una categoría vacía. Usar null es una práctica más clara y legible

  const { idProject } = props;

  // Search projects by project title
  const searchProjectsByTitle = projects.filter((item) => {
    const result = item.title
      .toLowerCase()
      .includes(searchProject.toLowerCase())
      ? item
      : searchProject === ""
      ? item
      : "";
    return result;
  });

  // Select projects by project category
  const selectProjectsByCategory = projects.filter((item) => {
    const category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject ?? "");
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
        idProject,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
