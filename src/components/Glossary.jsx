import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";

const terms = [
  {
    term: "Website",
    definition:
      "Your business's home on the internet where customers can find information about you, your services, and how to contact you. Just like a physical store, but online!",
  },
  {
    term: "Web Hosting",
    definition:
      "Think of it as renting a space on the internet where your website lives. Just like how a shop needs a physical location, your website needs a place to 'live' online.",
  },
  {
    term: "Domain Name",
    definition:
      "Your website's address (like www.yourcompany.com) that people type to find you online. It's like your business's street address, but for the internet.",
  },
  {
    term: "Responsive Design",
    definition:
      "Makes your website look good on all devices - phones, tablets, and computers. Your site automatically adjusts to fit any screen size, so it's always easy to read and use.",
  },

  {
    term: "SSL Certificate",
    definition:
      "The padlock symbol you see in your browser that keeps your website secure. It protects your visitors' information (like passwords and credit cards) - think of it as a security guard for your website. An SSL certificate usually comes free with your domain registration.",
  },
  {
    term: "CMS",
    definition:
      "A simple tool that lets you update your website's text and pictures yourself - no computer expert needed! It's like having an easy-to-use remote control for your website.",
  },
];

const Glossary = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = terms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-4">
            <IoBookOutline className="text-3xl text-indigo-400" />
            <div>
              <h2 className="text-2xl text-white font-semibold">
                Tech Terms Glossary
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Essential terms explained for non-technical clients
              </p>
            </div>
          </div>
          <div
            className={`transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-6 h-6 text-indigo-400"
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
            isExpanded ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search technical terms..."
              className="w-full px-5 py-4 rounded-xl bg-black/30 border border-white/10 
                text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500
                transition-colors duration-300 pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="space-y-4 mt-6 max-h-[500px] overflow-y-auto custom-scrollbar">
            {filteredTerms.map((item, index) => (
              <div
                key={index}
                className="bg-black/30 rounded-xl p-6 hover:bg-black/40 transition-colors duration-300 border border-white/5"
              >
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">
                  {item.term}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
            {filteredTerms.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No terms found matching your search
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
