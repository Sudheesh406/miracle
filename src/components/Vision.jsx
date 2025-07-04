import { motion } from "framer-motion";

import visionImage from '../assets/images/vision.jpeg'

const Vision = () => {
  return (
    <section id='vision' className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={visionImage}
              alt="Vision"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-800/30 to-transparent rounded-lg"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800">
              Our Vision
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              Miracle Bond aspires to become a world-class product, forging
              strong and lasting connections with customers worldwide. We aim to
              deliver exceptional service and create a miracle in bonding
              technology.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <span className="text-primary-700 font-medium">
                Innovation in Every Detail
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
