import { motion } from "framer-motion";

const GroutColorSection = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        {/* Heading and Right-side Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 leading-tight whitespace-pre-line">
              CHOOSING{"\n"}THE RIGHT{"\n"}GROUT COLOUR
            </h2>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Side Grout"
              className="w-full h-24 object-cover"
            />
          </motion.div>
        </div>

        {/* Two Images Below */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Grout Shade 1"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Grout Shade 2"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GroutColorSection;
