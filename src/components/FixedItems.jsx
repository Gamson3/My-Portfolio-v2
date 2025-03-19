import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; 
import { motion } from "motion/react";


const fixedItemsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const FixedItems = () => {
  return (
    <motion.div 
    initial="hidden" 
    animate="visible" 
    variants={fixedItemsVariants}
    >
        {/* social links with vertical line */}
        <div className="hidden lg:flex flex-col items-center space-y-10  fixed bottom-0 left-32">
          <a
            href="https://github.com/gamson3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={20}
              className="text-gray-500 hover:text-[#27dddf] cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            />
          </a>
          <a
            href="https://linkedin.com/in/gideon-gamson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={20}
              className="text-gray-500 hover:text-[#27dddf] cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            />
          </a>
          <a
            href="https://instagram.com/99magnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={20}
              className="text-gray-500 hover:text-[#27dddf] cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
            />
          </a>
          <div className="w-[1px] h-[100px] bg-white"></div>
        </div>

        {/* Email with vertical Line — right side */}
        <div className="hidden lg:flex flex-col items-center space-y-23 max-w-3 fixed bottom-0 right-32">
          <a 
          href="mailto:gamsongideon@gmail.com"
          className="rotate-90 text-gray-500 text-xs tracking-wider hover:text-[#27dddf] cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
            gamsongideon@gmail.com
          </a>
          <div className="w-[1px] h-[100px] bg-white"></div>
        </div>

    </motion.div>
  );
};

export default FixedItems;
