import { useState } from "react";
import lImage from "../images/leeyosChat.png";
import vImage from "../images/valoParty.png";
import sImage from "../images/liuslive.png";
import htt from "../images/ht.png";
import tsp from "../images/tsp.png";
import dorm from "../images/dorm.png";
import moneyup from "../images/moneyup.png";

const projects = [
  {
    title: "MoneyUp",
    description:
      "Take Control of Your Financial Future - Personal finance management tool",
    link: "https://moneyup.me/",
    image: moneyup,
  },
  {
    title: "LeeyosChat",
    description: "Chat with strangers all over the world.",
    link: "https://leeyos.com/",
    image: lImage,
  },
  {
    title: "BookIt",
    description: "Book dorms in USC",
    link: "https://dorm-bookingfinal.onrender.com/",
    image: dorm, // Update with the actual image path
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
    title: "HopeThreads",
    description: "Client's website",
    link: "https://hopethreadstest.onrender.com/",
    image: htt,
  },
  {
    title: "TornadoSoundPerfection",
    description: "Client's website",
    link: "https://tornadosoundperfection.com/",
    image: tsp,
  },

  // Add more projects as needed
];

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white font-semibold">Projects</h2>
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
          isExpanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, "_blank");
              }}
              className="group relative bg-black/20 rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {project.description}
                </p>
              </div>

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
