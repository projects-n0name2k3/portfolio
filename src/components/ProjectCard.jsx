import React from "react";

const ProjectCard = ({ src, name, link }) => {
  return (
    <section>
      <section className="flex flex-col md:flex-row items-center gap-8 border rounded-lg p-4 hover:scale-105 duration-300 ease-in-out ">
        <img
          src={src}
          alt=""
          className="w-[80%] h-[80%] md:w-[40%] md:h-[40%]"
        />
        <section className="flex items-start gap-8 flex-col">
          <h3 className="md:text-2xl text-xl text-center font-medium">
            Project's name : {name}
          </h3>
          <button
            className="border rounded-lg px-4 py-2 font-medium"
            onClick={() => window.open(link, "_blank")}
          >
            Go to Github
          </button>
        </section>
      </section>
    </section>
  );
};

export default ProjectCard;
