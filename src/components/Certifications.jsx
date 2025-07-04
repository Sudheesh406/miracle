import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "https://images.pexels.com/photos/1571485/pexels-photo-1571485.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "Green Building Council",
      description: "Environmental Sustainability",
      image: "https://images.pexels.com/photos/1571486/pexels-photo-1571486.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      name: "ANSI Standards",
      description: "American National Standards",
      image: "https://images.pexels.com/photos/1571487/pexels-photo-1571487.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-6">
            Certifications
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Our commitment to quality and excellence is validated by leading industry certifications and standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6 inline-block">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-2">{cert.name}</h3>
              <p className="text-secondary-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Trust Through Certification
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              These certifications represent our unwavering commitment to quality, safety, and environmental responsibility. 
              When you choose our products, you're choosing materials that meet the highest industry standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;