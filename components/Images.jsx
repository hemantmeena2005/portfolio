"use client"
import React, { useEffect } from 'react';
import Shery from 'sheryjs';

const Images = () => {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            Shery.imageEffect(".images", {
                style: 3,
                scrollSnapping: true,
                scrollSpeed: 6,
                touchSpeed: 6,
                damping: 7,
            });
        }
    }, []);

    return (
        <div className='images'>
            <img src="/img.png" alt="" />
            <img src="/img2.png" alt="" />
            <img src="/img.png" alt="" />
        </div>
    );
};

export default Images;
