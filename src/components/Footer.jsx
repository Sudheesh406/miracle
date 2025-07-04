import { motion } from "framer-motion";
import evoLogo from "../assets/images/evo-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-400">miracle</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium tiles, stones, and grouts for exceptional interior design
              projects.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 
      24H12.82v-9.294H9.692V11.03h3.128V8.413c0-3.1 1.894-4.788 
      4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 
      0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.676h-3.12V24h6.116C23.403 
      24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 
      5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 
      4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 
      0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 
      7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 
      7 3.5 3.5 0 0 0 0-7zm4.75-.75a1 1 0 1 1 0 2 1 1 0 0 1 
      0-2z"
                  />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19.44 4.56L13.15 11.1 20.24 20H16.63l-5.11-6.34L5.77 
      20H3.5l6.82-7.53L3.26 4h3.73l4.6 5.94L17.88 4h1.56zM6.35 
      5l11.62 14h-.9L5.46 5h.89z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="hover:text-primary-400 transition-colors"
                >
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="#mission"
                  className="hover:text-primary-400 transition-colors"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary-400 transition-colors"
                >
                  Products
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-200">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Grout
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Tiles
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-200">
              Contact Info
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-primary-600 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span>
                    Milagro INDUSTRIES LLP BUILDING, <br/>
                    NO. 8/596-B, SY. NO-377/4,<br/>
                    THENGODU, KAKKANAD, ERNAKULAM, 682030, Kerala, India
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>73069 03030</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>milagroindustriesllp@gmail.com </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-secondary-600 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 miracle. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                Cookie Policy
              </a>

              {/* Developed By */}
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">Developed by</span>
                <a
                  href="https://evotechs.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    src={evoLogo}
                    alt="Evotechs Logo"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
