import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Info } from 'lucide-react';

const AdditionalInformation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-4">
            Additional Information
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Important details to ensure safety, performance, and proper use of Miracle Bond Tile Grout.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Precautions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4 text-primary-600">
              <AlertTriangle className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-secondary-800">Precautions</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-secondary-600 text-sm">
              <li>Do not use in areas requiring high chemical, impact, or stain resistance — use Miracle Bond Epoxy instead.</li>
              <li>Shade card is indicative only — actual color may vary.</li>
              <li>Dry blend multiple bags before mixing to prevent color variation.</li>
            </ul>
          </motion.div>

          {/* Safety Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4 text-accent-600">
              <ShieldAlert className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-secondary-800">Safety Features</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-secondary-600 text-sm">
              <li>Refer to MSDS for detailed safety information.</li>
              <li>Store in a cool, dry place with bag tightly sealed.</li>
              <li>Keep away from children and food items.</li>
              <li>Seek medical attention if swallowed.</li>
              <li>Wear eye protection; rinse eyes with water if contact occurs.</li>
              <li>Use a nose pad during mixing to avoid dust inhalation.</li>
            </ul>
          </motion.div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4 text-secondary-600">
              <Info className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-secondary-800">Technical Details</h3>
            </div>
            <ul className="text-secondary-600 text-sm space-y-2">
              <li><strong>Form:</strong> Free flowing powder</li>
              <li><strong>Color:</strong> As per selected shade</li>
              <li><strong>Mix Density:</strong> 1.75 - 2.05 (depending on shade)</li>
              <li><strong>Pot Life:</strong> 1 Hour</li>
              <li><strong>Curing Time:</strong> 24 Hours</li>
              <li><strong>Tool Cleaning:</strong> Clean with water immediately after use</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInformation;
