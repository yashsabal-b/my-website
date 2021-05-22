import React from "react";
import img from "../../images/about.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className='info-container' id='about'>
        <div className='info-wrapper'>
          <div className='info-row'>
            <div className='column1'>
              <div className='textwrapper'>
                <p className='heading'>About Me</p>
                <p className='content'>
                  I am a 20 year old Aspiring Developer, I began when I Was 17
                  and till then I have only Put More and More to my Skills. For
                  Now I Work as a Freelance Web-Developer But I am willing to
                  Work for Big Companies as I am Really Good at Team Work, In
                  future I Hope to become more better in Development and
                  Continuously Learn New Technologies.
                </p>
                <div className='btn-wrapA'>
                  <a
                    className='projects'
                    href='https://yashs-amazon-clone.netlify.app/'
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div className='column2'>
              <div className='img-wrap'>
                <img className='img' src={img} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
