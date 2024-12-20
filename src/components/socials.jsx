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

  return (
    <div
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white font-semibold">Socials</h2>
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
        className={`transition-all duration-500 ease-in-out space-y-4 ${
          isExpanded ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {[
          {
            icon: FaFacebook,
            label: "Facebook",
            href: "https://www.facebook.com/suilnad/",
          },
          {
            icon: FaInstagram,
            label: "Instagram",
            href: "https://www.instagram.com/noturnahs/",
          },
          {
            icon: FaLinkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/dan-lius-monsales-021a852a0/",
          },
          {
            icon: FaTelegramPlane,
            label: "Telegram",
            href: "https://t.me/dan_lius",
          },
          {
            icon: FaWhatsapp,
            label: "WhatsApp",
            href: "https://wa.me/639062130621",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-300 hover:text-indigo-400 transition-colors group"
          >
            <social.icon className="w-5 h-5" />
            <span className="font-medium">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialsSection;
