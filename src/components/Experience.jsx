import { Experiences } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="pb-24 container mx-auto px-6 md:px-16 lg:px-32">
      
      <div className="my-10 relative w-fit">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-semibold text-[#233044]">
          Experience
        </h2>
        <span className="absolute top-[58%] left-[39%] sm:top-[60%]  sm:left-[42%] md:top-[60%] md:left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-2xl font-bold text-[#d2d3d4] whitespace-nowrap">
          My Journey So Far
        </span>
      </div>

      <div>
        {Experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-start">
            <div className="w-full lg:w-1/4">
              <p className="mb-4 text-sm text-gray-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-4 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm font-normal text-gray-400">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-base text-gray-500">
                {experience.description}
              </p>
              {experience.technologies.map((technologies, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-gray-700 px-2 py-1 text-xs font-medium text-[#d2d3d4]"
                >
                  {technologies}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
