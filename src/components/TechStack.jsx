import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const TechStack = () => {
  return (
    <div className="pb-24 w-full md:w-[70%] mx-auto">
      <h2 className="mt-10 pb-4 text-[#d2d3d4] text-center text-4xl">
        Technologies
      </h2>
      <p className="pb-6 text-gray-500 text-base text-center">
        Here are a few technologies I’ve been working with recently
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="border-2 border-neutral-500 p-4 rounded-2xl" title="React">
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </div>
        <div className="border-2 border-neutral-500 p-4 rounded-2xl" title="Next.js">
          <TbBrandNextjs className="text-4xl" />
        </div>
        <div className="border-2 border-neutral-500 p-4 rounded-2xl" title="WordPress">
          <FaWordpress className="text-4xl text-[#087aa0]" />
        </div>
        <div className="border-2 border-neutral-500 p-4 rounded-2xl" title="Python">
          <FaPython className="text-4xl text-blue-400" />
        </div>
        <div className="border-2 border-neutral-500 p-4 rounded-2xl" title="Node.js">
          <FaNodeJs className="text-4xl text-cyan-400" />
        </div>
        <div className="border-2 border-neutral-500 p-4 rounded-2xl" title="PostgreSQL">
          <BiLogoPostgresql className="text-4xl text-sky-700" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
