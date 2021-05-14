import React, { useEffect, useState } from "react";
import { Link as LinkR, Redirect } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import emailjs from "emailjs-com";

function Navbar({ toggle }) {
  const [active, setActive] = useState(false);
  const [scrollNav, setScrollnav] = useState(false);

  const activeC = (e) => setActive(true);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <nav
        scrollNav={scrollNav}
        className='nav'
        style={{ background: scrollNav ? "#000" : "transparent" }}
      >
        <div className='navbar-container'>
          <LinkS
            smooth={true}
            duration={800}
            spy={true}
            exact='true'
            offset={-80}
            to='home'
            className='nav-logo'
          >
            Yash
          </LinkS>
          <div className='mobile-icon' onClick={toggle}>
            <FaBars />
          </div>
          <ul className='nav-menu'>
            <li
              className={active ? "active nav-item" : "nav-item"}
              onClick={activeC}
            >
              <LinkS
                className='nav-links'
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
              </LinkS>
            </li>
            <li
              className={active ? "active nav-item" : "nav-item"}
              onClick={activeC}
            >
              <LinkS
                className='nav-links'
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Projects
              </LinkS>
            </li>
            <li
              className={active ? "active nav-item" : "nav-item"}
              onClick={activeC}
            >
              <LinkS
                className='nav-links'
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Services
              </LinkS>
            </li>
          </ul>
          <div className='nav-btn'>
            <a className='nav-btn-link' href='tel:+917972872410'>
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
