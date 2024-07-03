import AppFooterCopyright from "./AppFooterCopyright";
import { sociallinks } from "@/core/data/sociallinks";

const AppFooter = () => {
  return (
    <section className="bg-primary-light dark:bg-secondary-dark">
      <div className="container mx-auto ">
        <div className="pt-40 sm:pt-30  order-t-2  border-primary-light dark:border-secondary-dark">
          {/* Footer social links */}
          <div className="font-general-regular flex flex-col justify-center items-center pb-12 sm:pb-28">
            <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
              Mis redes sociales
            </p>
            <ul className="flex flex-wrap gap-4 sm:gap-8">
              {sociallinks.map((link) => (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="hover:scale-[0.9] text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AppFooterCopyright />
    </section>
  );
};

export default AppFooter;
