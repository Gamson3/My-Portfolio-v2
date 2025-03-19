import { animate, stagger } from "motion/react";
import { useEffect, useRef } from "react";

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Show container after fonts load
    document.fonts.ready.then(() => {
      containerRef.current.style.visibility = "visible";

      const words = containerRef.current.querySelectorAll(".animate-word");
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        { type: "spring", duration: 1, bounce: 0.2, stiffness: 200, delay: stagger(0.05) }
      );
      // Animate paragraphs
      const paragraphs = containerRef.current.querySelectorAll(".animate-text");
      animate(
        paragraphs,
        { opacity: [0, 1], y: [15, 0] }, // Slightly more vertical movement
        {
          type: "spring",
          duration: 2, // Slightly longer for a softer effect
          bounce: 0.1,
          stiffness: 150,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <section id="home" className="flex items-center justify-center text-white h-screen pt-20 px-4 text-center sm:text-left">
      <div className="container text-center mx-auto" ref={containerRef} style={{ visibility: "hidden" }}>
        <div className="max-w-3xl mx-auto">
          <p className="mt-3 text-[#27dddf] font-medium text-sm md:text-base animate-text">
            Hi, my name is
          </p>

          {/* Animated H1 */}
          <h1 className="mt-3 text-5xl sm:text-6xl md:text-8xl font-bold text-[#D2D3D4]">
            {"Gamson.".split("").map((char, index) => (
              <span key={index} className="animate-word inline-block">{char}</span>
            ))}
          </h1>

          {/* Animated H2 */}
          <h2 className="text-4xl md:text-6xl font-bold mt-3 text-[#8892b0]">
            {"I build things for the web.".split(" ").map((word, index) => (
              <span key={index} className="animate-text inline-block mr-2">{word}</span>
            ))}
          </h2>

          <p className="mt-5 text-gray-500 font-medium mx-auto leading-relaxed animate-text">
            I'm a Computer Science Engineering student with a passion and strong
            foundation for crafting clean, efficient code that solves real-world
            problems. Always eager to collaborate and contribute to the success
            of cutting-edge products.
          </p>

          {/* apply same Animation as paragraphs for button container */}
          <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center mt-8 animate-text">
            <a 
            href="/Gamson_Resume.pdf"
            download="Gideon_Gamson_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-5 py-2 text-[#0A192F] text-base font-semibold rounded-lg transition-all duration-500 bg-[length:200%_auto] bg-gradient-to-r from-[#1FA2FF] via-[#71e8fc] to-[#1FA2FF] shadow-lg hover:bg-right-bottom cursor-pointer">
              Download CV
            </a>
            <a 
            href="#contact" 
            className="w-full sm:w-auto px-5 py-2 text-[#27DDDF] text-base font-semibold border border-[#27DDDF] rounded-lg hover:bg-[length:200%_auto] hover:bg-gradient-to-r from-[#1FA2FF] via-[#71e8fc] to-[#1FA2FF] shadow-lg hover:bg-right-bottom hover:text-[#0A192F] transition duration-300 cursor-pointer">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
