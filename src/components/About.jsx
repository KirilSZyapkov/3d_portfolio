import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constanst";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionSubText}`}>Overview</h2>
      </motion.div>
    </>
  );
};

export default About;

{
  /* Welcome to{" "}
    <span className="text-[var(--skin-color)]">WebSolutions</span>!  */
}
// I            specialize in creating exceptional web solutions using JS, React,
// Next.js, Stripe, MongoDB, Sanity, and Express.{" "}
{
  /* <span className="hidden lg:inline">
      My services include developing front-end and back-end web
      applications. I build personal sites, e-commerce platforms, and
      business sites with admin dashboards. With my expertise, I deliver
      visually captivating and functional websites. I utilize React and
      Next.js for dynamic and responsive applications, integrate Stripe
      for secure transactions, employ MongoDB for data management, and
      utilize Sanity as a powerful CMS. Contact me to discuss your
      project and let bring your vision to life.
    </span> */
}
