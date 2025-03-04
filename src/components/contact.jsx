import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const ContactMeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:dan@danlius.com",
      description: "Get in touch via email",
    },
    {
      icon: FaPhoneAlt,
      label: "+63 906 213 0621",
      href: "tel:+639062130621",
    },
    {
      icon: FaLinkedin,
      label: "Dan Lius Monsales",
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
  ];

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
        isExpanded ? "h-[400px]" : "h-[80px]"
      } overflow-hidden`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white font-semibold">Contact Me</h2>
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
          isExpanded ? "max-h-[320px] opacity-100 mt-6" : "max-h-0 opacity-0"
        } overflow-auto custom-scrollbar`}
      >
        <div className="grid gap-4">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black/20 p-4 rounded-xl hover:bg-black/40 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
                  <info.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{info.label}</h3>
                  <p className="text-sm text-gray-400">{info.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
