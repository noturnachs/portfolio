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
  const [countryCode, setCountryCode] = useState("+1");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [isSending, setIsSending] = useState(false); // New state to track sending status

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
      setCountryCode("+1");
      setSuccessMessageVisible(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true

    const message = `New hire request from: ${email}\nPhone: ${countryCode}${phoneNumber}\nMessage: ${body}`;
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
      setCountryCode("+1");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false); // Reset sending state
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
              <div className="mb-4 flex items-center">
                {" "}
                {/* Added relative positioning */}
                <select
                  id="country-code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border rounded-lg p-2 bg-[#f0e8d5] text-black w-1/4 mr-2 h-10"
                >
                  <option value="+1">+1</option>
                  <option value="+93">+93 </option>
                  <option value="+355">+355 </option>
                  <option value="+213">+213 </option>
                  <option value="+376">+376 </option>
                  <option value="+244">+244 </option>
                  <option value="+1">+1 </option>
                  <option value="+54">+54 </option>
                  <option value="+374">+374 </option>
                  <option value="+297">+297 </option>
                  <option value="+61">+61 </option>
                  <option value="+43">+43 </option>
                  <option value="+994">+994 </option>
                  <option value="+1">+1 </option>
                  <option value="+973">+973 </option>
                  <option value="+880">+880 </option>
                  <option value="+1">+1 </option>
                  <option value="+375">+375 </option>
                  <option value="+32">+32 </option>
                  <option value="+501">+501 </option>
                  <option value="+229">+229 </option>
                  <option value="+1">+1 </option>
                  <option value="+975">+975 </option>
                  <option value="+591">+591 </option>
                  <option value="+387">+387 </option>
                  <option value="+267">+267 </option>
                  <option value="+55">+55 </option>
                  <option value="+1">+1 </option>
                  <option value="+673">+673 </option>
                  <option value="+359">+359 </option>
                  <option value="+226">+226 </option>
                  <option value="+257">+257 </option>
                  <option value="+855">+855 </option>
                  <option value="+237">+237 </option>
                  <option value="+1">+1 </option>
                  <option value="+238">+238 </option>
                  <option value="+345">+345 </option>
                  <option value="+236">+236 </option>
                  <option value="+61">+61 </option>
                  <option value="+56">+56 </option>
                  <option value="+86">+86 </option>
                  <option value="+61">+61 </option>
                  <option value="+61">+61 </option>
                  <option value="+57">+57 </option>
                  <option value="+269">+269 </option>
                  <option value="+242">+242 </option>
                  <option value="+243">+243</option>
                  <option value="+682">+682 </option>
                  <option value="+506">+506 </option>
                  <option value="+225">+225 </option>
                  <option value="+385">+385 </option>
                  <option value="+53">+53 </option>
                  <option value="+599">+599 </option>
                  <option value="+357">+357 </option>
                  <option value="+420">+420 </option>
                  <option value="+45">+45 </option>
                  <option value="+253">+253 </option>
                  <option value="+1">+1 </option>
                  <option value="+1809">+1809 </option>
                  <option value="+593">+593 </option>
                  <option value="+20">+20 </option>
                  <option value="+503">+503 </option>
                  <option value="+240">+240 </option>
                  <option value="+291">+291 </option>
                  <option value="+372">+372 </option>
                  <option value="+268">+268 </option>
                  <option value="+251">+251 </option>
                  <option value="+500">+500 </option>
                  <option value="+298">+298 </option>
                  <option value="+679">+679 </option>
                  <option value="+358">+358 </option>
                  <option value="+33">+33 </option>
                  <option value="+594">+594 </option>
                  <option value="+689">+689 </option>
                  <option value="+241">+241 </option>
                  <option value="+220">+220 </option>
                  <option value="+995">+995 </option>
                  <option value="+49">+49 </option>
                  <option value="+233">+233 </option>
                  <option value="+350">+350 </option>
                  <option value="+30">+30 </option>
                  <option value="+299">+299 </option>
                  <option value="+1">+1 </option>
                  <option value="+590">+590 </option>
                  <option value="+1">+1 </option>
                  <option value="+502">+502 </option>
                  <option value="+224">+224 </option>
                  <option value="+245">+245 </option>
                  <option value="+592">+592 </option>
                  <option value="+509">+509 </option>
                  <option value="+504">+504 </option>
                  <option value="+36">+36 </option>
                  <option value="+354">+354 </option>
                  <option value="+91">+91 </option>
                  <option value="+62">+62 </option>
                  <option value="+98">+98 </option>
                  <option value="+964">+964 </option>
                  <option value="+353">+353 </option>
                  <option value="+972">+972 </option>
                  <option value="+39">+39 </option>
                  <option value="+1">+1 </option>
                  <option value="+81">+81 </option>
                  <option value="+44">+44 </option>
                  <option value="+962">+962 </option>
                  <option value="+7">+7 </option>
                  <option value="+254">+254 </option>
                  <option value="+686">+686 </option>
                  <option value="+383">+383 </option>
                  <option value="+965">+965 </option>
                  <option value="+996">+996 </option>
                  <option value="+856">+856 </option>
                  <option value="+371">+371 </option>
                  <option value="+961">+961 </option>
                  <option value="+266">+266 </option>
                  <option value="+231">+231 </option>
                  <option value="+218">+218 </option>
                  <option value="+423">+423 </option>
                  <option value="+370">+370 </option>
                  <option value="+352">+352 </option>
                  <option value="+853">+853 </option>
                  <option value="+389">+389 </option>
                  <option value="+261">+261 </option>
                  <option value="+265">+265 </option>
                  <option value="+60">+60 </option>
                  <option value="+960">+960 </option>
                  <option value="+223">+223 </option>
                  <option value="+356">+356 </option>
                  <option value="+692">+692 </option>
                  <option value="+596">+596 </option>
                  <option value="+222">+222 </option>
                  <option value="+230">+230 </option>
                  <option value="+262">+262 </option>
                  <option value="+52">+52 </option>
                  <option value="+691">+691 </option>
                  <option value="+373">+373 </option>
                  <option value="+377">+377 </option>
                  <option value="+976">+976 </option>
                  <option value="+382">+382 </option>
                  <option value="+1664">+1664 </option>
                  <option value="+212">+212 </option>
                  <option value="+258">+258 </option>
                  <option value="+95">+95 </option>
                  <option value="+264">+264 </option>
                  <option value="+674">+674 </option>
                  <option value="+977">+977 </option>
                  <option value="+31">+31 </option>
                  <option value="+599">+599 </option>
                  <option value="+64">+64 </option>
                  <option value="+505">+505 </option>
                  <option value="+227">+227 </option>
                  <option value="+234">+234 </option>
                  <option value="+683">+683 </option>
                  <option value="+850">+850 </option>
                  <option value="+1">+1 </option>
                  <option value="+47">+47 </option>
                  <option value="+968">+968 </option>
                  <option value="+92">+92 </option>
                  <option value="+680">+680 </option>
                  <option value="+970">+970 </option>
                  <option value="+507">+507 </option>
                  <option value="+675">+675 </option>
                  <option value="+595">+595 </option>
                  <option value="+51">+51 </option>
                  <option value="+63">+63 </option>
                  <option value="+48">+48 </option>
                  <option value="+351">+351 </option>
                  <option value="+1">+1 </option>
                  <option value="+974">+974 </option>
                  <option value="+40">+40 </option>
                  <option value="+7">+7 </option>
                  <option value="+250">+250 </option>
                  <option value="+590">+590 </option>
                  <option value="+1">+1 </option>
                  <option value="+1">+1 </option>
                  <option value="+1">+1 </option>
                  <option value="+590">+590 </option>
                  <option value="+1">+1 </option>
                  <option value="+508">+508 </option>
                  <option value="+1">+1 </option>
                  <option value="+685">+685 </option>
                  <option value="+378">+378 </option>
                  <option value="+239">+239</option>
                  <option value="+966">+966 </option>
                  <option value="+221">+221 </option>
                  <option value="+381">+381 </option>
                  <option value="+248">+248 </option>
                  <option value="+232">+232 </option>
                  <option value="+65">+65 </option>
                  <option value="+421">+421 </option>
                  <option value="+386">+386 </option>
                  <option value="+677">+677 </option>
                  <option value="+252">+252 </option>
                  <option value="+27">+27 </option>
                  <option value="+82">+82 </option>
                  <option value="+211">+211 </option>
                  <option value="+34">+34 </option>
                  <option value="+94">+94 </option>
                  <option value="+249">+249 </option>
                  <option value="+597">+597 </option>
                  <option value="+268">+268 </option>
                  <option value="+41">+41 </option>
                  <option value="+963">+963 </option>
                  <option value="+886">+886 </option>
                  <option value="+992">+992 </option>
                  <option value="+255">+255 </option>
                  <option value="+66">+66 </option>
                  <option value="+670">+670 </option>
                  <option value="+228">+228 </option>
                  <option value="+676">+676 </option>
                  <option value="+1">+1 </option>
                  <option value="+216">+216 </option>
                  <option value="+90">+90 </option>
                  <option value="+993">+993 </option>
                  <option value="+1">+1 </option>
                  <option value="+688">+688 </option>
                  <option value="+256">+256 </option>
                  <option value="+380">+380 </option>
                  <option value="+971">+971 </option>
                  <option value="+44">+44 </option>
                  <option value="+1">+1 </option>
                  <option value="+598">+598 </option>
                  <option value="+998">+998 </option>
                  <option value="+678">+678 </option>
                  <option value="+379">+379 </option>
                  <option value="+58">+58 </option>
                  <option value="+84">+84 </option>
                  <option value="+681">+681 </option>
                  <option value="+967">+967 </option>
                  <option value="+260">+260 </option>
                  <option value="+263">+263 </option>
                </select>
                <input
                  type="tel"
                  id="phone-number"
                  required
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/\D/g, ""))
                  } // Allow only numbers
                  className="border rounded-lg p-2 bg-[#f0e8d5] text-black flex-grow h-10"
                  placeholder="9868375590"
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
                  disabled={isSending} // Disable the button if still sending
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
