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
                focus:ring-offset-[#121212]"
            >
              Hire me
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
                focus:ring-offset-[#121212]"
            >
              Hire me
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

            {/* Profile Section */}
            <div className="!mt-24 grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl -z-10 blur-xl" />
                  <img
                    src={selfImg}
                    alt="Dan Lius Monsales"
                    className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl">
                  <p className="text-gray-300 leading-relaxed">
                    Hey there! I'm <span className="text-indigo-400">Dan</span>,
                    a web developer based in the{" "}
                    <span className="text-indigo-400">Philippines</span>. I
                    specialize in creating websites and web applications that
                    are both visually appealing and functional.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <SkillsSection />
                <ProjectsSection />
                <ContactMeSection />
                <SocialsSection />
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
