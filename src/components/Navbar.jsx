import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { motion } from "motion/react";

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, },
};

const navLinksVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (index) => navLinkTransition(index),
};

const navLinkTransition = (index) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.4, ease: "easeOut", delay: 0.2 + index * 0.15 },
});

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between px-8 lg:px-32 transition-all duration-500 ease-in-out z-50 ${
        isAtTop
          ? "bg-transparent"
          : isVisible
          ? "translate-y-0 backdrop-blur-lg bg-[#0A192F]/10 border-[#0A192F]/20 shadow-md"
          : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Logo />
      </motion.a>

      {/* Desktop Nav Links (Hidden on Small Screens) */}
      <motion.div
        className="hidden lg:flex items-center gap-8 text-gray-400 text-sm lg:text-base"
        variants={navLinksVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="hover:text-[#27DDDF]"
            variants={navLinksVariants}
            custom={index}
            onClick={closeMenu}
          >
            {link.name}
          </motion.a>
        ))}

        {/* Resume Button */}
        <motion.a
          href="/Gamson_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-1.5 border border-[#27DDDF] text-[#27DDDF] rounded-lg hover:bg-[length:200%_auto] hover:bg-gradient-to-r from-[#1FA2FF] via-[#71e8fc] to-[#1FA2FF] shadow-lg hover:bg-right-bottom hover:text-[#0A192F] transition duration-300 cursor-pointer"
          onClick={closeMenu}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.4, ease: "easeOut", delay: 1 },
            },
          }}
          custom={5} // Ensures animation order
        >
          Resume
        </motion.a>
      </motion.div>

      {/* Mobile Menu Button (Visible on Small Screens) */}
      <button
        className="block lg:hidden text-white text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Mobile Nav Menu (Only visible when isMenuOpen is true) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0A192F] bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-xl text-white transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-3xl text-white cursor-pointer"
          onClick={closeMenu}
        >
          <FiX />
        </button>

        {/* Mobile Nav Links */}
        {navLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            className="hover:text-[#27DDDF]"
            variants={navLinksVariants}
            custom={index}
            onClick={closeMenu}
          >
            {link.name}
          </motion.a>
        ))}

        {/* Resume Button */}
        <a
          className="px-5 py-2 border border-[#27DDDF] text-[#27DDDF] rounded-lg hover:bg-gradient-to-r from-[#1FA2FF] via-[#71e8fc] to-[#1FA2FF] shadow-lg hover:text-[#0A192F] transition duration-300"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
