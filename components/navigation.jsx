"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { gsap } from 'gsap';

const Navigation = () => {
  const nameRef = useRef(null);
  const linkRefs = useRef([]);
  linkRefs.current = [];

  useEffect(() => {
    const letters = nameRef.current.querySelectorAll('.letter');
    gsap.fromTo(
      letters,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  const handleMouseEnter = (event) => {
    gsap.to(event.target, { scale: 1.2, color: "#1DA1F2", duration: 0.3 });
  };

  const handleMouseLeave = (event) => {
    gsap.to(event.target, { scale: 1, color: "#000", duration: 0.3 });
  };

  return (
    <nav className="flex justify-between items-center py-3 px-10 bg-[#EEEEEE]">
      <div ref={nameRef}>
        <Link href='/'>
          <div className="text-lg font-semibold">Hemant Meena</div>
        </Link>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link href='/about'>
            <div
              className="hover:scale-125 transition-transform duration-300"
              ref={addToRefs}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              About
            </div>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <div
              className="hover:scale-125 transition-transform duration-300"
              ref={addToRefs}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Contact Me
            </div>
          </Link>
        </li>
        <li>
          <Link href='/project'>
            <div
              className="hover:scale-125 transition-transform duration-300"
              ref={addToRefs}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Projects
            </div>
          </Link>
        </li>
        <li>
          <Link href='/skills'>
            <div
              className="hover:scale-125 transition-transform duration-300"
              ref={addToRefs}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Skills
            </div>
          </Link>
        </li>
      </ul>
      <div className="flex gap-10">
        <Link href='https://github.com/hemantmeena2005'>
          <FaGithub
            className="text-xl hover:text-blue-500 transition-colors duration-300"
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
        <Link href='https://www.linkedin.com/in/hemant-meena-77320b272/'>
          <FaLinkedin
            className="text-xl hover:text-blue-500 transition-colors duration-300"
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
