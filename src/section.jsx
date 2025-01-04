import React from "react";
import { RiComputerLine, RiFileEditFill } from "react-icons/ri";
import { IoPhoneLandscapeOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LiaMoneyBillAlt } from "react-icons/lia";
import { GrStatusGood } from "react-icons/gr";
import Glossary from "./components/Glossary";

const Sections = () => {
  return (
    <>
      {/* Tech Terms Section */}
      <section className="py-12 flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="container mx-auto px-4">
          <Glossary />
        </div>
      </section>
      {/* Services Section */}
      <section className="py-12 flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="max-w-7xl w-full mx-auto p-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              SERVICES I CAN OFFER
            </h2>
            <p className="text-gray-300">Things that I can do for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: RiComputerLine,
                title: "Website Development",
                description:
                  "Website designs are custom made based on clients' preferences.",
              },
              {
                Icon: IoPhoneLandscapeOutline,
                title: "Responsive Designs",
                description: "All designs are mobile and desktop friendly!",
              },
              {
                Icon: RiFileEditFill,
                title: "Free Updates",
                description: (
                  <>
                    Get free updates for your website.
                    <span className="text-indigo-400 text-xs">
                      &nbsp;Only applies to minor changes.
                    </span>{" "}
                  </>
                ),
              },
              {
                Icon: BiSupport,
                title: "Free Support",
                description: "Get free supports for your website.",
              },
              {
                Icon: LiaMoneyBillAlt,
                title: "Cheap Rates",
                description: "Get the best rates for your website.",
              },
              {
                Icon: GrStatusGood,
                title: "Regular Progress Reports",
                description:
                  "Get regular progress reports for the status of your website.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6
                  hover:bg-white/10 transition-all duration-300
                  transform hover:scale-105"
              >
                <service.Icon
                  size={50}
                  className="text-indigo-400 mb-4 transform transition-all
                    duration-300 group-hover:scale-110"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Render.com Hosting Section */}
      <section className="py-12 flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="max-w-7xl w-full mx-auto p-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              WEBSITE HOSTING
            </h2>
            <p className="text-gray-300">
              Your website will be hosted on Render.com
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side - About Render */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Why Render?
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Render is a modern cloud platform that automatically builds
                    and deploys your websites. It offers:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Automatic HTTPS/SSL security</li>
                    <li>Global CDN for fast loading</li>
                    <li>99.9% uptime guarantee</li>
                    <li>Automatic scaling</li>
                    <li>DDoS protection</li>
                  </ul>
                </div>
              </div>

              {/* Right side - Pricing */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Hosting Plans
                </h3>
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-2">
                      Free Tier
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• 750 hours of hosting per month</li>
                      <li>• Automatic HTTPS</li>
                      <li>• Global CDN</li>
                      <li>• Perfect for personal projects</li>
                    </ul>
                  </div>

                  <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-2">
                      Individual Plan
                    </h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Starting at $7/month</li>
                      <li>• Unlimited hosting hours</li>
                      <li>• Custom domains</li>
                      <li>• Ideal for business websites</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-gray-400 text-sm">
              <p>
                * Prices may vary based on Render's current pricing. Check their
                website for the most up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Custom Hosting Solutions Section */}
      <section className="py-12 flex items-center justify-center relative bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="max-w-7xl w-full mx-auto p-4 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-8">
              Custom Hosting Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Alternative Hosting */}
              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                  Alternative Hosting Options
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    While Render.com is our recommended option, we can
                    accommodate other hosting providers based on your needs:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>AWS (Amazon Web Services)</li>
                    <li>DigitalOcean</li>
                    <li>Heroku</li>
                    <li>Your existing hosting provider</li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">
                    * Pricing and setup may vary depending on the chosen hosting
                    provider
                  </p>
                </div>
              </div>

              {/* Domain Registration */}
              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                  Domain Registration with Namecheap
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>We register domains through Namecheap.com for:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Competitive pricing (starting at $8-15/year)</li>
                    <li>Free WhoisGuard protection</li>
                    <li>Easy domain management</li>
                    <li>Excellent customer support</li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-4">
                    * Domain prices vary based on the extension (.com, .net,
                    etc.)
                  </p>
                </div>
              </div>
            </div>

            {/* Client Specifications */}
            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                Client Specifications
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  We understand that every project is unique. We can
                  accommodate:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Specific hosting requirements</li>
                    <li>Custom domain preferences</li>
                    <li>Special security needs</li>
                    <li>Existing hosting migration</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bandwidth requirements</li>
                    <li>Storage specifications</li>
                    <li>Backup preferences</li>
                    <li>Performance requirements</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Contact us to discuss your specific hosting and domain
                  requirements. We'll work together to find the best solution
                  for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            HOW I WORK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Discovery",
                description: (
                  <>
                    First, we discuss your{" "}
                    <span className="text-indigo-400 font-semibold">
                      project requirements
                    </span>{" "}
                    and{" "}
                    <span className="text-indigo-400 font-semibold">
                      business goals
                    </span>
                  </>
                ),
              },
              {
                step: "2",
                title: "Planning",
                description: (
                  <>
                    Creating{" "}
                    <span className="text-indigo-400 font-semibold">
                      detailed mockups
                    </span>{" "}
                    and a{" "}
                    <span className="text-indigo-400 font-semibold">
                      development timeline
                    </span>
                  </>
                ),
              },
              {
                step: "3",
                title: "Development",
                description: (
                  <>
                    Building with{" "}
                    <span className="text-indigo-400 font-semibold">
                      regular updates
                    </span>{" "}
                    and{" "}
                    <span className="text-indigo-400 font-semibold">
                      progress reports
                    </span>
                  </>
                ),
              },
              {
                step: "4",
                title: "Launch",
                description: (
                  <>
                    Final{" "}
                    <span className="text-indigo-400 font-semibold">
                      testing
                    </span>
                    ,{" "}
                    <span className="text-indigo-400 font-semibold">
                      deployment
                    </span>
                    , and{" "}
                    <span className="text-indigo-400 font-semibold">
                      ongoing support
                    </span>
                  </>
                ),
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl text-indigo-400 font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl text-white font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#121212]">
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long does it take to build a website?",
                answer: (
                  <>
                    Typically{" "}
                    <span className="text-indigo-400 font-semibold">
                      2-4 weeks
                    </span>
                    , depending on project complexity.{" "}
                    <span className="text-indigo-400 font-semibold">
                      Regular updates
                    </span>{" "}
                    are provided throughout development.
                  </>
                ),
              },
              {
                question: "Do you provide website maintenance?",
                answer: (
                  <>
                    Yes! I offer{" "}
                    <span className="text-indigo-400 font-semibold">
                      ongoing maintenance
                    </span>{" "}
                    to keep your website running smoothly.
                  </>
                ),
              },
              {
                question: "What is your payment structure?",
                answer: (
                  <>
                    <span className="text-indigo-400 font-semibold">
                      Will depend on the project size and requirements.
                    </span>{" "}
                  </>
                ),
              },
              {
                question: "Can you help with existing websites?",
                answer: (
                  <>
                    Yes! I can help with{" "}
                    <span className="text-indigo-400 font-semibold">
                      modifications
                    </span>
                    ,{" "}
                    <span className="text-indigo-400 font-semibold">
                      updates
                    </span>
                    , or complete{" "}
                    <span className="text-indigo-400 font-semibold">
                      redesigns
                    </span>{" "}
                    of existing websites.
                  </>
                ),
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl text-white font-semibold mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
