"use client"
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Follower = () => {
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
    <div className="absolute z-0 pointer-events-none" ref={followerRef}>
      <div className={`w-10 h-10 ${isBlack ? 'bg-transparent border-black' : 'bg-transparent border-white'} border-2 rounded-full`}></div>
    </div>
  );
};

export default Follower;
