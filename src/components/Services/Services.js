import React from "react";
import "./Services.css";
import one from "../../images/fast.svg";
function Services() {
  return (
    <>
      <div className='services-container' id='services'>
        <h1 className='h1'> SERVICES</h1>
        <div className='services-wrap'>
          <div className='services-card'>
            <img src={one} alt='' />
            <h2>lets sex...</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum?
            </p>
          </div>
          <div className='services-card'>
            <img src={one} alt='' />
            <h2>lets sex...</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum?
            </p>
          </div>
          <div className='services-card'>
            <img src={one} alt='' />
            <h2>lets sex...</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum?
            </p>
          </div>
          <div className='services-card'>
            <img src={one} alt='' />
            <h2>lets sex...</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
