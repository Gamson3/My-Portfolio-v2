import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20 pb-4 container mx-auto px-6 md:px-16 lg:px-32">
      <div className="lg:hidden my-8 flex gap-12 items-center justify-center">
        <a href="https://github.com/gamson3" target="_blank" rel="noopener noreferrer">
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
      </div>
      <p className="text-center text-sm text-[#8892b0]">
        Designed & Built by Gideon Gamson
      </p>
    </div>
  );
};

export default Footer;
