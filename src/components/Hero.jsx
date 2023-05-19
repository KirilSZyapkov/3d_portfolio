import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full dot_color" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi I'm <span className="text-[var(--skin-color)]">Kiril</span>
          </h1>
          <p className={`${styles.heroSubText} mt-w text-[var(--text-color)]`}>
            Welcome to{" "}
            <span className="text-[var(--skin-color)]">WebSolutions</span>! I
            specialize in creating exceptional web solutions using JS, React,
            Next.js, Stripe, MongoDB, Sanity, and Express. My services include
            developing front-end and back-end web applications. I build personal
            sites, e-commerce platforms, and business sites with admin
            dashboards. With my expertise, I deliver visually captivating and
            functional websites. I utilize React and Next.js for dynamic and
            responsive applications, integrate Stripe for secure transactions,
            employ MongoDB for data management, and utilize Sanity as a powerful
            CMS. Contact me to discuss your project and let bring your vision to
            life.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </div>
  );
};

export default Hero;
