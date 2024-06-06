"use client"
import '@/app/about/style.css'; // Import the CSS file
import React, { useEffect, useState } from 'react';

const About = () => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreenVisible(false);
    }, 2000); // Adjust the delay timing here

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`splash-screen ${splashScreenVisible ? '' : 'hidden'}`}></div>
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          As a sophomore at IIIT Gwalior, I am deeply passionate about crafting immersive user experiences and developing scalable backend solutions. With expertise in React, Next.js, Node.js, Express, MongoDB, and GSAP, I have built dynamic web applications with intuitive interfaces and seamless functionality. My commitment to mastering data structures and algorithms fuels my pursuit of excellence, driving me to continuously expand my skill set and embrace new challenges. Currently seeking internship opportunities, I am eager to apply my skills in a real-world setting, collaborate with talented professionals, and make meaningful contributions to innovative projects that empower users and drive positive change.
        </p>
      </div>
    </>
  );
};

export default About;
