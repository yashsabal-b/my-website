import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      className='sidebar-container'
      style={{ opacity: isOpen ? "100%" : "0", left: isOpen ? "0" : "-100%" }}
      isOpen={isOpen}
      onClick={toggle}
    >
      <div className='icon'>
        <FaTimes className='close-icon' />
      </div>
      <div className='sidebar-wrapper'>
        <ul>
          <li className='sidebar-links'>
            <LinkS
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              to='about'
            >
              About
            </LinkS>
          </li>
          <li className='sidebar-links'>
            <LinkS
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              to='projects'
            >
              Projects
            </LinkS>
          </li>
          <li className='sidebar-links'>
            <LinkS
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              to='services'
            >
              Services
            </LinkS>
          </li>
        </ul>
      </div>
      <div className='btn-wrap'>
        <a className='linkR' href='tel:+917972872410'>
          Contact Me
        </a>
        <a className='linkR' href='mailto:yashsabal716@gmail.com'>
          E-mail
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
