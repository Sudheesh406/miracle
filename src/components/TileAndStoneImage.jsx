import { motion } from "framer-motion";

const PremiumAdhesiveIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 leading-tight whitespace-pre-line">
            INTRODUCING{"\n"}PREMIUM QUALITY{"\n"}TILE & STONE{"\n"}ADHESIVE
          </h2>
        </motion.div>

        {/* Two Large Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tile Adhesive 1"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tile Adhesive 2"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAdhesiveIntro;
