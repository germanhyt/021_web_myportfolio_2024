import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "@/core/hooks/useThemeSwitcher";
import HireMeModal from "@/components/HireMeModal";
import { motion } from "framer-motion";
import Button from "@/components/reusable/Button";
import logo from "@/assets/images/logo.svg";

const AppHeader = () => {
  // HOOKS
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [isScrolled, setIsScrolled] = useState(false);

  // METHODS
  // Para mostrar y ocultar el menú
  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  // Para mostrar y ocultar el modal de contratación
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

  // Para cambiar el color del header cuando se haga scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header className="relative flex flex-col flex-wrap overflow-x-hidden">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="nav"
        className={`w-full fixed top-0 right-0 left-0 backdrop-filter`}
        style={{
          backdropFilter: isScrolled ? "blur(10px)" : "",
          backgroundColor: isScrolled ? "rgba(128, 128, 128, 0.1)" : "",
          zIndex: 10,
        }}
      >
        <div className="sm:mx-auto top-0 right-0 left-0 z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
          {/* Small screen, Logo and Theme switcher and hamburguer meny  */}
          <div className="flex justify-between items-center px-4 sm:px-0">
            {/* Small screen, logo */}
            <div>
              <Link to={`/`}>
                {activeTheme === "dark" ? (
                  <img
                    // src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697234001/006_Portfolio_Freelance/inicio-logo_aw7c8h.png"
                    src={logo}
                    width={"56px"}
                    className="w-14 hover:scale-[1.1] duration-300"
                    alt="Dark Logo"
                  />
                ) : (
                  <img
                    // src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1697234001/006_Portfolio_Freelance/inicio-logo_aw7c8h.png"
                    src={logo}
                    width={"56px"}
                    className="w-14 hover:scale-[1.1] duration-300"
                    alt="Dark Logo"
                  />
                )}
              </Link>
            </div>

            {/* Small screen, Theme switcher  */}
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

            {/* Small screen, hamburger menu */}
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

          {/* Small screen, Header links  */}
          <div
            className={
              showMenu
                ? "z-50 bg-secondary-light dark:bg-primary-dark block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
                : "hidden"
            }
          >
            <a
              href="#projects"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              Proyectos
            </a>
            <a
              href="#techs"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              aria-label="Contact"
            >
              Tecnologías
            </a>
            <a
              href="#aboutme"
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
              aria-label="About Me"
            >
              Sobre Mi
            </a>
            {/* Small screen, button cta */}
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

          {/* Large screen, Header links */}
          <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex pl-0 sm:pl-5 lg:pl-10 xl:pl-32 justify-center items-center shadow-lg sm:shadow-none">
            {/* <Link
              to={`/`}
              className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Home"
            >
              Inicio
            </Link> */}
            <a
              href="#projects"
              className="relative block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Projects"
            >
              <span className="header-links-item" />
              <span className="z-50 relative">Proyectos</span>
            </a>
            <a
              href="#techs"
              className="relative block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="Contact"
            >
              <span className="header-links-item" />
              <span className="z-50 relative">Tecnologías</span>
            </a>
            <a
              href="#aboutme"
              className="relative block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
              aria-label="About Me"
            >
              <span className="header-links-item" />
              <span className="z-50 relative">Sobre Mi</span>
            </a>
          </div>

          {/* Header right section buttons */}
          <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
            {/* Large screen, button cta */}
            <div className="hidden md:flex">
              <span
                onClick={showHireMeModal}
                className="text-md font-general-medium bg-[#0123E7] hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                aria-label="Hire Me Button"
              >
                <Button title="Contáctame" />
              </span>
            </div>

            {/* Large screen,  Theme switcher  */}
            <div
              onClick={() => {
                setTheme(activeTheme);
                // window.location.reload();
              }}
              aria-label="Theme Switcher"
              className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 dark:hover:bg-secondary-dark shadow-sm rounded-xl cursor-pointer"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
              ) : (
                <FiSun className="text-gray-200 hover:text-gray-50 text-xl " />
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
