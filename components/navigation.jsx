"use client"
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { gsap } from 'gsap';
import Shery from 'sheryjs';
const Navigation = () => {

  const nameRef = useRef(null);
  useEffect(() => {
    if (typeof document !== 'undefined') { // Ensure code runs only in the browser
      Shery.textAnimate("#t" /* Element to target.*/, {
        //Parameters are optional.
        style: 5,
        y: 10,
        delay: 0.1,
        duration: 2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
      });
      Shery.makeMagnet(".magnet" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    }
  }, []);

  useEffect(() => {
    // Check if the document object is available (browser environment)
    if (typeof document !== 'undefined') {
      // Access the document object and perform necessary operations
      const handleMouseEnter = (event) => {
        gsap.to(event.target, { scale: 1.2, color: "#1DA1F2", duration: 0.3 });
      };

      const handleMouseLeave = (event) => {
        gsap.to(event.target, { scale: 1, color: "white", duration: 0.3 });
      };

      // Attach event listeners to the navigation links
      const navigationLinks = document.querySelectorAll('.navigation-link');
      navigationLinks.forEach((link) => {
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);
      });

      

      // Cleanup function to remove event listeners when the component unmounts
      return () => {
        navigationLinks.forEach((link) => {
          link.removeEventListener('mouseenter', handleMouseEnter);
          link.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }
  }, []);

  return (
    <nav className="flex justify-between items-center py-3 px-10 bg-black">
      <div ref={nameRef}>
        <Link to="home" smooth={true} duration={500}>
          <div className="text-lg font-semibold" id='t1'> Hemant <span className='text-[#26E54E]'>M</span>eena</div>
        </Link>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link to="about" smooth={true} duration={500} className="navigation-link">
            <div>About</div>
          </Link>
        </li>
        <li>
          <Link to="contact" className="navigation-link">
            <div>Contact Me</div>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="navigation-link">
            <div>Projects</div>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="navigation-link">
            <div>Skills</div>
          </Link>
        </li>
      </ul>
      <div className="flex gap-10">
        <a href='https://github.com/hemantmeena2005' target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl magnet transition-colors duration-300" />
        </a>
        <a href='https://www.linkedin.com/in/hemant-meena-77320b272/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl magnet transition-colors duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
