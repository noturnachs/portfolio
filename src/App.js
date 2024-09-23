import React, { useEffect, useState } from "react";
import mainBg from "./images/main_bg.png"; // Import the image
import sec2bg from "./images/section2_bg.png"; // Import the image
import sec3 from "./images/sec3bg.png"; // Import the image
import serv1 from "./images/service1.jpg"; // Import the image
import { GrStatusGood } from "react-icons/gr";

import { RiComputerLine } from "react-icons/ri";
import { IoPhoneLandscapeOutline } from "react-icons/io5";
import { RiFileEditFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { LiaMoneyBillAlt } from "react-icons/lia";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close

const textValues = ["DEVELOP", "LEARN", "GROW"];

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
          isScrolled ? "bg-[#111111]" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 md:pl-40">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white anton-regular transform transition-transform duration-300 hover:scale-105">
              Dan Lius Monsales
            </span>
          </a>
          {/* Desktop menu (visible on medium screens and up) */}
          <ul className="hidden md:flex space-x-8 text-white anton-regular text-xs font-bold">
            <li>
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
            </li>
            <li>
              <a href="/" className="hover:scale-105 transition-transform">
                CONTACT
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
              <FaTimes className="w-5 h-5 text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
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
                className="block py-2 px-3 text-white text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                WORKS
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white text-lg anton-regular tracking-wide"
                onClick={handleMenuItemClick}
              >
                CONTACT
              </a>
            </li>
          </ul>
          <button
            onClick={() => setIsMenuOpen(false)} // Close the menu
            className="absolute top-5 right-5 text-white text-3xl"
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
          <div className="text-white mt-5 font-semibold italic">
            Bringing your vision to life with code and creativity.
          </div>
          <div className="max-w-md items-center flex justify-center space-x-4 p-4 mt-5">
            <a
              href="https://www.facebook.com/suilnad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href="https://www.instagram.com/noturnahs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={15} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center">
          <span className="text-white text-xs animate-bounce">SCROLL DOWN</span>
          <svg
            className="w-4 h-4 text-white animate-bounce mt-0"
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
        </div>
      </main>

      {/* section 2 */}
      <section
        className="min-h-screen flex items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${sec2bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between p-4">
          {/* Text Section */}
          <div className="md:w-1/2 p-4 text-center md:text-left text-white ">
            <h2 className="text-3xl font-bold mb-4 anton-regular">ABOUT ME</h2>
            <p className="md:text-md mb-6 text-sm text-justify work-sans-reg">
              I'm a Web Developer who builds engaging websites. I focus on
              delivering projects quickly and efficiently, ensuring everything
              works smoothly. I aim to create strong connections with clients
              and understand their needs, providing tailored solutions that
              really stand out.
            </p>
            <button
              class="cursor-pointer transition-all bg-[#111111] text-white px-6 py-2 rounded-lg
border-white
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              View Projects
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src={serv1} // Replace with the actual image source
              alt="Portfolio"
              className="w-[692px] h-[692px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section
        className="min-h-screen flex items-center justify-center bg-gray-100"
        style={{
          backgroundImage: `url(${sec3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between p-4">
          {/* Text Section */}
          <div className="md:w-1/2 p-4 text-center md:text-left text-white">
            <h2 className="text-3xl font-bold mb-4 anton-regular">
              SERVICES I CAN OFFER
            </h2>
            <p className="md:text-md mb-6 text-sm text-justify work-sans-reg">
              Things that I can do for you.
            </p>
          </div>

          {/* Services Grid Section */}
          <div className="md:w-1/2 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Service Item 1 */}
              <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
                <RiComputerLine size={50} className="text-[#ece041]" />
                <h3 className="text-md anton-regular mt-2 ">
                  Website Development
                </h3>
                <p className="text-xs mt-2 mb-5 text-start">
                  Website designs are custom made based on clients' preferences.
                </p>
              </div>

              {/* Service Item 2 */}
              <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
                <IoPhoneLandscapeOutline size={50} className="text-[#ece041]" />
                <h3 className="text-md anton-regular mt-2 ">
                  Responsive Designs
                </h3>
                <p className="text-xs mt-2 mb-5 text-start">
                  All designs are mobile and desktop friendly!
                </p>
              </div>

              {/* Service Item 3 */}
              <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
                <RiFileEditFill size={50} className="text-[#ece041]" />
                <h3 className="text-md anton-regular mt-2 ">Free Updates</h3>
                <p className="text-xs mt-2 mb-5 text-start">
                  Get free updates for your website.
                </p>
              </div>
              {/* Service Item 4 */}
              <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
                <BiSupport size={50} className="text-[#ece041]" />
                <h3 className="text-md anton-regular mt-2 ">Free Support</h3>
                <p className="text-xs mt-2 mb-5 text-start">
                  Get free supports for your website.
                </p>
              </div>

              {/* Service Item 5 */}
              <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
                <LiaMoneyBillAlt size={50} className="text-[#ece041]" />
                <h3 className="text-md anton-regular mt-2 ">Cheap Rates</h3>
                <p className="text-xs mt-2 mb-5 text-start">
                  Get the best rates for your website.
                </p>
              </div>

              {/* Service Item 6 */}
              <div className="service-content flex flex-col  p-4 bg-[#1c2d3d] bg-opacity-90 rounded-sm shadow-md text-white">
                <GrStatusGood size={50} className="text-[#ece041]" />
                <h3 className="text-md anton-regular mt-2 ">
                  Regular Progress Reports
                </h3>
                <p className="text-xs mt-2 mb-5 text-start">
                  Get regular progress reports for the status of your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
