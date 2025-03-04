import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import mainBg from "./images/main_bg.png";
import selfImg from "./images/me.jpg";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/projects";
import ContactMeSection from "./components/contact";
import SocialsSection from "./components/socials";
import EmailModal from "./components/EmailModal";
import Sections from "./section";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const textValues = ["DEVELOP", "LEARN", "GROW", "CODE", "MAINTAIN", "UPDATE"];

function App() {
  const [currentText, setCurrentText] = useState(textValues[0]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hireButtonText, setHireButtonText] = useState("Hire me");
  const [isTextChanging, setIsTextChanging] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const buttonTexts = [
    "Hire me",
    "Get a quote",
    "Let's talk",
    "Work with me",
    "Start project",
    "Get in touch",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(winScroll / height);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentText((prev) => {
          const currentIndex = textValues.indexOf(prev);
          return textValues[(currentIndex + 1) % textValues.length];
        });
        setIsFlipping(false);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setIsTextChanging(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % buttonTexts.length;
        setHireButtonText(buttonTexts[currentIndex]);
        setIsTextChanging(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sendVisitNotification = async () => {
      const botToken = process.env.REACT_APP_BOT_TOKEN;
      const visitChannelId = process.env.REACT_APP_VISIT_CHANNEL_ID;

      // Check if we've already sent a notification in the last hour
      const lastVisitTime = localStorage.getItem("lastVisitTime");
      const now = new Date();
      if (lastVisitTime && now - new Date(lastVisitTime) < 3600000) {
        // 1 hour
        return;
      }

      try {
        // Basic device/browser info
        const userAgent = window.navigator.userAgent;
        const screenSize = `${window.screen.width}x${window.screen.height}`;
        const colorDepth = window.screen.colorDepth;
        const pixelRatio = window.devicePixelRatio;
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const language = window.navigator.language;
        const platform = window.navigator.platform;
        const vendor = window.navigator.vendor;
        const memory = navigator?.deviceMemory || "Not available";
        const cores = navigator?.hardwareConcurrency || "Not available";
        const connection =
          navigator?.connection?.effectiveType || "Not available";

        // Get referrer information
        const referrer = document.referrer || "Direct visit";
        const entryPage = window.location.pathname;

        // Performance metrics
        const performance = window.performance;
        const loadTime =
          performance?.timing?.domContentLoadedEventEnd -
          performance?.timing?.navigationStart;

        // Browser capabilities
        const webGL = (() => {
          try {
            const canvas = document.createElement("canvas");
            return (
              !!window.WebGLRenderingContext &&
              (canvas.getContext("webgl") ||
                canvas.getContext("experimental-webgl"))
            );
          } catch (e) {
            return false;
          }
        })()
          ? "Supported"
          : "Not supported";

        const message = `🌐 New Website Visit

📅 Date: ${now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
⏰ Time: ${now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })}

📱 Device Information:
• Platform: ${platform}
• Screen: ${screenSize} (${pixelRatio}x ratio)
• Color Depth: ${colorDepth}-bit
• Memory: ${memory}GB
• CPU Cores: ${cores}
• Connection: ${connection}

🌍 User Environment:
• Browser: ${vendor}
• Language: ${language}
• Timezone: ${timeZone}
• WebGL: ${webGL}

🔍 Visit Details:
• Referrer: ${referrer}
• Entry Page: ${entryPage}
• Page Load Time: ${loadTime}ms

📊 Technical Details:
${userAgent}`;

        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: visitChannelId,
            text: message,
          }),
        });

        // Save visit time
        localStorage.setItem("lastVisitTime", now.toString());
      } catch (error) {
        console.error("Failed to send visit notification:", error);
      }
    };

    sendVisitNotification();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-indigo-600/20 z-50">
        <motion.div
          className="h-full bg-indigo-600"
          initial={{ scaleX: 0 }}
          style={{
            transformOrigin: "0%",
            scaleX: scrollProgress,
          }}
        />
      </div>

      {/* Enhanced Navbar with responsive text */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all duration-500 ${
          isScrolled
            ? "bg-black/50 shadow-lg shadow-black/10 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-indigo-400 transition-all duration-300 truncate">
              Dan Lius Monsales
            </span>
          </motion.a>

          {/* Enhanced Hire Me Button with responsive padding */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="px-3 sm:px-6 py-2 sm:py-2.5 bg-indigo-600 text-white rounded-lg 
              hover:bg-indigo-700 transition-all duration-300 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
              focus:ring-offset-[#121212] font-medium text-xs sm:text-sm min-w-[100px] sm:min-w-[140px]
              border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className={`inline-block transition-all duration-300 ${
                isTextChanging
                  ? "opacity-0 transform -translate-y-4"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              {hireButtonText}
            </span>
          </motion.button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Background with parallax effect */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            y: scrollProgress * 100,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/90 to-[#121212]" />
          <img
            src={mainBg}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-20">
          {/* Enhanced Hero Section with responsive text */}
          <motion.div
            className="text-center space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-base sm:text-lg font-semibold tracking-wider text-indigo-400"
              whileHover={{ scale: 1.05 }}
            >
              WEB DEVELOPER
            </motion.p>
            <motion.div
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white transition-all duration-300 ${
                isFlipping
                  ? "opacity-0 transform -translate-y-4"
                  : "opacity-100"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              {currentText}
            </motion.div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto px-4">
              Bringing your vision to life with code and creativity.
            </p>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-12 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FiChevronDown className="w-6 h-6 mx-auto text-gray-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Section with responsive spacing */}
          <div className="mt-12 sm:mt-24">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 mb-6 sm:mb-12">
              {/* Image Section with responsive sizing */}
              <motion.div
                className="lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-square max-w-[280px] sm:max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl -z-10 blur-xl" />
                  <img
                    src={selfImg}
                    alt="Dan Lius Monsales"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* About Section with responsive text and spacing */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-8 rounded-2xl space-y-4 sm:space-y-8 hover:bg-white/10 transition-all duration-300 h-full border border-white/5">
                  {/* Introduction with responsive text */}
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Hey there! I'm{" "}
                      <span className="text-indigo-400 hover:text-indigo-300 transition-colors relative group">
                        Dan
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      A passionate web developer based in the{" "}
                      <span className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                        Philippines
                      </span>
                      , turning creative ideas into powerful digital solutions.
                    </p>
                  </div>

                  {/* Why Choose Me Section with responsive grid */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      Why Choose Me?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Feature cards with responsive text */}
                      <div className="bg-black/20 p-3 sm:p-4 rounded-lg border border-white/5">
                        <span className="text-indigo-400 font-medium text-sm sm:text-base">
                          Modern Design
                        </span>
                        <p className="text-gray-300 text-xs sm:text-sm mt-1">
                          Clean, responsive websites that work on all devices
                        </p>
                      </div>
                      <div className="bg-black/20 p-3 sm:p-4 rounded-lg border border-white/5">
                        <span className="text-indigo-400 font-medium text-sm sm:text-base">
                          Fast Development
                        </span>
                        <p className="text-gray-300 text-xs sm:text-sm mt-1">
                          Quick turnaround without compromising quality
                        </p>
                      </div>
                      <div className="bg-black/20 p-3 sm:p-4 rounded-lg border border-white/5">
                        <span className="text-indigo-400 font-medium text-sm sm:text-base">
                          24/7 Support
                        </span>
                        <p className="text-gray-300 text-xs sm:text-sm mt-1">
                          Always available to help with your website needs
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info with responsive text */}
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      With a focus on{" "}
                      <span className="text-indigo-400 font-medium">
                        user experience
                      </span>{" "}
                      and{" "}
                      <span className="text-indigo-400 font-medium">
                        performance
                      </span>
                      , I create websites that not only look great but also
                      deliver results for your business.
                    </p>
                  </div>

                  {/* CTA Button with responsive sizing */}
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => setIsModalOpen(true)}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg 
                        hover:bg-indigo-700 transition-all duration-300 
                        text-sm sm:text-base font-medium flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Let's Work Together</span>
                      <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Grid Sections with responsive gap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div id="skills" className="animate-fade-in-up">
                <SkillsSection />
              </div>
              <div id="projects" className="animate-fade-in-up">
                <ProjectsSection />
              </div>
              <div id="contact" className="animate-fade-in-up">
                <ContactMeSection />
              </div>
              <div id="socials" className="animate-fade-in-up">
                <SocialsSection />
              </div>
            </div>
          </div>
        </div>

        <Sections />
      </main>

      {/* Footer will now stick to bottom */}
      <footer className="bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Dan Lius Monsales
              </h3>
              <p className="text-sm text-gray-400">
                Turning creative ideas into powerful digital solutions
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/dan-lius-monsales-021a852a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => {
                      document.getElementById("skills")?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm cursor-pointer"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      document.getElementById("projects")?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:monsalesdanlius.stem1@gmail.com"
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    monsalesdanlius.stem1@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">Philippines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Dan Lius Monsales. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Enhanced Modal */}
      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <EmailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </CSSTransition>
    </div>
  );
}

export default App;
