import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
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
    title: "TornadoSoundPerfection",
    description: "Elevate your event with premium audio and lighting equipment",
    link: "https://tornadosoundperfection.com/",
    image: tsp,
    technologies: ["React", "TailwindCSS", "Node.js", "Express"],
    featured: true,
    status: "active",
  },
  {
    title: "AlphaSys",
    description:
      "From ECC processing to compliance reporting, we've helped 500+ companies stay compliant while saving time and resources.",
    link: "https://alphasys.share.zrok.io/",
    image: alphasys,
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    featured: true,
    status: "active",
  },
  {
    title: "Serenity",
    description:
      "Experience pure tranquility in the mountains of Busay, Cebu City",
    link: "https://serenity.share.zrok.io/",
    image: serenity,
    technologies: ["React", "Express", "MongoDB", "TailwindCSS"],
    featured: true,
    status: "active",
  },
  {
    title: "Url Shortener",
    description: "URL shortening service.",
    link: "https://lius.live/",
    image: sImage,
    technologies: ["React", "Express", "MongoDB"],
    featured: true,
    status: "active",
  },
  {
    title: "MoneyUp",
    description: "Personal finance management tool",
    link: "https://moneyup.me/",
    image: moneyup,
    technologies: ["React", "Node.js", "MongoDB"],
    featured: false,
    status: "archived",
  },
  {
    title: "LeeyosChat",
    description: "Chat with strangers all over the world.",
    link: "https://leeyos.com/",
    image: lImage,
    technologies: ["React", "Socket.io", "Express"],
    featured: false,
    status: "archived",
  },
  {
    title: "BookIt",
    description: "Dormitory booking system for USC students.",
    link: "https://dorm-bookingfinal.onrender.com/",
    image: dorm,
    technologies: ["React", "Node.js", "MongoDB"],
    featured: false,
    status: "archived",
  },
  {
    title: "ValoParty",
    description: "Find Valorant playmates [Archived]",
    link: "https://valoparty.com/",
    image: vImage,
    technologies: ["React", "Firebase", "TailwindCSS"],
    featured: false,
    status: "archived",
  },
  {
    title: "HopeThreads",
    description:
      "Portfolio for hopethreads. Client did not continue with the project [Archived]",
    link: "https://hopethreadstest.onrender.com/",
    image: htt,
    technologies: ["React", "Node.js", "MongoDB"],
    featured: false,
    status: "archived",
  },
];

// Add this component for the archive reason tooltip
const ArchiveInfo = () => (
  <div className="group relative inline-block">
    <svg
      className="w-4 h-4 text-yellow-300/80 cursor-help"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <div
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2
                  bg-black/90 text-xs text-yellow-300/90 rounded-lg opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300
                  pointer-events-none whitespace-normal text-center"
    >
      Project archived due to hosting costs. Available for demonstration upon
      request.
    </div>
  </div>
);

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative bg-black/30 rounded-xl overflow-hidden 
                 transition-all duration-500 border border-white/5
                 shadow-lg h-full ${
                   project.status === "archived"
                     ? "hover:border-yellow-500/30 hover:bg-black/50"
                     : "hover:border-indigo-500/30 hover:bg-black/40"
                 }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Archive Overlay for archived projects */}
      {project.status === "archived" && (
        <div className="absolute inset-0 bg-black/40 z-10" />
      )}

      {/* Project Image with Overlay */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transform transition-transform duration-700 
                    ${
                      project.status === "archived"
                        ? "filter grayscale"
                        : "group-hover:scale-110"
                    }`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                      opacity-80 group-hover:opacity-90 transition-opacity duration-500"
        />

        {/* Tech Stack Tags - Improved mobile display */}
        <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className={`px-1.5 sm:px-2 py-1 text-[10px] sm:text-xs font-medium rounded-full border
                       ${
                         project.status === "archived"
                           ? "bg-yellow-500/10 text-yellow-300 border-yellow-500/30"
                           : "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                       }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Info - Improved mobile layout */}
      <div className="p-4 sm:p-6 relative z-20">
        <h3
          className={`text-lg sm:text-xl font-bold mb-2 transition-colors duration-300
                     ${
                       project.status === "archived"
                         ? "text-yellow-300 group-hover:text-yellow-200"
                         : "text-white group-hover:text-indigo-400"
                     }`}
        >
          {project.title}
        </h3>
        <p
          className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3 sm:line-clamp-2 
                    group-hover:line-clamp-none transition-all duration-300"
        >
          {project.description}
        </p>

        {/* Status and Actions - Mobile optimized */}
        <div className="flex items-center justify-between mt-2 sm:mt-4">
          <div className="flex items-center gap-2 sm:gap-4">
            {project.status === "archived" ? (
              <div
                className="text-xs sm:text-sm text-yellow-300/80 flex items-center gap-1.5 sm:gap-2 
                            border border-yellow-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8"
                  />
                </svg>
                <span className="whitespace-nowrap">Archived</span>
                <ArchiveInfo />
              </div>
            ) : (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium 
                         text-indigo-400 hover:text-indigo-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaExternalLinkAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="whitespace-nowrap">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Featured Badge - Mobile optimized */}
      {project.featured && (
        <div
          className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] sm:text-xs 
                      font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg z-20"
        >
          Featured
        </div>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const archivedProjects = projects.filter((project) => !project.featured);

  return (
    <div className="py-8 sm:py-16 bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Featured Projects Section */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            <span className="text-indigo-400">Featured</span> Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            A collection of my best development work
          </p>
        </motion.div>

        {/* Featured Projects Grid - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Archived Projects Section - Mobile optimized */}
        {archivedProjects.length > 0 && (
          <div className="mt-12 sm:mt-20">
            <motion.div
              className="text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Archive
              </h3>
              <div className="flex items-center justify-center gap-2 text-yellow-300/80 px-4">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-base sm:text-lg">
                  Projects archived due to hosting costs - Available for
                  demonstration
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {archivedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
