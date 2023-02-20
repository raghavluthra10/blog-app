import { useRouter } from "next/router";
import React from "react";
import { Moon, Sun } from "react-feather";
import If from "./If";
import { signIn, signOut, getSession, useSession } from "next-auth/react";

const themeEnums = {
  1: "dark",
  2: "light",
};

export default function Navbar() {
  const [darkMode, setDarkMode] = React.useState(true);

  const router = useRouter();

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
    // check if user is logged in and on the basis of that render the login/logout button
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
    <div className="flex p-4 dark:bg-indigo-900 bg-sky-200  dark:text-indigo-200 backdrop-blur-sm border-b border-zinc-900 sticky top-0  ">
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
      <button className="mr-4" onClick={() => router.push("/login")}>
        Login
      </button>
    </div>
  );
}
