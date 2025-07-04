import { motion } from "framer-motion";

const ProductFeatures = () => {
  const features = [
    {
      title: "Maximum Durability",
      description:
        "Our grouts are engineered to withstand heavy foot traffic, temperature fluctuations, and moisture exposure without cracking or deteriorating.",
      icon: "🛡️",
    },
    {
      title: "Waterproof Protection",
      description:
        "Advanced sealing technology creates an impermeable barrier that prevents water damage and mold growth in wet environments.",
      icon: "💧",
    },
    {
      title: "Stain Resistance",
      description:
        "Specially formulated to resist common household stains, making maintenance effortless and preserving the original appearance.",
      icon: "✨",
    },
    {
      title: "Easy Application",
      description:
        "User-friendly formula that provides smooth application, extended working time, and consistent results for professionals and DIYers alike.",
      icon: "🔧",
    },
  ];

  const images = [
    "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  ];

  const coverageData = [
    { size: "300×300×8", "3mm": "0.32", "4mm": "0.42", "5mm": "0.53" },
    { size: "300×300×10", "3mm": "0.39", "4mm": "0.53", "5mm": "0.66" },
    { size: "300×300×20", "3mm": "0.80", "4mm": "1.06", "5mm": "1.33" },
    { size: "300×600×10", "3mm": "0.30", "4mm": "0.40", "5mm": "0.50" },
    { size: "330×330×10", "3mm": "0.36", "4mm": "0.48", "5mm": "0.60" },
    { size: "450×450×12", "3mm": "0.32", "4mm": "0.42", "5mm": "0.53" },
    { size: "600×600×12", "3mm": "0.24", "4mm": "0.32", "5mm": "0.40" },
    { size: "200×300×6", "3mm": "0.29", "4mm": "0.39", "5mm": "0.49" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-6">
            Product Features
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Discover the advanced features and technical specifications that
            make our grouts the trusted choice for lasting performance and
            beauty.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technical Data Section */}
        <div className="mb-16 space-y-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Available Packs with Larger Image */}
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                  Available Packs
                </h3>
                <p className="text-secondary-600">
                  Shelf Life: <strong>12 months</strong> from the date of
                  manufacture when stored in original packaging under normal dry
                  conditions.
                </p>
              </div>
              <div className="w-full lg:w-64 flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Available Packs"
                  className="rounded-lg shadow-lg object-cover w-full h-48"
                />
              </div>
            </div>

            {/* Colours Available with Larger Image */}
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">
                  Colours Available
                </h3>
                <p className="text-secondary-600">
                  Available in <strong>15 brilliant shades</strong> to match any
                  aesthetic or design preference.
                </p>
              </div>
              <div className="w-full lg:w-64 flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Colours Available"
                  className="rounded-lg shadow-lg object-cover w-full h-48"
                />
              </div>
            </div>
          </div>

          {/* Coverage Table */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Coverage
            </h3>
            <div className="overflow-auto">
              <table className="w-full text-left text-sm border border-secondary-200">
                <thead className="bg-secondary-100 text-secondary-700">
                  <tr>
                    <th className="p-2 border">Tile Size (mm)</th>
                    <th className="p-2 border">3 mm</th>
                    <th className="p-2 border">4 mm</th>
                    <th className="p-2 border">5 mm</th>
                  </tr>
                </thead>
                <tbody>
                  {coverageData.map((row, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-secondary-50"
                    >
                      <td className="p-2 border">{row.size}</td>
                      <td className="p-2 border">{row["3mm"]}</td>
                      <td className="p-2 border">{row["4mm"]}</td>
                      <td className="p-2 border">{row["5mm"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Usage */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Recommended Usage
            </h3>
          </div>
        </div>

        {/* Final Image Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image}
                alt={`Product Feature ${index + 1}`}
                className="w-full h-80 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
