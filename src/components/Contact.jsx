import React from "react";
import { CiFacebook } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="max-w-[1440px]  mx-auto flex flex-col items-center justify-center md:justify-around bg-white dark:bg-darkBg p-4 dark:text-white">
      <h1 className="text-center text-4xl w-full p-8 font-bold">Contact Me</h1>

      <section className="flex flex-col md:flex-row items-center gap-8 ">
        <section>
          <button
            className="border rounded-xl p-4 hover:opacity-60"
            onClick={() =>
              window.open("https://www.facebook.com/dont.need.name/", "_blank")
            }
          >
            <CiFacebook size={48} />
          </button>
        </section>

        <section>
          <button
            className="border rounded-xl p-4 hover:opacity-60"
            onClick={() =>
              window.open("https://github.com/projects-n0name2k3", "_blank")
            }
          >
            <IoLogoGithub cebook size={48} />
          </button>
        </section>

        <section className="group relative">
          <button className="border rounded-xl p-4 hover:opacity-60">
            <FaGoogle cebook size={48} />
          </button>
          <span className="block absolute opacity-0 group-hover:opacity-100 duration-300 ease-in-out top-[50%] left-[230px] translate-x-[-50%] translate-y-[-50%] p-4 rounded-lg border">
            ngthuong.work@gmail.com
          </span>
        </section>
      </section>

      <div class="w-full p-4 text-center">
        © 2023 Copyright :{" "}
        <a class="text-whitehite" href="https://tw-elements.com/">
          n0name2k3
        </a>
      </div>
    </footer>
  );
};

export default Contact;
