import React, { useState } from "react";
import { RiComputerLine, RiFileEditFill } from "react-icons/ri";
import { IoPhoneLandscapeOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LiaMoneyBillAlt } from "react-icons/lia";
import { GrStatusGood } from "react-icons/gr";
import { projects } from "./components/projList";

const Sections = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between p-4 relative z-10">
          <div className="md:w-1/2 p-4 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-white">ABOUT ME</h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              I’m a Web Developer who loves making websites that are not just
              functional but also creative. I’m all about working efficiently to
              deliver projects quickly without compromising on quality. My goal
              is to truly connect with my clients, understand their vision, and
              bring it to life with unique & creative solutions.
            </p>
            <button
              onClick={() => setIsProjectsVisible(!isProjectsVisible)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg
                hover:bg-indigo-700 transition-all duration-300
                transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/20
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isProjectsVisible ? "Hide Projects" : "View Projects"}
            </button>
          </div>

          <div className="md:w-1/2 p-4">
            {isProjectsVisible && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={prevProject}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    ←
                  </button>
                </div>

                <div
                  className="group relative aspect-video rounded-lg overflow-hidden bg-black/20 
                    hover:bg-black/40 transition-all duration-300"
                  onClick={() =>
                    window.open(projects[currentProject].link, "_blank")
                  }
                >
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover transform transition-transform 
                      duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 text-white transform 
                    translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <h3 className="text-lg font-semibold">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {projects[currentProject].description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={nextProject}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="max-w-7xl w-full mx-auto p-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              SERVICES I CAN OFFER
            </h2>
            <p className="text-gray-300">Things that I can do for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: RiComputerLine,
                title: "Website Development",
                description:
                  "Website designs are custom made based on clients' preferences.",
              },
              {
                Icon: IoPhoneLandscapeOutline,
                title: "Responsive Designs",
                description: "All designs are mobile and desktop friendly!",
              },
              {
                Icon: RiFileEditFill,
                title: "Free Updates",
                description: "Get free updates for your website.",
              },
              {
                Icon: BiSupport,
                title: "Free Support",
                description: "Get free supports for your website.",
              },
              {
                Icon: LiaMoneyBillAlt,
                title: "Cheap Rates",
                description: "Get the best rates for your website.",
              },
              {
                Icon: GrStatusGood,
                title: "Regular Progress Reports",
                description:
                  "Get regular progress reports for the status of your website.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6
                  hover:bg-white/10 transition-all duration-300
                  transform hover:scale-105"
              >
                <service.Icon
                  size={50}
                  className="text-indigo-400 mb-4 transform transition-all
                    duration-300 group-hover:scale-110"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
