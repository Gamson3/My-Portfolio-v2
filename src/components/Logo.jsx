
const Logo = () => {
    return (
      <div className="flex items-center">
        <div className="relative w-12 h-12 flex justify-center items-center">
          {/* Hexagon */}
          <svg
            viewBox="0 0 80 80"
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="40,5 70,20 70,60 40,75 10,60 10,20"
              stroke="#27dddf"
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>
  
          <div className="text-[#27dddf] text-3xl font-bold">
            G
          </div>
        </div>
      </div>
    );
  };
  
  export default Logo;
  