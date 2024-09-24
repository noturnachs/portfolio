import { useState } from "react";
import lImage from "../images/leeyosChat.png";
import vImage from "../images/valoParty.png";
import sImage from "../images/liuslive.png";
import htt from "../images/ht.png";

const projects = [
  {
    title: "LeeyosChat",
    description: "Chat with strangers all over the world.",
    link: "https://leeyos.com/",
    image: lImage,
  },
  {
    title: "ValoParty",
    description: "Find valorant teammates.",
    link: "https://valoparty.com/",
    image: vImage,
  },
  {
    title: "Url Shortener",
    description: "Shorten your long urls.",
    link: "https://lius.live/",
    image: sImage,
  },
  {
    title: "HopeThreads - Client Website",
    description: "Client website for HopeThreads.",
    link: "https://hopethreadstest.onrender.com/",
    image: htt,
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="w-full text-[#f0e8d5] bg-[#3a4a3b] rounded-lg bg-opacity-95 text-start cursor-pointer"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center p-3">
        <div className="anton-regular text-xl">Projects</div>

        {/* Arrow */}
        <div
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
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

      {/* Projects Section */}
      <div
        className={`grid grid-cols-1 gap-4 transition-all duration-500 ease-in-out ${
          isExpanded
            ? "max-h-[1000px] opacity-100 p-5"
            : "max-h-0 opacity-0 p-0"
        } overflow-hidden`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2a3a2b] rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => window.open(project.link, "_blank")}
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm mt-1">{project.description}</p>

            {/* Snippet Image Section */}
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="mt-2 w-full h-auto rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
