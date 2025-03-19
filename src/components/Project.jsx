import { Projects } from "../constants";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Project = () => {
  return (
    <section id="work" className="pb-24 container mx-auto px-6 md:px-16 lg:px-32">
      <div className="my-10 relative w-fit">
        <h2 className="text-7xl sm:text-8xl font-semibold text-[#233044]">
          Work
        </h2>
        <span className="absolute top-[58%] left-[82%] transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-2xl font-bold text-[#d2d3d4] whitespace-nowrap">
          Bringing Ideas to Life
        </span>
      </div>

      <div className="flex flex-col gap-16">
        {Projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-stretch lg:items-center justify-start mb-10`}
          >
            {/* Image Container */}
            <div className="w-full md:w-[90%] lg:w-[60%] relative group cursor-pointer object-fill flex items-stretch">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg aspect-[3/4] sm:aspect-auto"
              />
              <div className="absolute inset-0 bg-[#0c4243] opacity-50 transition-opacity duration-300 group-hover:opacity-0 rounded-lg"></div>

              {/* Overlay card on medium and below */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-[#051a1b]/70 text-gray-400 opacity-100 lg:hidden w-full h-full min-h-full">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="mt-2 text-sm">{project.description}</p>
                <div className="flex mt-4 gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#27dddf] text-2xl"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#27dddf] text-2xl"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Details (Large Screens) */}
            <div
              className={`lg:absolute hidden lg:block ${
                index % 2 === 0 ? "lg:right-0 text-right" : "lg:left-0 text-left"
              } max-lg:w-full lg:w-[50%] mt-6 lg:mt-0 transform`}
            >
              <h2 className="text-gray-400 text-xl md:text-2xl font-bold">
                {project.title}
              </h2>
              <p className="my-4 p-8 rounded bg-[#112240] shadow-lg text-sm text-gray-400">
                {project.description}
              </p>

              {/* Technologies used */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                } flex-wrap`}
              >
                {project.technologies.map((technologies, index) => (
                  <span key={index} className="mr-2 text-sm text-gray-400">
                    {technologies}
                  </span>
                ))}
              </div>

              {/* Icons for Links */}
              <div
                className={`mt-4 flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                } gap-4 pointer-events-auto`}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#27dddf] text-2xl"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#27dddf] text-2xl"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
