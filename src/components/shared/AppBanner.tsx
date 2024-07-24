import { useEffect, useRef, useState } from "react";
import useThemeSwitcher from "@/core/hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import { sociallinks } from "@/core/data/sociallinks";
import Typed from "typed.js";

const AppBanner = () => {
  const developerLight =
    "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697233575/006_Portfolio_Freelance/developer_rboiiq.svg";
  const developerDark =
    "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697233575/006_Portfolio_Freelance/developer-dark_pxjdqw.svg";

  // Hooks
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [themeCurrent, setThemeCurrent] = useState("dark");
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Methods
  setInterval(() => {
    setTheme(localStorage.getItem("theme") || "");
    setThemeCurrent(localStorage.getItem("theme") || "");
  }, 500);

  useEffect(() => {
    if (imageRef.current) {
      if (themeCurrent === "dark") {
        imageRef.current.src = developerDark;
      } else {
        imageRef.current.src = developerLight;
      }
    }
  }, [themeCurrent]);

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hola, Soy Germán Huaytalla",
        "Egresado de Ingeniería de Sistemas",
        "Enfocado en las ramas de...",
        "Desarrollo Web",
        "Análisis de Datos",
        "Cloud Computing",
      ],
      typeSpeed: 90,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [activeTheme]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="container mx-auto  flex flex-col sm:justify-between items-center sm:flex-row  mt-28 md:mt-24"
    >
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light "
        >
          <span ref={el} />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 mb-4 text-lg md:text-sm lg:text-md xl:text-xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        >
          Te presento mi portfolio personal...
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="font-general-regular flex flex-col justify-center items-center sm:block mt-2 mb-2"
        >
          <ul className="flex flex-wrap gap-2 sm:gap-4 ">
            {sociallinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                // className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                className="hover:scale-[0.9] text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 rounded-lg duration-300"
              >
                <i className="text-sm sm:text-lg md:text-xl ">{link.icon}</i>
              </a>
            ))}
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        {/* <img
          src={
            activeTheme === "dark"
              ? "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697233575/006_Portfolio_Freelance/developer_rboiiq.svg"
              : "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697233575/006_Portfolio_Freelance/developer-dark_pxjdqw.svg"
          }
          alt="Developer"
        /> */}

        <img ref={imageRef} alt="Developer" />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
