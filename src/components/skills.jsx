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

  const skills = [
    { Icon: ReactOriginal, name: "React" },
    { Icon: PhpOriginal, name: "PHP" },
    { Icon: Html5Original, name: "HTML5" },
    { Icon: NodejsOriginalWordmark, name: "Node.js" },
    { Icon: PythonOriginal, name: "Python" },
  ];

  return (
    <div
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white font-semibold">Skills</h2>
        <div
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 items-center justify-items-center">
          {skills.map(({ Icon, name }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-2"
            >
              <div className="relative">
                <Icon
                  size={50}
                  className="transform transition-all duration-300 group-hover:scale-125 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                />
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 rounded-full transition-colors duration-300" />
              </div>
              <span className="text-sm text-gray-400 group-hover:text-indigo-400 transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
