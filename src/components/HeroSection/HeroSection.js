import React, { useState } from "react";
import "./HeroSection.css";
import Particles from "react-particles-js";
import { Link as LinkS } from "react-scroll";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => setHover(!hover);
  return (
    <div className='hero-container' id='home'>
      <div className='heroBG'>
        <Particles
          className='particles'
          params={{
            particles: {
              size: {
                value: 5,
              },
            },

            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
            },
            line_linked: {
              shadow: {
                enable: true,
                blur: 5,
              },
            },
            move: {
              enable: true,
              speed: 0.8,
            },
          }}
        />
      </div>
      <div className='hero-content'>
        <h1>
          Hi, I am <span>Yash Sabal</span>.
        </h1>
        <h1>I am a full-stack web developer.</h1>

        <div className='btn-wrapper'>
          <LinkS
            className='btn'
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            About Me
            {!hover ? (
              <FaArrowRight className='right' />
            ) : (
              <FaAngleDown className='right' />
            )}
          </LinkS>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
