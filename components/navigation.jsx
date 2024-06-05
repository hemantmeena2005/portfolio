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
    <div className='flex justify-between gap-[100px] h-[50px] items-center px-10 py-3'>
      <div ref={nameRef}>
        <Link href='/'>
        {"Hemant Meena".split("").map((letter, index) => (
          <span key={index} className="letter">
            {letter}
          </span>
        ))}
        </Link>
      </div>
      <div className='flex gap-10'>
        <Link href='/about' legacyBehavior>
          <a
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </a>
        </Link>
        <Link href='/contact' legacyBehavior>
          <a
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact Me
          </a>
        </Link>
        <Link href='/project' legacyBehavior>
          <a
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Projects
          </a>
        </Link>
        <Link href='/skills' legacyBehavior>
          <a
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Skills
          </a>
        </Link>
      </div>
      <div className='flex gap-10'>
        <Link href='https://github.com/hemantmeena2005' legacyBehavior>
          <a
            className='scale-[1.5]'
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaGithub />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/hemant-meena-77320b272/' legacyBehavior>
          <a
            className='scale-[1.5]'
            ref={addToRefs}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaLinkedin />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
