import React from "react";

import TodoImg from "../assets/todo.jpg";
import FoodImg from "../assets/food.jpg";
import TravelImg from "../assets/travel.jpg";
import BinanceImg from "../assets/binance.jpg";
import NetflixImg from "../assets/netflix.jpg";
import cloneTW1Img from "../assets/cloneTW1.jpg";
import cloneTW2Img from "../assets/cloneTW2.jpg";

import ProjectCard from "./ProjectCard";

const Project = () => {
  const data = [
    {
      src: TodoImg,
      name: "Todo App",
      link: "https://github.com/projects-n0name2k3/todo",
    },
    {
      src: FoodImg,
      name: "Food App",
      link: "https://github.com/projects-n0name2k3/food-app",
    },
    {
      src: TravelImg,
      name: "Travel App",
      link: "https://github.com/projects-n0name2k3/travel-app",
    },
    {
      src: BinanceImg,
      name: "Binance App",
      link: "https://github.com/projects-n0name2k3/binance-app",
    },
    {
      src: NetflixImg,
      name: "Netflix Clone",
      link: "https://netflix-clone-f2d73.web.app",
    },
    {
      src: cloneTW1Img,
      name: "Learn Tailwind",
      link: "https://github.com/projects-n0name2k3/tailwind-clone-1",
    },
    {
      src: cloneTW2Img,
      name: "Learn Tailwind",
      link: "https://github.com/projects-n0name2k3/tailwind-clone-2",
    },
  ];

  return (
    <section
      id="project"
      className="max-w-[1440px] mx-auto flex items-center flex-col dark:text-white pt-8 pb-16"
    >
      <h1 className="text-center text-4xl w-full p-8 font-bold">My Projects</h1>
      <section className="flex flex-col items-center gap-12 p-4">
        {data.map((item, index) => (
          <ProjectCard
            key={index}
            src={item.src}
            name={item.name}
            link={item.link}
          />
        ))}
      </section>
    </section>
  );
};

export default Project;
