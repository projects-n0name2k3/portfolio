import React from "react";

import SkillCard from "./SkillCard";
import Html144 from "./Logo/html144";
import CssIcon from "./Logo/CssIcon";
import JsIcon from "./Logo/JsIcon";
import ReactIcon from "./Logo/ReactIcon";
import TailwindIcon from "./Logo/TailwindIcon";

const Skill = () => {
  const data = [
    {
      svg: <Html144 />,
      name: "HTML",
    },
    {
      svg: <CssIcon />,
      name: "CSS",
    },
    {
      svg: <JsIcon />,
      name: "Javascript",
    },
    {
      svg: <ReactIcon />,
      name: "ReactJS",
    },
    {
      svg: <TailwindIcon />,
      name: "TaiwindCSS",
    },
  ];
  return (
    <section
      id="skill"
      className="max-w-[1440px] mx-auto flex items-center flex-col dark:text-white pt-8 pb-16"
    >
      <h1 className="text-center text-4xl w-full p-8 font-bold">My Skills</h1>
      <section className="flex flex-col md:flex-row items-center gap-12">
        {data.map((item, index) => (
          <SkillCard key={index} svg={item.svg} name={item.name} />
        ))}
      </section>
    </section>
  );
};

export default Skill;
