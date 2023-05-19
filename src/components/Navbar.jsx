import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constanst";
import { logo, menu, close, _logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 sm:pr-20"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={_logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Kiril{" "}
            <span className="sm:inline hidden">| WebSolutions</span>
          </p>
        </Link>
        <div className="flex flex-col md:flex-row text-[18px]">
          <p className="md:block hidden">Follow Me -</p>
          <div className="flex justify-between items-center gap-3 pr-5">
            <a
              href="https://www.facebook.com/haha.bege.3/"
              target="_blank"
              className="home__social-link"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://github.com/KirilSZyapkov"
              target="_blank"
              className="home__social-link"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kiril-zyapkov-a80119220/"
              target="_blank"
              className="home__social-link"
            >
              <i className="uil uil-linkedin"></i>
            </a>
          </div>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "nav_link " : "text-white"
              } nav_link_hover text-[18px] font-medium pl-5`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex justify-end item-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contan cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "nav_link " : "text-white"
                  } nav_link_hover text-[16px] font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
