"use client"
import '@/app/about/style.css'; // Import the CSS file
import React, { useEffect, useState ,useRef } from 'react';
import gsap from 'gsap';
import Shery from 'sheryjs';
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import SplitText from 'gsap-trial/SplitText';

const About = () => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const paraRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreenVisible(false);
    }, 2000); // Adjust the delay timing here

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') { // Ensure code runs only in the browser
      const para = paraRef.current;

      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: para,
          start: 'top center', // Adjust start position as needed
          end: 'bottom center', // Adjust end position as needed
          scrub: 1, // Enable scrubbing
        },
      });

      timeline.to(para, {
        color: 'white', // Change color to white
        duration: 1, // Duration of the animation
      });
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') { // Ensure code runs only in the browser
      Shery.textAnimate("#t" /* Element to target.*/, {
        //Parameters are optional.
        style: 1,
        y: 10,
        delay: 0.1,
        duration: 2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
      });
    }
  }, []);

  return (
    <>
      {/* <div className={`splash-screen ${splashScreenVisible ? '' : 'hidden'}`}></div> */}
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <h1 className="text-8xl mt-10 font-bold mb-4" id='t' >About Me</h1>
        <p id='para' className="text-lg text-black  leading-relaxed" ref={paraRef} >
          As a sophomore at IIIT Gwalior, I am deeply passionate about crafting immersive user experiences and developing scalable backend solutions. With expertise in <span  className='text-[#A853F7]' >React Js</span>, Next.js, Node.js, <span className='text-[#FD74C0]'>Express</span>, MongoDB, and <span className='text-[#9D95FF]' >GSAP</span>, I have built dynamic web applications with intuitive interfaces and seamless functionality. My commitment to mastering data structures and algorithms fuels my pursuit of excellence, driving me to continuously expand my skill set and embrace new challenges. Currently seeking internship opportunities, I am eager to apply my skills in a real-world setting, collaborate with talented professionals, and make meaningful contributions to innovative projects that empower users and drive positive change.
        </p>
        <svg className='h-4 w-4' href='file:///Users/hemantmeena/Downloads/About%20me-cuate%20(1).svg' ></svg>
      </div>
    </>
  );
};

export default About;
