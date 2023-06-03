import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constanst";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

type projectCardProps = {
  _id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveDemo: string;
  source: string;
  index: number;
};

const ProjectCard = ({
  _id,
  title,
  description,
  image,
  tags,
  liveDemo,
  source,
  index,
}: projectCardProps) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[470px]"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="title"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-x-0 top-12 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(liveDemo, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <h1>{"</>"}</h1>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[var(--skin-color)] font-bold text-[24px]">
              {title}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
          #{tags.join(", ")}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <section className="pt-[55px] relative z-0">
      <motion.div variants={textVariant(1)}>
        <p className={`${styles.sectionSubText} text-center`}>My Portfolio</p>
        <h1 className="section__title nav_link">Recent Works</h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary tex-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 -z-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
