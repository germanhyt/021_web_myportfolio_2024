import SectionAboutMe from "@/components/reusable/SectionAboutMe";
import SectionTechs from "@/components/reusable/SectionTechs";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
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
        <motion.div
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-28 py-1 bg-primary-light dark:bg-secondary-dark min-h-[100vh]"
        >
          <SectionAboutMe />
          <SectionTechs />
        </motion.div>
      )}
    </>
  );
};

export default About;
