import React from "react";
import Typed from "react-typed";
import heroImg from "../assets/heroImg.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-[1440px] h-screen mx-auto flex items-center justify-center md:justify-around pt-[150px] bg-white dark:bg-darkBg "
    >
      <section className="flex flex-col md:flex-row items-center gap-4 dark:text-white">
        <section>
          <h1 className="font-extrabold text-transparent md:text-5xl text-4xl text-center bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Welcome to my Portfolio
          </h1>
          <h1 className="text-4xl md:hidden text-center md:text-left">Hi!</h1>
          <h1 className="text-2xl md:hidden text-center md:text-left">
            I'm Nguyen Tri Hoai Thuong
          </h1>
          <h1 className="text-4xl hidden md:block py-4 text-center md:text-left">
            Hi! I'm Nguyen Tri Hoai Thuong
          </h1>
          <h3 className="text-2xl text-center md:text-left">
            I'm a{" "}
            <Typed
              strings={["Developer", "Designer"]}
              typeSpeed={40}
              backSpeed={50}
              style={{ color: "red" }}
              loop
            >
              <input
                type="text"
                className="w-[130px] select-none outline-none font-extrabold text-transparent text-2xl text-center bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                readOnly
              />
            </Typed>
            .
          </h3>
        </section>
        <section>
          <img src={heroImg} alt="" className="md:w-[600px]" />
        </section>
      </section>
    </section>
  );
};

export default Hero;
