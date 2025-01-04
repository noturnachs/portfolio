import { useState } from "react";
import SkillBar from "./SkillBar";
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
    { Icon: ReactOriginal, name: "React", level: 90 },
    { Icon: PhpOriginal, name: "PHP", level: 85 },
    { Icon: Html5Original, name: "HTML5", level: 95 },
    { Icon: NodejsOriginalWordmark, name: "Node.js", level: 80 },
    { Icon: PythonOriginal, name: "Python", level: 75 },
  ];

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
        isExpanded ? "h-[750px] sm:h-[500px]" : "h-[80px]"
      } overflow-hidden`}
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
          isExpanded
            ? "max-h-[520px] sm:max-h-[420px] opacity-100 mt-6"
            : "max-h-0 opacity-0"
        }`}
      >
        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-items-center mb-12">
          {skills.map(({ Icon, name }, index) => (
            <div
              key={index}
              className="group flex flex-col items-center space-y-4"
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

        {/* Skill Bars */}
        <div className="space-y-6">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
