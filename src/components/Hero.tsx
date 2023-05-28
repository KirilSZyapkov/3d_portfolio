
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
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
          <p
            className={`${styles.heroSubText} mt-w text-[var(--text-color)] md:text-[20px]`}
          >
            I specialize in creating exceptional web solutions using JS, React,
            Next.js, Stripe, MongoDB, Sanity, and Express.{" "}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center item-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[--skin-color] flex justify-center item-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[var(--skin-color)] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
