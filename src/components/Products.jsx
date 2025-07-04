import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import groutImage from "../assets/images/Grout.jpg";
import epoxy from "../assets/images/Epoxy.jpg";
import Tile1 from "../assets/images/Tile-1.jpg";
import Tile3 from "../assets/images/Tile33.jpg";
import Tile4 from "../assets/images/Tile2.jpg";
import Tile5 from "../assets/images/Tile5.jpg";
import Tile2 from "../assets/images/Tile.jpg";
Tile2;
const tileData = [
  {
    image: Tile1,
    text: "MB-10О(TYPE I, С1)",
  },
  {
    image: Tile2,
    text: "MB-150(TYPE II, C2)",
  },
  {
    image: Tile3,
    text: "MB-20О(TYPE II, C2T)",
  },
  {
    image: Tile4,
    text: "MB-30О(TYPE III, C2TE)",
  },
  {
    image: Tile5,
    text: "MB-40О(TYPE IV, C2TES1)",
  },
];

const Products = () => {
  const tileScrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = tileScrollRef.current;
      if (container) {
        container.scrollBy({ left: 320, behavior: "smooth" });

        // Loop back to start if end is reached
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        {/* Grout Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-2">
            Products
          </h2>
          <p className="text-xl text-primary-600 font-medium mb-4">
            Grout - Cement Based
          </p>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Miracle Bond Tile Grout is a high-performance, fast-setting
            cement-based grout for joints up to 3mm. Water-resistant, easy to
            use, and available in 19 vibrant shades, it’s perfect for walls and
            floors in both homes and businesses.
          </p>
        </motion.div>

        {/* Grout Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={groutImage}
              alt="Grout Application"
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6 text-left space-y-3">
              <h3 className="text-xl font-semibold text-red-600 tracking-wide uppercase">
                Grout Cement
              </h3>
              <p className="text-base text-secondary-700 leading-relaxed font-[500]">
                Miracle Bond tile grout (cement-based) is a single-component,
                polymer-modified grout designed to fill tile joints up to 3mm
                wide. It is a premium, fast-setting, low-shrinkage formulation
                that prevents water ingress through joints and meets ANSI 118.6
                tile grout specifications.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={epoxy}
              alt="Clean Finish"
              className="w-full h-[400px] object-cover"
            />
            <div className="p-6 text-left space-y-3">
              <h3 className="text-xl font-semibold text-red-600 tracking-wide uppercase">
                EPOXY GROUT
              </h3>
              <p className="text-base text-secondary-700 leading-relaxed font-[500]">
                Miracle Epoxy is the only expansive, Non-shrink, low exothermic
                epoxy system for machinery grouting. It comes with latest
                Anti-Fading protection which is a German technology. Only a very
                few products has this technology. It has an extra protective
                coating to prevent the colour to last for longer duration.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xl text-primary-600 font-medium mb-4">
            TILE & STONE ADHESIVE
          </p>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Discover our premium tiles in various styles, textures, and finishes
            — perfect for any space.
          </p>
        </motion.div>

        <div className="relative">
          {/* Tile Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            ref={tileScrollRef}
            className="flex gap-6 overflow-x-auto px-2 scrollbar-hide"
          >
            {tileData.map((tile, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0"
              >
                <img
                  src={tile.image}
                  alt={`Tile ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-secondary-700 font-medium">{tile.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Buttons Below */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() =>
                tileScrollRef.current?.scrollBy({
                  left: -320,
                  behavior: "smooth",
                })
              }
              className="text-2xl bg-secondary-100 text-secondary-800 hover:bg-secondary-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              ‹
            </button>
            <button
              onClick={() =>
                tileScrollRef.current?.scrollBy({
                  left: 320,
                  behavior: "smooth",
                })
              }
              className="text-2xl bg-secondary-100 text-secondary-800 hover:bg-secondary-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
