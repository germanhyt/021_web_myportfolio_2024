import { ProjectsContext } from "@/core/hooks/context/ProjectsContext";
import { useContext } from "react";

const ProjectInfo = () => {
  const { projects, idProject } = useContext(ProjectsContext);

  return projects
    .filter((project) => project.id === idProject)
    .map((p) => (
      <div key={p.id} className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              {p.ProjectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
              {p.ProjectInfo.CompanyInfo.map((info: any) => {
                return (
                  <li
                    key={info.id}
                    className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  >
                    <span>{info.title}: </span>
                    <a
                      href="https://portfolio-web-ghyt.netlify.app/"
                      className={
                        info.title === "Website" || info.title === "Phone"
                          ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          : ""
                      }
                      aria-label="Project Website and Phone"
                    >
                      {info.details}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {p.ProjectInfo.ObjectivesHeading}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {p.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {p.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {p.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {p.ProjectInfo.SocialSharingHeading}
            </p>
            <div className="flex items-center gap-3 mt-5">
              {p.ProjectInfo.SocialSharing.map((social: any) => {
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="__blank"
                    aria-label="Share Project"
                    className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                  >
                    <span className="text-lg lg:text-2xl">{social.icon}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/*  Single project right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {p.ProjectInfo.ProjectDetailsHeading}
          </p>
          {p.ProjectInfo.ProjectDetails.map((details: any) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          })}
        </div>
      </div>
    ));
};

export default ProjectInfo;
