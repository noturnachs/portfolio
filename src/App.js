import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import mainBg from "./images/main_bg.png";
import selfImg from "./images/me.jpg";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/projects";
import ContactMeSection from "./components/contact";
import SocialsSection from "./components/socials";
import EmailModal from "./components/EmailModal";
import Sections from "./section";

const textValues = ["DEVELOP", "LEARN", "GROW", "CODE", "MAINTAIN", "UPDATE"];

function App() {
  const [currentText, setCurrentText] = useState(textValues[0]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hireButtonText, setHireButtonText] = useState("Hire me");
  const [isTextChanging, setIsTextChanging] = useState(false);

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
    <div className="bg-[#121212] min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "bg-black/50 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white hover:text-indigo-400 transition-all duration-300">
              Dan Lius Monsales
            </span>
          </a>

          {/* Desktop Hire Me Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg 
                hover:bg-indigo-700 transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/20
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                focus:ring-offset-[#121212] font-bold text-sm min-w-[120px] overflow-hidden"
            >
              <span
                className={`inline-block transition-all duration-600 ${
                  isTextChanging
                    ? "opacity-0 transform -translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                {hireButtonText}
              </span>
            </button>
          </div>

          {/* Mobile Hire Me Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg 
                hover:bg-indigo-700 transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/20
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                focus:ring-offset-[#121212] min-w-[120px] overflow-hidden"
            >
              <span
                className={`inline-block transition-all duration-600 ${
                  isTextChanging
                    ? "opacity-0 transform -translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                {hireButtonText}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative pt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/90 to-[#121212]" />
          <img
            src={mainBg}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-3">
            <p className="text-indigo-400 text-lg font-semibold tracking-wider">
              WEB DEVELOPER
            </p>
            <div
              className={`text-7xl font-bold text-white transition-all duration-300 ${
                isFlipping
                  ? "opacity-0 transform -translate-y-4"
                  : "opacity-100"
              }`}
            >
              {currentText}
            </div>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Bringing your vision to life with code and creativity.
            </p>

            {/* Profile Section - Restructured */}
            <div className="!mt-24">
              {/* Image and About side by side */}
              <div className="flex flex-col lg:flex-row gap-12 mb-12">
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl -z-10 blur-xl" />
                    <img
                      src={selfImg}
                      alt="Dan Lius Monsales"
                      className="rounded-2xl shadow-2xl w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* About Section */}
                <div className="lg:w-1/2">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl space-y-8 hover:bg-white/10 transition-all duration-300 h-full border border-white/5">
                    {/* Introduction */}
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-white">
                        Hey there! I'm{" "}
                        <span className="text-indigo-400 hover:text-indigo-300 transition-colors relative group">
                          Dan
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </span>
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        A passionate web developer based in the{" "}
                        <span className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                          Philippines
                        </span>
                        , turning creative ideas into powerful digital
                        solutions.
                      </p>
                    </div>

                    {/* Why Choose Me Section */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-white">
                        Why Choose Me?
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                          <span className="text-indigo-400 font-medium">
                            Modern Design
                          </span>
                          <p className="text-gray-300 text-sm mt-1">
                            Clean, responsive websites that work on all devices
                          </p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                          <span className="text-indigo-400 font-medium">
                            Fast Development
                          </span>
                          <p className="text-gray-300 text-sm mt-1">
                            Quick turnaround without compromising quality
                          </p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                          <span className="text-indigo-400 font-medium">
                            24/7 Support
                          </span>
                          <p className="text-gray-300 text-sm mt-1">
                            Always available to help with your website needs
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
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

                    {/* CTA Button */}
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg 
                          hover:bg-indigo-700 transition-all duration-300 
                          transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/20
                          flex items-center space-x-2 font-medium"
                      >
                        <span>Let's Work Together</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills and other sections below */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  SkillsSection,
                  ProjectsSection,
                  ContactMeSection,
                  SocialsSection,
                ].map((Section, index) => (
                  <div
                    key={index}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Section />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Sections />
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Dan Lius Monsales. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Modal */}
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
