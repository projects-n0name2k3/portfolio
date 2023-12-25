import React, { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isShowNav, setIsShowNav] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSetTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="fixed w-full z-10">
      <section className="lg:max-w-[1440px] mx-auto flex justify-between items-center bg-white shadow-xl dark:bg-darkBg rounded-b-lg dark:shadow-white/15">
        <header className=" w-full flex items-center justify-between p-4">
          <section>
            <span className="dark:text-white">Developed By n0name2k3</span>
          </section>
          <nav>
            <ul className="hidden md:flex items-center gap-8 font-medium dark:text-white">
              <li
                className={`p-4 ${
                  theme === "dark" ? "nav-item-dark" : "nav-item-light"
                } relative`}
              >
                <a href="#">Home</a>
              </li>
              <li
                className={`p-4 ${
                  theme === "dark" ? "nav-item-dark" : "nav-item-light"
                } relative`}
              >
                <a href="#skill">Skill</a>
              </li>
              <li
                className={`p-4 ${
                  theme === "dark" ? "nav-item-dark" : "nav-item-light"
                } relative`}
              >
                <a href="#project">Project</a>
              </li>
              <li
                className={`p-4 ${
                  theme === "dark" ? "nav-item-dark" : "nav-item-light"
                } relative`}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <ul
              className={`md:hidden absolute top-0 duration-300 divide-y divide-solid py-12 ease-linear ${
                isShowNav ? " right-0" : "right-[-1000px]"
              } w-full flex flex-col items-center bg-white dark:bg-darkBg dark:text-white h-screen`}
            >
              <li className="p-4 w-full mx-auto grid place-items-center">
                <a href="#">Home</a>
              </li>
              <li className="p-4 w-full mx-auto grid place-items-center">
                <a href="#skill">Skill</a>
              </li>
              <li className="p-4 w-full mx-auto grid place-items-center">
                <a href="#project">Project</a>
              </li>
              <li className="p-4 w-full mx-auto grid place-items-center">
                <a href="#contact">Contact</a>
              </li>
              <button
                className="absolute top-2 right-2"
                onClick={() => setIsShowNav(false)}
              >
                <MdClose size={24} />
              </button>
            </ul>
          </nav>
          <section className="flex items-center gap-8 px-4 dark:text-white">
            <button
              onClick={handleSetTheme}
              className="border rounded-lg p-2 grid place-items-center"
            >
              {theme === "light" ? (
                <GoSun size={24} />
              ) : (
                <GoMoon color={"white"} size={24} />
              )}
            </button>

            <button className="md:hidden" onClick={() => setIsShowNav(true)}>
              <AiOutlineMenu size={24} />
            </button>
          </section>
        </header>
      </section>
    </section>
  );
};

export default Navbar;
