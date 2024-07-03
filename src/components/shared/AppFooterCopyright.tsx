function AppFooterCopyright() {
  return (
    <div className="py-10 font-general-regular flex justify-center items-center text-center bg-secondary-light dark:bg-primary-dark">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <span className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
          React & Tailwind CSS Project by ShermanSystems
        </span>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
