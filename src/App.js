import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition
import mainBg from "./images/main_bg.png";
import selfImg from "./images/me.jpg";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/projects";
import ContactMeSection from "./components/contact";
import SocialsSection from "./components/socials";
import EmailModal from "./components/EmailModal";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const textValues = ["DEVELOP", "LEARN", "GROW", "CODE", "MAINTAIN", "UPDATE"];

function App() {
  const [currentText, setCurrentText] = useState(textValues[0]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text flipping effect
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
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300 ${
          isScrolled ? "bg-[#3a4a3b]" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 md:pl-40">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#f0e8d5] anton-regular transform transition-transform duration-300 hover:scale-105">
              Dan Lius Monsales
            </span>
          </a>
          <ul className="hidden md:flex space-x-8 text-[#f0e8d5] anton-regular text-xs font-bold">
            <li>
              <button
                onClick={() => setIsModalOpen(true)} // Open modal
                className="inline-block bg-[#4f6150] text-[#f0e8d5] font-bold text-sm px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-[#2c352f] hover:scale-105"
              >
                Hire me
              </button>
            </li>
          </ul>

          {/* Mobile Hire Me Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsModalOpen(true)} // Open modal
              className="inline-block bg-[#384739] text-[#f0e8d5] font-bold text-sm px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-[#2c352f] hover:scale-105"
            >
              Hire me
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className="min-h-screen flex flex-col items-center justify-start relative overflow-x-hidden"
        style={{
          backgroundImage: `url(${mainBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center z-10 w-auto mx-auto p-4 mt-20 max-w-md">
          <div className="text-2xl relative text-[#ddd] text-[14px] oswald-font mb-5">
            WEB DEVELOPER
          </div>
          <div
            className={`text-8xl relative text-[#ddd] transition-transform duration-600 anton-regular ${
              isFlipping ? "flip" : ""
            }`}
          >
            {currentText}
          </div>
          <div className="text-[#f0e8d5] mt-5 font-semibold italic mb-10">
            Bringing your vision to life with code and creativity.
          </div>

          {/* About Me Section */}
          <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-20 justify-center">
            <div className="flex flex-col items-start space-y-4">
              <div className="relative w-96 h-96 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e7dabb] opacity-25"></div>
                <img
                  src={selfImg}
                  alt="Descriptive text"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              <div className="bg-[#e7dabb] p-4 rounded-md shadow-md">
                <p className="text-[#0e3c00] text-sm font-light leading-relaxed text-start">
                  Hey there! I'm <span className="font-bold">Dan</span>, a web
                  developer based in the{" "}
                  <span className="font-bold">Philippines</span>. I specialize
                  in creating websites and web applications that are both
                  visually appealing and functional. <br />
                  <br />
                  I'm passionate about coding and love to learn new
                  technologies. I'm always looking for new opportunities to grow
                  and improve my skills. Let's work together to bring your ideas
                  to life!
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-full">
              <SkillsSection />
              <ProjectsSection />
              <ContactMeSection />
              <SocialsSection />
            </div>
          </div>

          <div className="max-w-md items-center flex justify-center space-x-4 p-4 mt-5">
            <a
              href="https://www.facebook.com/suilnad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/noturnahs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </main>

      {/* Email Modal */}
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
    </>
  );
}

export default App;
