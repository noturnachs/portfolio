import React, { useEffect, useState } from "react";
import mainBg from "./images/main_bg.png"; // Import the image

const textValues = ["DEVELOP", "LEARN", "GROW"];

function App() {
  const [currentText, setCurrentText] = useState(textValues[0]);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);

      // Change the text immediately before the flip animation reaches halfway
      setTimeout(() => {
        setCurrentText((prev) => {
          const currentIndex = textValues.indexOf(prev);
          return textValues[(currentIndex + 1) % textValues.length];
        });
      }, 300); // Change text at 300ms (half of 600ms)

      // Reset the flip state after the animation duration
      setTimeout(() => {
        setIsFlipping(false);
      }, 600); // Duration of the flip animation
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 p-4 bg-transparent z-20 mx-auto max-w-screen-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold anton-regular">
            Dan Lius
          </div>
          <nav className="text-white">
            <ul className="flex space-x-4 text-xs font-bold">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>WORKS</li>
              <li>CONTACT</li>
            </ul>
          </nav>
        </div>
      </header>
      <main
        className="min-h-screen flex flex-col items-center justify-start relative"
        style={{
          backgroundImage: `url(${mainBg})`, // Use the imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Rotating text */}
        <div className="text-center z-10 w-max mx-auto p-4 mt-20 max-w-md">
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
          <div className="text-white mt-5 work-sans-reg">
            I'm a Web Developer, creating engaging digital experiences.
            Transforming your ideas into functional and user-friendly websites.
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
