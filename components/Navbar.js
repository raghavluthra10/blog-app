import React from "react";
import { Moon, Sun } from "react-feather";
import If from "./If";

const themeEnums = {
  1: "dark",
  2: "light",
};

export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(true);

  const checkAndApplyTheme = () => {
    if (localStorage.theme === themeEnums[1]) {
      setDarkMode(true);
      document.documentElement.classList.add(themeEnums[1]);
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove(themeEnums[1]);
    }
  };

  React.useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", themeEnums[1]);
    }
    checkAndApplyTheme();
  }, []);

  const toggleTheme = () => {
    if (localStorage.theme === themeEnums[1]) {
      setDarkMode(false);
      localStorage.theme = themeEnums[2];
      checkAndApplyTheme();
      return;
    }

    if (localStorage.theme === themeEnums[2]) {
      setDarkMode(false);
      localStorage.theme = themeEnums[1];
      checkAndApplyTheme();
      return;
    }
  };

  return (
    <div className="flex p-4 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-gray-50">
      <div className="ml-4">logo</div>
      <div className="grow"></div>
      <div className="mr-4">Explore</div>
      <div className="mr-4">Profile</div>
      <button className="mr-4 " onClick={toggleTheme}>
        <If condition={darkMode}>
          <Moon />
        </If>

        <If condition={!darkMode}>
          <Sun />
        </If>
      </button>
      <button>Login</button>
    </div>
  );
}
