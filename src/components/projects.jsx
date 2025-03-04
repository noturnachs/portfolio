import { useState } from "react";
import lImage from "../images/leeyosChat.png";
import vImage from "../images/valoParty.png";
import sImage from "../images/liuslive.png";
import htt from "../images/ht.png";
import tsp from "../images/tsp.png";
import dorm from "../images/dorm.png";
import moneyup from "../images/moneyup.png";
import alphasys from "../images/alphasys.png";
import serenity from "../images/serenity.png";

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
  {
    title: "AlphaSys",
    description: "Comprehensive IT Solutions and Services",
    link: "https://alphasys.share.zrok.io/",
    image: alphasys,
  },
  {
    title: "Serenity",
    description: "Wellness and Relaxation Platform",
    link: "https://serenity.share.zrok.io/",
    image: serenity,
  },

  // Add more projects as needed
];

const ProjectCard = ({ project }) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
      window.open(project.link, "_blank");
    }}
    className="group relative bg-black/20 rounded-xl overflow-hidden hover:bg-black/40 transition-all duration-300"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
      <p className="text-sm text-gray-300">{project.description}</p>
      <div className="mt-2 flex items-center text-indigo-400 text-sm">
        <span>View Project</span>
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
        isExpanded ? "h-[600px]" : "h-[80px]"
      } overflow-hidden`}
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
          isExpanded ? "max-h-[520px] opacity-100 mt-6" : "max-h-0 opacity-0"
        } overflow-auto custom-scrollbar`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
