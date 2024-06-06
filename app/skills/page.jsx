"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaReact, FaNodeJs,FaCompass, FaJava , FaJsSquare, FaDatabase, FaServer, FaCss3Alt, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiC, SiCplusplus , SiMysql, SiPostman  } from 'react-icons/si';
const Skills = () => {
  return (
    <div className="max-w-2xl flex flex-col gap-10 mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="relative">
        <div className="orbit mx-auto grid grid-cols-6 gap-4">
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaHtml5 className="text-5xl text-red-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaCss3 className="text-5xl text-blue-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">CSS</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaReact className="text-5xl text-green-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">React JS</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaNodeJs className="text-5xl text-violet-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">Node Js</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaJsSquare className="text-5xl text-yellow-400 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaServer className="text-5xl text-pink-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaDatabase className="text-5xl text-green-600 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaCss3Alt className="text-5xl text-blue-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaGithub className="text-5xl text-bleck-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaBootstrap className="text-5xl text-purple-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <SiC className="text-5xl text-purple-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <SiCplusplus className="text-5xl text-purple-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          {/* <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <SiJava className="text-5xl text-purple-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div> */}
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <SiMysql className="text-5xl text-green-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <SiPostman className="text-5xl text-red-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaCompass className="text-5xl text-blue-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="planet html group relative">
            <FaCompass className="text-5xl text-purple-500 mb-2" />
            <div className="hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg">HTML</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
