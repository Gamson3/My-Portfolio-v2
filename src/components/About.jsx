import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="relative py-15 px-6 md:px-16 lg:px-32 text-base text-gray-500">
      <div className="">
        {/* "Get To Know Me More" Positioned Over "About" */}
        <div className="my-10 relative w-fit">
          <h2 className="text-7xl sm:text-8xl font-semibold text-[#233044]">
            About
          </h2>
          <span className="absolute top-[60%] left-[73%] transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-2xl font-bold text-[#d2d3d4] whitespace-nowrap">
            Get To Know Me More
          </span>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section here */}
          <div>
            <p className="font-medium mb-4 leading-relaxed">
              As a passionate developer, I thrive on solving complex problems
              through innovative technology.
            </p>
            <p className="font-medium mb-4 leading-relaxed">
              With a strong foundation in software development, algorithms, data
              structures and systems design, I’ve worked on projects that
              refined my skills in HTML, CSS, and JavaScript while deepening my
              understanding of user experience.
            </p>
            <p className="font-medium mb-6 leading-relaxed">
              I’m always eager to learn and to expand my skill set. I actively
              participate in hackathons and coding competitions, which have
              sharpened my problem-solving abilities and allowed me to connect
              with like-minded individuals and industry professionals.
            </p>

            <a 
            href="/Gamson_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="px-5 py-2 text-[#0A192F] text-base font-semibold rounded-lg transition-all duration-500 bg-[length:200%_auto] bg-gradient-to-r from-[#1FA2FF] via-[#71e8fc] to-[#1FA2FF] shadow-lg hover:bg-right-bottom cursor-pointer">
              View Resume
            </button>
            </a>
          </div>

          {/* Right Section (Tabs) */}
          <div className="flex flex-col">
            {/* Tab Links */}
            <div className="flex space-x-8 mb-4 max-h-[25px] ">
              {["skills", "education"].map((tab) => (
                <p
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative mr-12 text-lg font-medium cursor-pointer transition-all
            ${activeTab === tab ? "text-gray-500" : "text-gray-600"}
            before:absolute before:left-0 before:bottom-[-8px] before:h-[3px] before:bg-[#27dddf] before:transition-all before:duration-300
            ${activeTab === tab ? "before:w-1/2" : "before:w-0"}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </p>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {activeTab === "skills" && (
                <div>
                  <ul className="space-y-4">
                    <li>
                      <span className="text-[#27dddf]">
                        Programming Languages:
                      </span>
                      <br /> JavaScript, Python, Java, HTML, CSS, SQL
                    </li>
                    <li>
                      <span className="text-[#27dddf]">
                        Frameworks & Libraries:
                      </span>{" "}
                      <br />
                      React, Node.js, Bootstrap
                    </li>
                    <li>
                      <span className="text-[#27dddf]">Tools:</span>
                      <br /> Git, GitHub, Agile Development, Figma
                    </li>
                    <li>
                      <span className="text-[#27dddf]">Other:</span>
                      <br />API Integration, UI/UX Design
                    </li>
                  </ul>
                </div>
              )}

              {/* {activeTab === "experience" && (
              <div>
                <ul className="space-y-4">
                  <li>
                    <span className=" text-[#27dddf]">2022 - Current:</span><br/> Computer Science Engineering Training at the University of Pécs
                  </li>
                  <li>
                    <span className="text-[#27dddf]">2021 - 2022:</span> <br/>Computer Engineering Training at the Kharkiv National University of RadioElectronics
                  </li>
                  <li>
                    <span className="text-[#27dddf]">2021:</span> <br/>Fullstack Web Development Bootcamp with Angela Yu
                  </li>
                </ul>
              </div>
            )} */}

              {activeTab === "education" && (
                <div>
                  <ul className="space-y-4">
                    <li>
                      <span className=" text-[#27dddf]">2022 - Current:</span>
                      <br /> BSc. Computer Science Engineering at the University
                      of Pécs
                    </li>
                    <li>
                      <span className="text-[#27dddf]">2021 - 2022:</span>{" "}
                      <br />
                      Computer Engineering Training at the Kharkiv National
                      University of RadioElectronics
                    </li>
                    <li>
                      <span className="text-[#27dddf]">2021:</span>
                      <br /> The Complete Web Development Bootcamp with Angela
                      Yu
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
