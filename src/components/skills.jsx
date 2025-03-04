import { useState, useEffect } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFirebase,
} from "react-icons/si";

const SkillsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, level: 85, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, level: 85, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
      ],
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#339933" },
        { name: "PHP", icon: SiPhp, level: 85, color: "#777BB4" },
        { name: "Python", icon: SiPython, level: 75, color: "#3776AB" },
      ],
    },
    database: {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, level: 75, color: "#FFCA28" },
      ],
    },
    tools: {
      title: "Tools & Deployment",
      skills: [
        { name: "Git", icon: SiGit, level: 90, color: "#F05032" },
        { name: "Docker", icon: SiDocker, level: 70, color: "#2496ED" },
      ],
    },
  };

  const SkillBar = ({ skill }) => (
    <div className="group relative bg-black/20 rounded-lg p-4 hover:bg-black/40 transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div
          className="p-2 rounded-lg transition-all duration-300"
          style={{ backgroundColor: `${skill.color}20` }}
        >
          <skill.icon
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">{skill.name}</span>
            <span className="text-sm" style={{ color: skill.color }}>
              {skill.level}%
            </span>
          </div>
          <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-1000 ease-out"
              style={{
                width: isExpanded ? `${skill.level}%` : "0%",
                backgroundColor: skill.color,
                boxShadow: `0 0 10px ${skill.color}40`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
        isExpanded ? "h-[600px]" : "h-[80px]"
      } overflow-hidden`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white font-semibold">
          Skills & Technologies
        </h2>
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
          isExpanded ? "max-h-[520px] opacity-100 mt-6" : "max-h-0 opacity-0"
        } overflow-auto custom-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Category Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 custom-scrollbar">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === key
                  ? "bg-indigo-500 text-white"
                  : "bg-black/20 text-gray-400 hover:bg-black/40"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillBar skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
