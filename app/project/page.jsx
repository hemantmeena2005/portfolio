"use client"
import React from 'react';
import "@/app/project/style.css"
import { motion } from 'framer-motion';
import { FaCss3, FaHtml5, FaJava, FaReact } from 'react-icons/fa'; // Example tag icon
import Image from 'next/image';
import { useState ,useEffect } from 'react';
import Shery from 'sheryjs';

const Project = () => {
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreenVisible(false);
    }, 1000); // Adjust the delay timing here

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      import('sheryjs').then((Shery) => {
        Shery.mouseFollower()
        Shery.default.imageEffect(".imag", {
          style: 3, //Select Style
        });
      });
    }
  }, []);

  return (
    <>
    <div className="flex flex-col gap-10 p-20 items-center justify-center h-full ">
      <a href="https://react1-alpha-coral.vercel.app">
      <div className="flex items-start">
        {/* Left side - Project */}
        <div className="flex flex-col">
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="m-4 bg-[#151030] shadow-md rounded-md overflow-hidden"
          >
            <motion.img
              src="/img.png"
              alt="Project Image"
              className="w-full h-64 object-cover imag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Stays and Hotels</h2>
              <p className="text-gray-700 mb-4">
                
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaReact className="mr-1" />
                  React
                </motion.div>
                <motion.div
                  className="flex items-center px-2 py-1 bg-green-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCss3 className="mr-1" />
                  Tailwind CSS
                </motion.div>
                <motion.div
                  className="flex items-center px-2 py-1 bg-red-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  Rapid Api
                </motion.div>
                {/* Add more tags here */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical line */}
        <div className="border-l border-gray-400 h-full mx-8"></div>

        {/* Right side - Text */}
        <div className="flex flex-col max-w-[50%] items-start ml-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Stays and Hotels</h2>
            <p className="">
            Stays and Hotels Finder is a modern web application designed to help users easily search for and discover various accommodation options including hotels, stays, and other lodgings. This application leverages the power of React for a dynamic and responsive user interface, React Router for seamless navigation, and integrates with external APIs to provide real-time data. Tailwind CSS is used to create a clean and modern design, ensuring an intuitive user experience.
            </p>
          </div>
        </div>
      </div>
      </a>

      {/* Second pair of project and text */}
      <div className="flex items-start">
        {/* Left side - Text */}
        <div className="flex flex-col max-w-[50%] items-start ml-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">PassOP - Password Manager</h2>
            <p className="text-white">
            PassOP is a React-based password manager that allows users to securely manage passwords for various websites. It features a user-friendly interface for adding, editing, deleting, and viewing passwords, with data stored locally in the browsers local storage for quick access. Key features include the ability to manage website, username, and password entries, toggle password visibility, copy information to the clipboard, and a responsive design that works well on all device sizes.
            </p>
          </div>
        </div>

        {/* Vertical line */}
        <div className="border-l border-gray-400 h-full mx-8"></div>

        {/* Right side - Project */}
        <a href="https://password-manager-hemant1.vercel.app">
        <div className="flex flex-col">
          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="m-4 bg-[#151030] shadow-md rounded-md overflow-hidden"
          >
            <motion.img
              src="/img2.png"
              alt="Project Image"
              className="w-full h-64 object-cover imag "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">PassOP - Password Manager</h2>
              <p className="text-gray-700 mb-4">
              React-based app for secure password management with local storage.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaReact className="mr-1" />
                  React
                </motion.div>
                <motion.div
                  className="flex items-center px-2 py-1 bg-green-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCss3 className="mr-1" />
                  Tailwind Css
                </motion.div>
                <motion.div
                  className="flex items-center px-2 py-1 bg-purple-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  Local Storage
                </motion.div>
                {/* Add more tags here */}
              </div>
            </div>
          </motion.div>
        </div>
        </a>
      </div>

      {/* htird */}
      <div className="flex items-start">
        {/* Left side - Project */}
        <a href="https://htmlportfolio-alpha.vercel.app">
        <div className="flex flex-col">
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="m-4 bg-[#151030] shadow-md rounded-md overflow-hidden"
          >
            <motion.img
              src="/img3.png"
              alt="Project Image"
              className="w-full h-64 object-cover imag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Modern Portfolio</h2>
              <p className="text-gray-700 mb-4">
                This is a portfolio clone .
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaCss3 className="mr-1" />
                  CSS
                </motion.div>
                <motion.div
                  className="flex items-center px-2 py-1 bg-green-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaJava className="mr-1" />
                  Javascript
                </motion.div>
                <motion.div
                  className="flex items-center px-2 py-1 bg-red-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaHtml5 className="mr-1" />
                  HTML
                </motion.div>
                {/* Add more tags here */}
              </div>
            </div>
          </motion.div>
        </div>
        </a>

        {/* Vertical line */}
        <div className="border-l border-gray-400 h-full mx-8"></div>

        {/* Right side - Text */}
        <div className="flex flex-col items-start ml-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Use Client</h2>
            <p className="text-gray-700">
              Description or details about using the client can go here.
            </p>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Project;
