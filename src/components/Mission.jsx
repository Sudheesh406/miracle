import { motion } from "framer-motion";

import missionImage from '../assets/images/mission.jpeg'

const Mission = () => {
  return (
    <section id='mission' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* New Multi-line Heading */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-800 leading-tight">
                BONDS<br />
                THAT STAND<br />
                THE TEST<br />
                OF TIME
              </h2>
            </div>

            {/* Our Mission Paragraph */}
            <p className="text-lg text-secondary-600 leading-relaxed pt-2">
              <span className="block font-semibold text-secondary-800 text-xl mb-2">
                OUR MISSION
              </span>
              Miracle strives to deliver enduring solutions that meet and exceed
              the needs of our valued customers. With a strong emphasis on
              durability and innovation, our comprehensive range of products
              offers exceptional value to meet the commercial and residential
              demands of our clients in both national and international markets.
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">
              {[
                "Premium Quality Materials",
                "Expert Customer Service",
                "Sustainable Practices",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={missionImage}
              alt="Mission"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-800/30 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
