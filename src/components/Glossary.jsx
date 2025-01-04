import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";

const terms = [
  {
    term: "Website",
    definition:
      "A collection of web pages and related content that is identified by a common domain name and published on at least one web server. Think of it as your digital storefront or online presence that's accessible to anyone with an internet connection.",
  },
  {
    term: "Web Hosting",
    definition:
      "A service that allows your website to be accessible on the internet. It's like renting space on a powerful computer (server) that stores your website files and makes them available 24/7 to visitors.",
  },
  {
    term: "Domain Name",
    definition:
      "Your website's address on the internet (like www.yourcompany.com). It's similar to your physical business address, but for the online world.",
  },
  {
    term: "Responsive Design",
    definition:
      "A design approach that makes your website look and work well on all devices - from desktop computers to mobile phones and tablets. It automatically adjusts to different screen sizes.",
  },
  {
    term: "SEO",
    definition:
      "Search Engine Optimization - practices that help your website appear higher in search results on Google and other search engines, making it easier for potential customers to find you.",
  },
  {
    term: "SSL Certificate",
    definition:
      "A security measure that encrypts data between your website and its visitors, showing as a padlock icon in the browser. It's essential for protecting sensitive information and building trust.",
  },
  {
    term: "CMS",
    definition:
      "Content Management System - a tool that allows you to easily update your website's content without technical knowledge. Think of it as a user-friendly control panel for your website.",
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
