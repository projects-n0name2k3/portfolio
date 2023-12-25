import React from "react";

const SkillCard = ({ name, svg }) => {
  return (
    <section className="border rounded-lg p-8 shadow-lg dark:shadow-white/15 hover:scale-105 duration-300 ease-in-out min-w-[250px] grid place-items-center">
      {svg}
      <h3 className="text-3xl text-center font-medium">{name}</h3>
    </section>
  );
};

export default SkillCard;
