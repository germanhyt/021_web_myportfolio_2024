import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "@/components/reusable/Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { swalAlertInfo } from "@/core/helpers/SwalHelper";

// const selectOptions = [
//   "Web",
//   "Data Analytics",
//   "Mobile",
//   "IOT",
//   "Certification",
// ];

interface IProps {
  onClose: () => void;
  onRequest: () => void;
}

const HireMeModal = ({ onClose }: IProps) => {
  const form = useRef<HTMLFormElement>(null!);

  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    emailjs
      .sendForm(
        "service_988p1xn",
        "template_twd2ypu",
        form?.current as HTMLFormElement,
        "5il5XPnUwwcjNxkaM"
      )
      .then(
        () => {
          (e.target as HTMLFormElement)?.reset(); //reset inputs of form

          void swalAlertInfo(
            "Mensaje Enviado",
            "Gracias por tu mensaje, te responderé lo más pronto posible."
          );

          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Modal Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h3 className="pl-5 text-primary-dark dark:text-primary-light text-xl">
                ¿Alguna consulta o feedback?
              </h3>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-xl m-4 text-left"
              >
                <div className="">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="name"
                    name="user_name"
                    type="text"
                    required={true}
                    placeholder="Nombre"
                    aria-label="Name"
                  />
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="email"
                    name="user_email"
                    type="text"
                    required={true}
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                {/* <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="subject"
                    name="subject"
                    aria-label="Project Category"
                  >
                    {selectOptions.map((option) => (
                      <option className="text-normal sm:text-md" key={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div> */}

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="message"
                    name="message"
                    cols={14}
                    required={true}
                    rows={6}
                    aria-label="Details"
                    placeholder="Escribe aqui..."
                    style={{ resize: "none" }}
                  ></textarea>
                </div>

                <div
                  className="
									font-general-medium w-40 px-4 
									py-2.5 text-white text-center 
									font-medium tracking-wider 
									bg-[#0123E7] hover:bg-indigo-600 
									focus:ring-1 focus:ring-indigo-900 
									rounded-lg mt-6 duration-500"
                >
                  {isSending ? (
                    <span className="text-white text-center font-medium tracking-wider">
                      Enviando...
                    </span>
                  ) : (
                    <Button
                      title="Enviar"
                      type="submit"
                      aria-label="Send Message"
                    />
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <button
                onClick={onClose}
                type="button"
                className="
                  px-4
                  sm:px-6
                  py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-ternary-dark dark:hover:text-primary-light
                  rounded-md
                  focus:ring-1 focus:ring-indigo-900 duration-500
                "
                aria-label="Cerrar Modal"
              >
                <Button title="Cerrar" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
