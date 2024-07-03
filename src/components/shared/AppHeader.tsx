import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "@/core/hooks/useThemeSwitcher";
import HireMeModal from "@/components/HireMeModal";

import { motion } from "framer-motion";
import Button from "@/components/reusable/Button";

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  // 'primary-light': '#F7F8FC' to 'rgba(247, 248, 252, 0.5)'
  // 'secondary-light': '#FFFFFF' to 'rgba(255, 255, 255, 0.5)'
  // 'ternary-light': '#f6f7f8' to 'rgba(246, 247, 248, 0.5)'
  // 'primary-dark': '#0D2438' to 'rgba(13, 36, 56, 0.5)'
  // 'secondary-dark': '#102D44' to 'rgba(16, 45, 68, 0.5)'
  // 'ternary-dark': '#1E3851' to 'rgba(30, 56, 81, 0.5)'

  return (
    <header className="relative flex flex-col flex-wrap overflow-x-hidden">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className={`w-full fixed top-0 right-0 left-0 backdrop-filter`}
        style={{
          backgroundColor: isScrolled ? "rgba(128, 128, 128, 0.1)" : "",
          backdropFilter: isScrolled ? "blur(10px)" : "",
          zIndex: 10,
        }}
      >
        <div className="sm:mx-auto top-0 right-0 left-0 z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
          {/* Header menu links and small screen hamburger menu */}
          <div className="flex justify-between items-center px-4 sm:px-0">
            <div>
              <Link to={`${import.meta.env.VITE_HOST_URL}/`}>
                {activeTheme === "dark" ? (
                  <img
                    src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697234001/006_Portfolio_Freelance/inicio-logo_aw7c8h.png"
                    width={"56px"}
                    className="w-14"
                    alt="Dark Logo"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697234001/006_Portfolio_Freelance/inicio-logo_aw7c8h.png"
                    width={"56px"}
                    className="w-14"
                    alt="Dark Logo"
                  />
                )}
              </Link>
            </div>

            {/* Theme switcher small screen */}
            <div
              onClick={() => {
                // setTheme(activeTheme ?? "")
                setTheme(activeTheme);
                // window.location.reload();
              }}
              aria-label="Theme Switcher"
              className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>

            {/* Small screen hamburger menu */}
            <div className="sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="focus:outline-none"
                aria-label="Hamburger Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                >
                  {showMenu ? (
                    <FiX className="text-3xl" />
                  ) : (
                    <FiMenu className="text-3xl" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Header links small screen */}
          <div
            className={
              showMenu
                ? "z-50 bg-secondary-light dark:bg-primary-dark block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
                : "hidden"
            }
          >
            <Link
              to={`${import.meta.env.VITE_HOST_URL}/projects`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              Proyectos
            </Link>
            <Link
              to={`${import.meta.env.VITE_HOST_URL}/about`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              aria-label="About Me"
            >
              Acerca de mi
            </Link>
            <Link
              to={`${import.meta.env.VITE_HOST_URL}/contact`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              aria-label="Contact"
            >
              Contáctame
            </Link>
            <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
              <span
                onClick={showHireMeModal}
                className="font-general-medium sm:hidden w-fit block text-left text-md bg-[#0123E7] hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 "
                aria-label="Hire Me Button"
              >
                <Button title="Contáctame" />
              </span>
            </div>
          </div>

          {/* Header links large screen */}
          <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
            <Link
              to={`${import.meta.env.VITE_HOST_URL}/`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Home"
            >
              Inicio
            </Link>
            <Link
              to={`${import.meta.env.VITE_HOST_URL}/projects`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              Proyectos
            </Link>
            <Link
              to={`${import.meta.env.VITE_HOST_URL}/about`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="About Me"
            >
              Acerca de mi
            </Link>
            <Link
              to={`${import.meta.env.VITE_HOST_URL}/contact`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Contact"
            >
              Contacto
            </Link>
          </div>

          {/* Header right section buttons */}
          <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
            <div className="hidden md:flex">
              <span
                onClick={showHireMeModal}
                className="text-md font-general-medium bg-[#0123E7] hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                aria-label="Hire Me Button"
              >
                <Button title="Contáctame" />
              </span>
            </div>

            {/* Theme switcher large screen */}
            <div
              onClick={() => {
                setTheme(activeTheme);
                // window.location.reload();
              }}
              aria-label="Theme Switcher"
              className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hire me modal */}
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal && (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        )}
      </div>
    </header>
  );
};

export default AppHeader;
