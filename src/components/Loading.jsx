import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hexagonVariants = {
  hidden: { strokeDashoffset: 400 },
  visible: {
    strokeDashoffset: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1.6, duration: 0.5, ease: "easeOut" },
  },
};

const fadeOutVariants = {
  visible: { scale: 1, opacity: 1 },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Loading = ({ onComplete }) => {
  const [showFadeOut, setShowFadeOut] = useState(false);

  // Trigger fade-out after animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFadeOut(true);
    }, 2500); // Delay to match hexagon & text animation completion

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-gray-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} // Background remains visible
    >
      <motion.div
        className="relative w-24 h-24 flex justify-center items-center"
        variants={fadeOutVariants}
        initial="visible"
        animate={showFadeOut ? "exit" : "visible"} // Trigger fade-out at the right time
        onAnimationComplete={onComplete} // Triggers setLoading(false) after full animation
      >
        {/* Animated Hexagon */}
        <svg
          viewBox="0 0 80 80"
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.polygon
            points="40,5 70,20 70,60 40,75 10,60 10,20"
            stroke="#27dddf"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="400"
            strokeLinecap="round"
            variants={hexagonVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>

        {/* Letter G */}
        <motion.div
          className="text-[#27dddf] text-4xl font-bold"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          G
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
