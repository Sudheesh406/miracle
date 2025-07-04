import { motion } from 'framer-motion';

const Showcase = () => {
  const showcases = [
    {
      title: "Kitchen Backsplash",
      description: "Transform your kitchen with our stunning backsplash collection. From classic subway tiles to modern mosaic patterns, our selection offers the perfect blend of functionality and style.",
      details: [
        "Heat-resistant materials perfect for cooking areas",
        "Easy-to-clean surfaces that maintain their beauty",
        "Coordinated trim pieces for professional finish"
      ],
      images: [
        "https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      ],
      largeImage: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Outdoor Flooring",
      description: "Create stunning outdoor spaces with our weather-resistant flooring solutions. Designed to withstand the elements while maintaining their beauty year-round.",
      details: [
        "Slip-resistant surfaces for safety in wet conditions",
        "UV-resistant materials that won't fade over time",
        "Low maintenance requirements for busy lifestyles"
      ],
      images: [
        "https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      ],
      largeImage: "https://images.pexels.com/photos/1571476/pexels-photo-1571476.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Bathroom Tiles",
      description: "Design luxurious bathrooms with our water-resistant tile collection. Perfect for creating spa-like retreats in your own home.",
      details: [
        "Waterproof and stain-resistant properties",
        "Anti-microbial surfaces for healthier environments",
        "Wide range of sizes from large format to mosaic"
      ],
      images: [
        "https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571478/pexels-photo-1571478.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571479/pexels-photo-1571479.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      ],
      largeImage: "https://images.pexels.com/photos/1571480/pexels-photo-1571480.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Living Room Flooring",
      description: "Elevate your living spaces with our premium flooring collection. Combining comfort, durability, and timeless elegance for everyday luxury.",
      details: [
        "Durable surfaces designed for high-traffic areas",
        "Sound-absorbing properties for quieter homes",
        "Underfloor heating compatible options available"
      ],
      images: [
        "https://images.pexels.com/photos/1571481/pexels-photo-1571481.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571482/pexels-photo-1571482.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571483/pexels-photo-1571483.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      ],
      largeImage: "https://images.pexels.com/photos/1571484/pexels-photo-1571484.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];


  return (
    <section id="applications" className=" bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-6">
            Application Showcase
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Explore how our premium tiles and stones transform different spaces, from kitchens to outdoor areas.
          </p>
        </motion.div>

        <div className="space-y-20">
          {showcases.map((showcase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-3xl font-bold text-secondary-800 mb-4">{showcase.title}</h3>
                <p className="text-lg text-secondary-600 mb-6">{showcase.description}</p>
                
                {/* Product Images */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {showcase.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="relative group overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${showcase.title} ${imgIndex + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold text-secondary-800 mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {showcase.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                          <span className="text-secondary-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary-800 mb-4">Benefits</h4>
                    <p className="text-secondary-600">
                      Experience the perfect combination of beauty and performance with our {showcase.title.toLowerCase()} solutions. 
                      Each product is carefully selected to meet the specific demands of its intended application while delivering 
                      exceptional aesthetic appeal.
                    </p>
                  </div>
                </div>

                {/* Large Showcase Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={showcase.largeImage} 
                    alt={`${showcase.title} Showcase`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-800/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h5 className="text-xl font-bold">{showcase.title} Installation</h5>
                    <p className="text-white/90">Professional results you can trust</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;