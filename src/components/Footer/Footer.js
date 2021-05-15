import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-wrap' id='footer'>
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
                <a href='https://www.facebook.com/yash.sabal.338'>
                  <FaFacebook className='fb' />
                </a>
                <a href='https://www.linkedin.com/in/logistic-programmer-958365207/'>
                  <FaLinkedin className='li' />
                </a>
                <a href='https://twitter.com/yashsabal5'>
                  <FaTwitter className='tt' />
                </a>
                <a href='https://github.com/yashsabal'>
                  <FaGithub className='gh' />
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
