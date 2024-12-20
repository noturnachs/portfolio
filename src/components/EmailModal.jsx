import React, { useEffect, useState } from "react";

const SuccessModal = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 z-10 max-w-md w-full 
      flex flex-col items-center justify-center border border-white/10"
    >
      <div className="mb-6">
        <svg
          className="w-16 h-16 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-xl text-white mb-2">Message Sent!</h2>
      <p className="text-gray-300 text-center mb-6">
        Expect a reply from Dan soon. Have a great day!
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg
          hover:bg-indigo-700 transition-all duration-300
          transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/20
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
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
      const timer = setTimeout(() => setClosing(false), 300);
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

    console.log(botToken, chatId);
    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          ></div>
          <div
            className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 z-10 
              max-w-md w-full border border-white/10 transform transition-all duration-300
              ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Let's Work Together
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 
                    text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500
                    transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/[^0-9+]/g, ""))
                  }
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 
                    text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500
                    transition-colors duration-300"
                  placeholder="Phone number (with country code)"
                  maxLength={15}
                />
              </div>

              <div>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 
                    text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500
                    transition-colors duration-300 min-h-[120px] resize-none"
                  placeholder="Your message"
                  rows="4"
                />
              </div>

              <div className="flex space-x-4 pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300
                    transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-offset-[#121212] ${
                      isSending
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20"
                    }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg font-medium bg-white/5 hover:bg-white/10 
                    transition-all duration-300 transform hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-white/20"
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
