import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import { useEffect, useState } from "react";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
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
        <div className="pt-20 mt-28 bg-primary-light dark:bg-secondary-dark min-h-[100vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.1,
            }}
            className="container mx-auto flex flex-col-reverse lg:flex-row  "
          >
            <ContactForm />
            <ContactDetails />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Contact;
