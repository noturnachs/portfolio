import React, { useEffect, useState } from "react";
import mainBg from "./images/main_bg.png"; // Import the image
import selfImg from "./images/me.jpg";
// import selfImg2 from "./images/me2.jpg";

// import sec2bg from "./images/section2_bg.png"; // Import the image
// import sec3 from "./images/sec3bg.png"; // Import the image
// import serv1 from "./images/service1.jpg"; // Import the image
// import { GrStatusGood } from "react-icons/gr";

// import { RiComputerLine } from "react-icons/ri";
// import { IoPhoneLandscapeOutline } from "react-icons/io5";
// import { RiFileEditFill } from "react-icons/ri";
// import { BiSupport } from "react-icons/bi";
// import { LiaMoneyBillAlt } from "react-icons/lia";

import SkillsSection from "./components/skills";
import ProjectsSection from "./components/projects";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const textValues = ["DEVELOP", "LEARN", "GROW", "CODE", "MAINTAIN", "UPDATE"];

function App() {
  const [currentText, setCurrentText] = useState(textValues[0]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px
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
      }, 300); // Change text at 300ms (half of 600ms)

      setTimeout(() => {
        setIsFlipping(false);
      }, 600); // Duration of the flip animation
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <>
      {/* Transparent Navbar */}
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
          {/* Desktop menu (visible on medium screens and up) */}
          <ul className="hidden md:flex space-x-8 text-[#f0e8d5] anton-regular text-xs font-bold">
            {/* <li>
              <a href="/" className="hover:scale-105 transition-transform ">
                HOME
              </a>
            </li>
            <li>
              <a href="/" className="hover:scale-105 transition-transform">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/" className="hover:scale-105 transition-transform">
                SERVICES
              </a>
            </li>
            <li>
              <a href="/" className="hover:scale-105 transition-transform">
                WORKS
              </a>
            </li> */}
            <li>
              <a
                href="/"
                className="inline-block bg-[#384739] text-[#f0e8d5] font-bold text-sm px-4 py-2 rounded transition-transform duration-300 ease-in-out hover:bg-[#2c352f] hover:scale-105"
              >
                Hire me
              </a>
            </li>
          </ul>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-[#f0e8d5]" />
            ) : (
              <FaBars className="w-5 h-5 text-[#f0e8d5]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <ul className="font-medium flex flex-col items-center justify-center h-full space-y-8">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-[#f0e8d5] text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-[#f0e8d5] text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-[#f0e8d5] text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-[#f0e8d5] text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                WORKS
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-[#f0e8d5] text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                CONTACT
              </a>
            </li>
          </ul>
          <button
            onClick={() => setIsMenuOpen(false)} // Close the menu
            className="absolute top-5 right-5 text-[#f0e8d5] text-3xl"
          >
            <FaTimes />
          </button>
        </div>
      </nav>

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
          {/* about me short */}
          <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-20 justify-center">
            <div className="flex flex-col items-start space-y-4">
              <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e7dabb] opacity-25"></div>
                <img
                  src={selfImg}
                  alt="Descriptive text"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              <div className="bg-[#e7dabb] p-4 rounded-md shadow-md">
                <p className="text-[#0e3c00] text-sm font-light leading-relaxed text-start">
                  Hey there! I'm <span className="font-bold">Dan</span>, a web
                  developer based in the{" "}
                  <span className="font-bold">Philippines</span>. I specialize
                  in creating websites and web applications that are both
                  visually appealing and functional. <br></br>
                  <br></br>I'm passionate about coding and love to learn new
                  technologies. I'm always looking for new opportunities to grow
                  and improve my skills. Let's work together to bring your ideas
                  to life!
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-full">
              {" "}
              <SkillsSection />
              <ProjectsSection />
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

        {/* <div className="absolute bottom-10 flex flex-col items-center">
          <span className="text-[#f0e8d5] text-xs animate-bounce">SCROLL DOWN</span>
          <svg
            className="w-4 h-4 text-[#f0e8d5] animate-bounce mt-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div> */}
      </main>
    </>
  );
}

export default App;
