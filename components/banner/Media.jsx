import React from 'react';
import { FaLinkedinIn, FaReact, FaPython, FaJava, FaMicrochip } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { Link } from 'react-scroll';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/caleb-paradis-69bba1205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          GOOD SKILLS
        </h2>
        <div className="flex gap-4">
          <Link to="resume" smooth={true} duration={500}>
            <span className="bannerIcon">
              <FaJava />
            </span>
          </Link>
          <Link to="resume" smooth={true} duration={500}>
            <span className="bannerIcon">
              <FaReact />
            </span>
          </Link>
          <Link to="resume" smooth={true} duration={500}>
            <span className="bannerIcon">
              <FaPython />
            </span>
          </Link>
          <Link to="resume" smooth={true} duration={500}>
            <span className="bannerIcon">
              <FaMicrochip />
            </span>
          </Link>
          <Link to="resume" smooth={true} duration={500}>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Media;
