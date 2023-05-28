import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constanst";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

type serviceCardProps = {
  index: number;
  title: string;
  icon: string;
  setToggleWeb: (t: boolean) => void;
  toggleWeb: boolean;
  setToggleBack: (t: boolean) => void;
  toggleBack: boolean;
};

const ServiceCard = ({
  index,
  title,
  icon,
  setToggleWeb,
  toggleWeb,
  setToggleBack,
  toggleBack,
}: serviceCardProps) => {
  const handleToggleWeb = (title: string) => {
    if (title === "Web Developer") {
      setToggleWeb(!toggleWeb);
    } else if (title === "Backend Developer") {
      setToggleBack(!toggleBack);
    }
  };

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
          <div
            className="text-[var(--skin-color)] cursor-pointer"
            onClick={() => handleToggleWeb(title)}
          >
            View more
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [toggleWeb, setToggleWeb] = useState(false);
  const [toggleBack, setToggleBack] = useState(false);

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
      <div className="mt-20 flex flex-wrap justify-evenly gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            toggleBack={toggleBack}
            toggleWeb={toggleWeb}
            setToggleBack={setToggleBack}
            setToggleWeb={setToggleWeb}
          />
        ))}
      </div>
      {toggleWeb && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
          className="fixed top-0 w-full h-full left-0 bottom-0 right-0 flex justify-center items-center"
        >
          <div
            style={{ backgroundColor: "var(--box-color" }}
            className="w-[500px] relative px-10 pb-10 p-16"
          >
            <i
              style={{ color: "var(--skin-color)" }}
              className="uil uil-times absolute top-6 right-6 text-2xl cursor-pointer"
              onClick={() => setToggleWeb(!toggleWeb)}
            ></i>

            <h3 className="text-center text-2xl mb-[5px]">Web App</h3>
            <p className="text-center text-xl px-0 py-4 mb-3">
              Providing quality work to clients and companies. I create Internet
              sites and web applications based on Internet technologies such as
              React, Next JS, JavaScript,
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <i
                  style={{ color: "var(--skin-color)", fontSize: "20px" }}
                  className="uil uil-check-circle"
                ></i>
                <p className="services__modal-info">
                  Development of dynamic web pages
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i
                  style={{ color: "var(--skin-color)", fontSize: "20px" }}
                  className="uil uil-check-circle"
                ></i>
                <p className="services__modal-info">
                  Creation and maintenance of web pages
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i
                  style={{ color: "var(--skin-color)", fontSize: "20px" }}
                  className="uil uil-check-circle"
                ></i>
                <p className="services__modal-info">
                  Development and maintenance of applications based on web
                  technologies
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i
                  style={{ color: "var(--skin-color)", fontSize: "20px" }}
                  className="uil uil-check-circle"
                ></i>
                <p className="services__modal-info">
                  Providing convenient navigation and structured content
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
