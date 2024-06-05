"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa'; // Example tag icon
import Image from 'next/image';

const Project = () => {
  return (
    <div className="flex flex-col gap-10 p-20 items-center justify-center h-full ">
      <div className="flex items-start">
        {/* Left side - Project */}
        <div className="flex flex-col">
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="m-4 bg-white shadow-md rounded-md overflow-hidden"
          >
            <motion.img
              src="/img.png"
              alt="Project Image"
              className="w-full h-64 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project Title</h2>
              <p className="text-gray-700 mb-4">
                Description of the project goes here.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaReact className="mr-1" />
                  React
                </motion.div>
                {/* Add more tags here */}
              </div>
            </div>
          </motion.div>
        </div>

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

      {/* Second pair of project and text */}
      <div className="flex items-start">
        {/* Left side - Text */}
        <div className="flex flex-col items-start ml-8">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Use Client</h2>
            <p className="text-gray-700">
              Description or details about using the client can go here.
            </p>
          </div>
        </div>

        {/* Vertical line */}
        <div className="border-l border-gray-400 h-full mx-8"></div>

        {/* Right side - Project */}
        <div className="flex flex-col">
          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="m-4 bg-white shadow-md rounded-md overflow-hidden"
          >
            <motion.img
              src="/img.png"
              alt="Project Image"
              className="w-full h-64 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project Title</h2>
              <p className="text-gray-700 mb-4">
                Description of the project goes here.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaReact className="mr-1" />
                  React
                </motion.div>
                {/* Add more tags here */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* htird */}
      <div className="flex items-start">
        {/* Left side - Project */}
        <div className="flex flex-col">
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="m-4 bg-white shadow-md rounded-md overflow-hidden"
          >
            <motion.img
              src="/img.png"
              alt="Project Image"
              className="w-full h-64 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project Title</h2>
              <p className="text-gray-700 mb-4">
                Description of the project goes here.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className="flex items-center px-2 py-1 bg-blue-500 text-white rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaReact className="mr-1" />
                  React
                </motion.div>
                {/* Add more tags here */}
              </div>
            </div>
          </motion.div>
        </div>

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
  );
};

export default Project;
