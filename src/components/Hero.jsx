import { motion } from 'framer-motion';
import heroImage from '../assets/images/Miracle_Catalogue_2_hero.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Interior" 
          className="w-full h-full object-contain md:object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
        >
          {/* Luxurious Interior */}
          {/* <span className="block text-primary-300">Solutions</span> */}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          {/* Transform your space with our premium tiles, stones, and grouts. 
          Experience the perfect blend of durability and elegance. */}
        </motion.p>

        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => document.querySelector('#products').scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300 shadow-xl"
          >
            Explore Products
          </button>
          <button 
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300"
          >
            Get Quote
          </button>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
