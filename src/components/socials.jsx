import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const SocialsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="text-[#f0e8d5] bg-[#3a4a3b] rounded-lg p-3 bg-opacity-95 text-start lg:max-w-md cursor-pointer shadow-md"
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <div className="anton-regular text-xl">Socials</div>

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

      {/* Social Media Section */}
      <div
        className={`flex flex-col space-y-4 transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[300px] opacity-100 p-5" : "max-h-0 opacity-0 p-0"
        } overflow-hidden`}
      >
        <div className="flex items-center space-x-2">
          <FaFacebook className="text-[#f0e8d5] h-5 w-5" />
          <p>
            <a
              href="https://www.facebook.com/suilnad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0e8d5] hover:text-[#b0cfc4] font-semibold"
            >
              Facebook
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaInstagram className="text-[#f0e8d5] h-5 w-5" />
          <p>
            <a
              href="https://www.instagram.com/noturnahs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0e8d5] hover:text-[#b0cfc4] font-semibold"
            >
              Instagram
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-[#f0e8d5] h-5 w-5" />
          <p>
            <a
              href="https://www.linkedin.com/in/dan-lius-monsales-021a852a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0e8d5] hover:text-[#b0cfc4] font-semibold"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaTelegramPlane className="text-[#f0e8d5] h-5 w-5" />
          <p>
            <a
              href="https://t.me/dan_lius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0e8d5] hover:text-[#b0cfc4] font-semibold"
            >
              Telegram
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <FaWhatsapp className="text-[#f0e8d5] h-5 w-5" />
          <p>
            <a
              href="https://wa.me/639062130621"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0e8d5] hover:text-[#b0cfc4] font-semibold"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialsSection;