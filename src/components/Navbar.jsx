import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constanst";
import { logo, menu, close, _logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={_logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Kiril{" "}
            <span className="sm:inline hidden">| Full Stack Developer</span>
          </p>
        </Link>
        <div className="flex flex-row">
          <p>Follow Me - </p>
          <div className="flex gap-3">
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
            <li>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
