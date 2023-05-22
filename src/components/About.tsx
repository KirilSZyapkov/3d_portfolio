import React, { ReactNode } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constanst";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

type serviceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: serviceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-red-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold tex-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[var(--text-color)] text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to{" "}
        <span className="text-[var(--skin-color)]">WebSolutions</span>! My
        services include developing front-end and back-end web applications. I
        build personal sites, e-commerce platforms, and business sites with
        admin dashboards. With my expertise, I deliver visually captivating and
        functional websites. I utilize React and Next.js for dynamic and
        responsive applications, integrate Stripe for secure transactions,
        employ MongoDB for data management, and utilize Sanity as a powerful
        CMS. Contact me to discuss your project and let bring your vision to
        life.
      </motion.p>
      <div className="mt-20 flex flex-wrat gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
