import React, { useState } from "react";
import { RiComputerLine, RiFileEditFill } from "react-icons/ri";
import { IoPhoneLandscapeOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LiaMoneyBillAlt } from "react-icons/lia";
import { GrStatusGood } from "react-icons/gr";
import { projects } from "./components/projList";
import Glossary from "./components/Glossary";

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
      {/* Tech Terms Section */}
      <section className="py-12 flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="container mx-auto px-4">
          <Glossary />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
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
