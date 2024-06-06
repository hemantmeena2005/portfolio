"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Home() {
  const followerRef = useRef(null);
  const buttonsRef = useRef([]);
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    const follower = followerRef.current;

    const onMouseMove = (event) => {
      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY - 70, // Adjusted to be 70 pixels above the cursor
        duration: 0.3,
        ease: 'power1.out',
      });

      // Toggle the color
      setIsBlack((prev) => !prev);
    };

    const onMouseOver = (event) => {
      if (event.target.classList.contains('hover-effect')) {
        gsap.to(follower, { opacity: 0, duration: 0.3 });
      }
    };

    const onMouseOut = (event) => {
      if (event.target.classList.contains('hover-effect')) {
        gsap.to(follower, { opacity: 1, duration: 0.3 });
      }
    };

    const attractToCursor = (event) => {
      buttonsRef.current.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const distanceX = event.clientX - (rect.left + rect.width / 2);
        const distanceY = event.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 200) {
          gsap.to(button, {
            x: distanceX * 0.2,
            y: distanceY * 0.2,
            duration: 0.3,
            ease: 'power1.out',
          });
        } else {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power1.out',
          });
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', attractToCursor);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', attractToCursor);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  const addButtonRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  return (
    <div className="relative">
      <div className="absolute z-0 pointer-events-none" ref={followerRef}>
        <div className={`w-10 h-10 ${isBlack ? 'bg-transparent border-black' : 'bg-transparent border-white'} border-2 rounded-full`}></div>
      </div>

      <div className='bg-black text-white'>
        <div className='h-[100vh] w-full p-10 flex justify-center items-center text-center flex-col gap-5'>
          <h1 className='text-[1.5rem]'>Hello I am Hemant. I am a <br /> <span className='text-[5rem]'>Full Stack Developer</span></h1>
          <div className='flex gap-5'>
            <button ref={addButtonRef} className='py-3 px-5 bg-transparent border-2 border-white text-white rounded-full hover-effect'>Contact Me Here</button>
            <a ref={addButtonRef} href="/r.pdf" download="Hemant_Meena_Resume.pdf" className="py-3 px-5 bg-transparent border-2 border-white text-white rounded-full hover-effect">Download Resume</a>
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
