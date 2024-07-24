import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { techData } from "@/core/data/techs";

function SectionTechs() {
  const [showImages, setShowImages] = useState(true);
  const [showImages2, setShowImages2] = useState(false);
  const [showImages3, setShowImages3] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
  };
  const toggleImages2 = () => {
    setShowImages2(!showImages2);
  };
  const toggleImages3 = () => {
    setShowImages3(!showImages3);
  };

  return (
    <section id="techs" className="container mx-auto">
      <div className="px-10 pt-12 pb-20 mt-24 sm:mt-32 dark:bg-primary-dark shadow-md rounded-lg">
        <div className="w-full flex justify-center items-center py-4 sm:py-8">
          <h3 className="font-semibold text-base sm:text-xl dark:text-primary-light">
            Tecnologías que uso
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-8">
          <div className="">
            <div
              onClick={toggleImages}
              className="relative w-fit flex gap-4 text-primary-light group cursor-pointer"
            >
              <p className="font-semibold text-black dark:text-primary-light ">
                {techData[0].name}
                <span className="absolute inset-x-2 bottom-0 h-1 bg-blue-500 transform -translate-x-fit group-hover:translate-x-5 transition-transform duration-300"></span>
              </p>
              <i className="text-2xl text-gray-500 dark:text-gray-400">
                {showImages ? <BiChevronUp /> : <BiChevronDown />}
              </i>
            </div>
            {showImages && (
              <div className="w-full px-4 py-6 flex flex-wrap gap-8 transition-transform duration-300 ease-in-out">
                {techData[0].images.map((item) => (
                  <div key={item.id}>
                    <img className="w-30 h-20" src={item.link} alt="img" />
                    <h3 className="text-center text-black dark:text-white">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="">
            <div
              onClick={toggleImages2}
              className="relative w-fit flex gap-8 text-primary-light  group cursor-pointer"
            >
              <p className="font-semibold text-black dark:text-white ">
                {techData[1].name}
                <span className="absolute inset-x-2 bottom-0 h-1 bg-blue-500 transform -translate-x-fit group-hover:translate-x-5 transition-transform duration-300"></span>
              </p>
              <i className="text-2xl text-gray-500 dark:text-gray-400">
                {showImages2 ? <BiChevronUp /> : <BiChevronDown />}
              </i>
            </div>
            {showImages2 && (
              <div className="w-full px-4 py-6 flex flex-wrap gap-8 transition-transform duration-300 ease-in-out">
                {techData[1].images.map((item) => (
                  <div>
                    <img className="w-30 h-20" src={item.link} alt="img" />
                    <h3 className="text-center text-black dark:text-white">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="">
            <div
              onClick={toggleImages3}
              className="relative w-fit flex gap-8 text-primary-light  group cursor-pointer"
            >
              <p className="font-semibold text-black dark:text-white ">
                {techData[2].name}
                <span className="absolute inset-x-2 bottom-0 h-1 bg-blue-500 transform -translate-x-fit group-hover:translate-x-5 transition-transform duration-300"></span>
              </p>
              <i className="text-2xl text-gray-500 dark:text-gray-400">
                {showImages2 ? <BiChevronUp /> : <BiChevronDown />}
              </i>
            </div>
            {showImages3 && (
              <div className="w-full px-4 py-6 flex flex-wrap gap-8 transition-transform duration-300 ease-in-out">
                {techData[2].images.map((item) => (
                  <div>
                    <img className="w-30 h-20" src={item.link} alt="img" />
                    <h3 className="text-center text-black dark:text-white">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTechs;
