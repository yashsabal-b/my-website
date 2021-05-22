import React from "react";
import img from "../../images/project.png";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className='info-container2' id='projects'>
        <div className='info-wrapper2'>
          <div className='info-row2'>
            <div className='column12'>
              <div className='textwrapper2'>
                <p className='heading2'>MY PROJECTS</p>
                <p className='content2'>
                  For Now I have only Included One Project, It is One of my Best
                  Projects but I have'nt Integrated Mobile Responsiveness and
                  Functionality yet as I was Working on my Clients Projects, I
                  Will definitely Update it in Future. I Specialize in Adding
                  Modern Functionalities in Websites Like Login, Sign-up,
                  Databases, And Creating Dynamic Websites.
                </p>
                <div className='btn-wrap2'>
                  <a
                    className='projects2'
                    href='https://yashs-amazon-clone.netlify.app/'
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div className='column22'>
              <div className='img-wrap2'>
                <img className='img2' src={img} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
