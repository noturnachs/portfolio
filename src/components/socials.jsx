import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
  FaExternalLinkAlt,
} from "react-icons/fa";

const SocialsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socials = [
    {
      icon: FaFacebook,
      label: "Facebook",
      href: "https://www.facebook.com/suilnad/",
      color: "#1877F2",
      username: "@suilnad",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/danliius/",
      color: "#E4405F",
      username: "@danliius",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dan-lius-monsales-021a852a0/",
      color: "#0A66C2",
      username: "Dan Lius Monsales",
    },
    {
      icon: FaTelegramPlane,
      label: "Telegram",
      href: "https://t.me/dan_lius",
      color: "#26A5E4",
      username: "@dan_lius",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/639062130621",
      color: "#25D366",
      username: "+63906 213 0621",
    },
  ];

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
        isExpanded ? "h-[450px]" : "h-[80px]"
      } overflow-hidden`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white font-semibold">Connect With Me</h2>
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
          isExpanded ? "max-h-[370px] opacity-100 mt-6" : "max-h-0 opacity-0"
        } overflow-auto custom-scrollbar`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-black/20 rounded-xl p-4 hover:bg-black/40 transition-all duration-300 flex items-center justify-between"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center space-x-4">
                <div
                  className="p-3 rounded-lg transition-all duration-300"
                  style={{
                    backgroundColor: `${social.color}20`,
                    transform:
                      hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <social.icon
                    className="w-5 h-5 transition-all duration-300"
                    style={{ color: social.color }}
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-medium text-white">{social.label}</div>
                  <div className="text-sm text-gray-400">{social.username}</div>
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-gray-400 hover:text-white">
                <FaExternalLinkAlt className="w-4 h-4" />
              </div>

              {/* Hover effect overlay */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: social.color }}
              />
            </a>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Feel free to reach out through any platform!
        </div>
      </div>
    </div>
  );
};

export default SocialsSection;
