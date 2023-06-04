import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constanst";

type technologieType = {
  name: string;
  icon: string;
};

const Skills = () => {
  return (
    <>
      <h1 className="section__title">Experience</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technologie: technologieType) => (
          <div className="w-28 h-28" key={technologie.name}>
            <BallCanvas icon={technologie.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
