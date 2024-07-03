import { useEffect, useState } from "react";

const useThemeSwitcher = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const initialTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState<any>(initialTheme);
  const activeTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    //console.log(root);
    root.classList.remove(activeTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);

    // window.location.reload();
  }, [activeTheme, theme]);

  return [activeTheme, setTheme];
};

export default useThemeSwitcher;
