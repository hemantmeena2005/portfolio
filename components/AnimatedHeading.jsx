// components/AnimatedHeading.jsx
"use client"
import { motion } from 'framer-motion';

const AnimatedHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Welcome to My Portfolio
    </motion.h1>
  );
};

export default AnimatedHeading;
