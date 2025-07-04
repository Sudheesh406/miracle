import { motion } from 'framer-motion';

const HowToApply = () => {
  const steps = [
    {
      step: "01",
      title: "Check Tile Adhesion",
      description: "Before grouting, ensure the tiles are firmly set and adhesive is fully cured."
    },
    {
      step: "02",
      title: "Clean the Tile Joints",
      description: "Tile joints must be clean and free from oil or dust. Ensure about 2/3 of the tile depth is available for grouting."
    },
    {
      step: "03",
      title: "Mix the Grout",
      description: "Add 1 kg tile grout to 300–350 ml of potable water and mix until smooth and lump-free."
    },
    {
      step: "04",
      title: "Apply the Grout",
      description: "Dampen the surface and use a rubber grout float to apply the grout, avoiding air gaps in the joints."
    },
    {
      step: "05",
      title: "Use Within 30 Minutes",
      description: "Make sure the mixed material is applied within 30 minutes of preparation."
    },
    {
      step: "06",
      title: "Remove Excess Grout",
      description: "Clean excess grout carefully without disturbing the compacted material in the joints."
    },
    {
      step: "07",
      title: "Initial Cleaning",
      description: "After 2–3 hours, wipe excess grout with a **damp (not wet)** sponge for a clean finish."
    },
    {
      step: "08",
      title: "Curing the Joints",
      description: "Allow the joints to cure for 24 hours. For exterior use, protect from direct sunlight and rain."
    }
  ];

  return (
    <section id="how-to-apply" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-2">
            How to Apply
          </h2>
          <p className="text-md text-secondary-500 italic mb-4">
            The Grout – Cement Based
          </p>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Follow these expert-recommended steps for optimal grout application in any setting — residential or commercial.
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-secondary-800">{step.title}</h3>
              </div>
              <p className="text-secondary-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default HowToApply;
