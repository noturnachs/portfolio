import React, { useEffect, useState } from "react";

const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="bg-[#384739] rounded-lg shadow-lg p-6 z-10 max-w-md w-full flex flex-col items-center justify-center">
      <CheckmarkAnimation />
      <h2 className="text-md font-extralight mb-4 text-[#f0e8d5]">
        Message sent! Expect a reply from Dan soon.
      </h2>
      <h2 className="text-md font-bold mb-4 text-[#f0e8d5]">
        Have a nice day!
      </h2>
      <button
        onClick={onClose}
        className="bg-[#f0e8d5] text-black rounded-lg py-1 px-4 hover:bg-[#d3c7a3] transition duration-200 font-bold mt-4"
      >
        Close
      </button>
    </div>
  </div>
);

const CheckmarkAnimation = () => (
  <div className="main-container">
    <div className="check-container">
      <div className="check-background">
        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 25L27.3077 44L58.5 7"
            stroke="white"
            strokeWidth="13"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="check-shadow"></div>
    </div>
  </div>
);

const EmailModal = ({ isOpen, onClose }) => {
  const [closing, setClosing] = useState(false);
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("Hello, I'm interested in your services.");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setClosing(true);
      const timer = setTimeout(() => {
        setClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setEmail("");
      setBody("Hello, I'm interested in your services.");
      setPhoneNumber("");
      setSuccessMessageVisible(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const message = `New hire request from: ${email}\nPhone: ${phoneNumber}\nMessage: ${body}`;
    const botToken = process.env.REACT_APP_BOT_TOKEN;
    const chatId = process.env.REACT_APP_CHAT_ID;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      setSuccessMessageVisible(true);
      setEmail("");
      setBody("Hello, I'm interested in your services.");
      setPhoneNumber("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen && !closing) return null;

  return (
    <>
      {successMessageVisible ? (
        <SuccessModal onClose={() => setSuccessMessageVisible(false)} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
          <div
            className={`bg-[#384739] rounded-lg shadow-lg p-6 z-10 max-w-md w-full modal ${
              isOpen ? "modal-open" : closing ? "modal-close" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4 text-[#f0e8d5]">
              Hire me now!
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg p-2 w-full bg-[#f0e8d5] text-black"
                  placeholder="client@email.com"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone-number"
                  required
                  value={phoneNumber}
                  onChange={
                    (e) =>
                      setPhoneNumber(e.target.value.replace(/[^0-9+]/g, "")) // Allow only numbers and '+'
                  }
                  className="border rounded-lg p-2 w-full bg-[#f0e8d5] text-black"
                  placeholder="Include country code (e.g., +1 9876543210)"
                  maxLength={15} // Set maximum length to 15 characters
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="border rounded-lg p-2 w-full bg-[#f0e8d5] text-black"
                  rows="4"
                />
              </div>
              <div className="flex flex-row space-x-3">
                <button
                  type="submit"
                  className={`w-full p-2 rounded ${
                    isSending ? "bg-gray-400" : "bg-[#f0e8d5]"
                  } transition duration-200 font-bold`}
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send Email"}
                </button>
                <button
                  type="button"
                  onClick={onClose} // Call the onClose function
                  className="bg-[#f0e8d5] text-black rounded-lg py-2 px-4 hover:bg-[#d3c7a3] transition duration-200 font-bold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailModal;
