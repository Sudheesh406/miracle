import { motion } from 'framer-motion';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'outdoor', name: 'Outdoor' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const galleryItems = [
    {
      image: "https://images.pexels.com/photos/1571488/pexels-photo-1571488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "kitchen",
      title: "Modern Kitchen Backsplash",
      description: "Contemporary subway tiles with contrasting grout"
    },
    {
      image: "https://images.pexels.com/photos/1571489/pexels-photo-1571489.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "bathroom",
      title: "Luxury Bathroom",
      description: "Marble tiles with premium finishing"
    },
    {
      image: "https://images.pexels.com/photos/1571490/pexels-photo-1571490.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "outdoor",
      title: "Outdoor Terrace",
      description: "Weather-resistant stone flooring"
    },
    {
      image: "https://images.pexels.com/photos/1571491/pexels-photo-1571491.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "commercial",
      title: "Office Lobby",
      description: "Large format tiles for high-traffic areas"
    },
    {
      image: "https://images.pexels.com/photos/1571492/pexels-photo-1571492.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "kitchen",
      title: "Rustic Kitchen",
      description: "Natural stone tiles with warm grout"
    },
    {
      image: "https://images.pexels.com/photos/1571493/pexels-photo-1571493.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "bathroom",
      title: "Spa Bathroom",
      description: "Mosaic tiles creating a serene atmosphere"
    },
    {
      image: "https://images.pexels.com/photos/1571494/pexels-photo-1571494.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "outdoor",
      title: "Pool Area",
      description: "Non-slip tiles for safety around water"
    },
    {
      image: "https://images.pexels.com/photos/1571495/pexels-photo-1571495.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "commercial",
      title: "Restaurant Interior",
      description: "Durable tiles for commercial kitchen"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-6">
            Project Gallery
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mb-8">
            Explore our completed projects and see how our premium materials transform spaces.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-600 hover:bg-primary-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-white/90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;