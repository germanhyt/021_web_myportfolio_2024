import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  category: string;
  image: string;
  numberproject: number;
}

const ProjectSingle = ({ title, category, image, numberproject }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        to={`/projects/single-project/${numberproject}`}
        aria-label="Single Project"
      >
        <div className="rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.1] transition-all duration-500 cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none w-full object-cover"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="break-all font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="break-all  text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
