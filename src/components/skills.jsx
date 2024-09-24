import { useState } from "react";
import {
  ReactOriginal,
  PhpOriginal,
  Html5Original,
  NodejsOriginalWordmark,
  PythonOriginal,
} from "devicons-react";

const SkillsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="text-[#f0e8d5] bg-[#3a4a3b] rounded-lg p-3 bg-opacity-95 text-start lg:max-w-md cursor-pointer"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <div className="anton-regular text-xl">Skills</div>

        {/* Arrow */}
        <div
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          {/* This can be a simple CSS arrow or an SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Icons Section */}
      <div
        className={`flex flex-row space-x-4 items-center justify-center transition-all duration-500 ease-in-out ${
          isExpanded
            ? "max-h-56 h-min opacity-100 p-5"
            : "max-h-0 opacity-0 p-0"
        } overflow-hidden`}
      >
        <ReactOriginal
          size={50}
          className="transform transition-transform duration-300 hover:scale-150"
        />
        <PhpOriginal
          size={50}
          className="transform transition-transform duration-300 hover:scale-150"
        />
        <Html5Original
          size={50}
          className="transform transition-transform duration-300 hover:scale-150"
        />
        <NodejsOriginalWordmark
          size={50}
          className="transform transition-transform duration-300 hover:scale-150"
        />
        <PythonOriginal
          size={50}
          className="transform transition-transform duration-300 hover:scale-150"
        />
      </div>
    </div>
  );
};

export default SkillsSection;
