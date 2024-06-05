"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Home() {
  const splashScreenRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = lettersRef.current;
    gsap.fromTo(
      letters,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
        onComplete: () => {
          splashScreenRef.current.style.display = 'none';
        },
      }
    );
  }, []);

  const addToLettersRef = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  return (
    <div className='bg-green-300' >
      <div ref={splashScreenRef} className="page1 h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 bg-white z-50">
        <h1 className="text-9xl font-bold">
          {"Hemant Meena".split("").map((letter, index) => (
            <span key={index} ref={addToLettersRef} className="letter">
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div className='h-[100vh] w-full p-10  flex justify-center flex-col gap-5 ' >
        <h1 className='text-6xl' >Hello m Hemant . m a <br /> Full Stack Developer</h1>
        <div className='flex gap-5' >
          <button className='py-3 px-5 bg-black text-white rounded-full' >Contact Me Here</button>
          <a href="/r.pdf" download="Hemant_Meena_Resume.pdf" className="py-3 px-5 bg-black text-white rounded-full">Download Resume</a>
        </div>
        <p className="text-xl">use client</p> {/* Add "use client" text here */}
      </div>
    </div>
  );
}
