import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-wrap' id='footer'>
          <div className='links-container'>
            <div className='links-wrapper'>
              <div className='link-items'>
                <h1>About us</h1>
                <a href='https://github.com/briancodex/react-website-v1/blob/master/src/components/Footer.css'>
                  sucks..
                </a>
                <a href='https://github.com/briancodex/react-website-v1/blob/master/src/components/Footer.css'>
                  sucks..
                </a>
              </div>
              <div className='link-items'>
                <h1>About us</h1>
                <a href='https://github.com/briancodex/react-website-v1/blob/master/src/components/Footer.css'>
                  sucks..
                </a>
                <a href='https://github.com/briancodex/react-website-v1/blob/master/src/components/Footer.css'>
                  sucks..
                </a>
              </div>
            </div>
          </div>
          <div className='social-media'>
            <div className='social-media-wrap'>
              <Link
                className='link'
                to='home'
                smooth={true}
                duration={800}
                spy={true}
                exact='true'
                offset={-80}
              >
                Yash
              </Link>
              <small>
                Yash © {new Date().getFullYear()} All rights reserved.
              </small>
              <div className='social-icons'>
                <a href='https://www.instagram.com/a281447/'>
                  <FaInstagram className='ig' />
                </a>
                <a href='https://www.instagram.com/a281447/'>
                  <FaFacebook className='fb' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
