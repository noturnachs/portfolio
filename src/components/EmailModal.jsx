import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [formErrors, setFormErrors] = useState({});
  const [subject, setSubject] = useState("");
  const [budget, setBudget] = useState(8000);
  const [timeline, setTimeline] = useState("");
  const [isUnsureBudget, setIsUnsureBudget] = useState(false);

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

    // Basic validation
    if (!email || !phoneNumber || !body || !subject || !timeline) {
      alert("Please fill in all required fields");
      setIsSending(false);
      return;
    }

    const message = `New Project Request

Email: ${email}
Phone: ${phoneNumber}
Subject: ${subject}
Budget: ${
      isUnsureBudget
        ? "To be discussed"
        : `₱${parseInt(budget).toLocaleString()}`
    }
Timeline: ${timeline}

Message:
${body}
`;

    const botToken = process.env.REACT_APP_BOT_TOKEN;
    const chatId = process.env.REACT_APP_CHAT_ID;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccessMessageVisible(true);

      // Reset form
      setEmail("");
      setBody("Hello, I'm interested in your services.");
      setPhoneNumber("");
      setSubject("");
      setIsUnsureBudget(false);
      setBudget(8000);
      setTimeline("");
      setFormErrors({});
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen && !closing) return null;

  return (
    <AnimatePresence>
      {successMessageVisible ? (
        <SuccessModal
          onClose={() => {
            setSuccessMessageVisible(false);
            onClose();
          }}
        />
      ) : (
        (isOpen || closing) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={onClose}
            ></div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 z-10 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white">
                  Let's Work Together
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 
                    text-white focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="New Website">New Website</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Maintenance">Website Maintenance</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg bg-black/20 border 
                    ${formErrors.email ? "border-red-500" : "border-white/10"}
                    text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500`}
                    placeholder="Your email"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
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

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-white text-sm">
                      Estimated Budget (PHP)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="unsureBudget"
                        checked={isUnsureBudget}
                        onChange={(e) => setIsUnsureBudget(e.target.checked)}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="unsureBudget"
                        className="text-gray-300 text-sm"
                      >
                        Not sure yet
                      </label>
                    </div>
                  </div>

                  {!isUnsureBudget ? (
                    <>
                      <input
                        type="range"
                        min="8000"
                        max="500000"
                        step="1000"
                        value={budget}
                        className="w-full accent-indigo-500"
                        onChange={(e) => setBudget(e.target.value)}
                        disabled={isUnsureBudget}
                      />
                      <div className="flex justify-between text-gray-400 text-sm">
                        <span>₱8,000</span>
                        <span>₱{parseInt(budget).toLocaleString()}</span>
                        <span>₱500,000+</span>
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-400 text-sm italic">
                      We can discuss the budget during our consultation
                    </div>
                  )}
                </div>

                <div>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 
                      text-white focus:outline-none focus:border-indigo-500"
                    required
                  >
                    <option value="">When do you need this completed?</option>
                    <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                    <option value="Within a month">Within a month</option>
                    <option value="In 2-3 months">In 2-3 months</option>
                    <option value="Just planning ahead">
                      Just planning ahead
                    </option>
                  </select>
                  {formErrors.timeline && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.timeline}
                    </p>
                  )}
                </div>

                {isSending && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                  </div>
                )}

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
            </motion.div>
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
};

export default EmailModal;
