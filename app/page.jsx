"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import SplitText from 'gsap-trial/SplitText'; // Import SplitText from correct package
import Shery from 'sheryjs';
import { Link } from 'react-scroll';

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    // gsap.registerPlugin(SplitText);

    // const split = new SplitText("#head", { type: "chars" });

    // Animate each character into place from 100px above, fading in:
    // gsap.from(split.chars, {
    //   duration: 1,
    //   y: 100,
    //   autoAlpha: 0,
    //   stagger: 0.05,
    // });

    // Initialize Shery.js and apply the magnet effect
    Shery.makeMagnet(".magnet");
    Shery.hoverWithMediaCircle(".hvr", {
      videos: ["/0.mp4", "/2.mp4", "/3.mp4"],
    });

    Shery.textAnimate(".text" /* Element to target.*/, {
      // Parameters are optional.
      style: 1,
      y: 10,
      delay: 0.1,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });

  }, []);

  return (
    <div className="relative">
      <div className="bg-black h-full text-white">
        <div className="h-[100vh] w-full p-10 flex justify-center items-center text-center flex-col gap-5">
          <h1 className="text-[1.5rem]">
            Hello I am <span className='text-[#04E348] text'>Hemant</span>. I am a <br />
            <span className="text-[5rem]  hvr z-50 uppercase font-bold" id="head" ref={textRef}>
              <span className='text' >Full</span> <span className='magnet hvr text-[#A854F7]'>Stack</span> <span className='hvr text'>Developer</span>
            </span>
          </h1>
          <div className="flex gap-5">
            <Link to="contact">
              <div className="magnet py-3 px-5 bg-transparent border-2 border-white text-white rounded-full">
                Contact Me Here
              </div>
            </Link>
            <Link to="contact">
              <div className="magnet py-3 px-5 bg-transparent border-2 border-white text-white rounded-full">
                Download Resume
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-effect {
          transition: all 0.8s ease-in;
          position: relative;
          overflow: hidden;
        }

        .hover-effect::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          z-index: -1;
          transition: top 0.5s ease;
        }

        .hover-effect:hover::before {
          top: 0;
        }

        .hover-effect:hover {
          color: black;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
