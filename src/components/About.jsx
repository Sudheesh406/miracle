import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.jpeg"

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 relative"
          >
            {/* Sticky Heading */}
            <div className="sticky top-0 bg-gradient-to-br from-white to-gray-50 z-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800">
                About Our Company
              </h2>
            </div>

            {/* Scrollable Text */}
            <div className="max-h-[500px] overflow-y-auto pr-2 space-y-5 text-secondary-700 text-lg leading-relaxed custom-scrollbar">
              <p>
                Miracle Bond is not just an Adhesive, It forms the foundation of
                your perfect space. Quality and innovation converge in every
                application, bringing the structure of your dreams to life. All
                our products stem from extensive research and development, in
                which we invest significantly.
              </p>
              <p>
                We have a comprehensive range of products, designed to meet all
                adhesive needs, providing ideal solutions for tile fixing and
                care, stone fixing and care, building repair. grouting. and
                waterproofing.
              </p>
              <p>
                Miracle Bond products consistently outshine other brands due to
                our commitment to using premium materials and adherence to
                industry standards. This ensures safety and reliability in every
                application. The result is work that is both long-lasting and
                flawless. Our projects are а testament to the miraculous
                transformation achieved by our adhesives.
              </p>
              <p>
                We take pride in serving customers with the highest value for
                their money without compromising quality. When you invest in
                Miracle Bond, you also invest in a future free of worries. With
                superior bonding strength, Miracle guarantees exceptional
                resilience for all surface application needs.
              </p>
              <p>
                Miracle Bond is designed to withstand all weather conditions, so
                your surfaces will remain intact, regardless of the environment.
                We stand as a top player in the industry, thanks to our products
                that offer unparalleled protection against cracking and debonding.
                Seeing our customers happy, secure in their decisions, and
                worry-free about upkeep or repairs is our biggest satisfaction.
              </p>
              <p className="font-semibold text-primary-700">
                Experience the miracle of flawless tiling with Miracle Adhesive!
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl mt-8">
              <img
                src={aboutImage}
                alt="Our Workspace"
                className="w-full h-[520px] object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary-600 rounded-xl flex flex-col items-center justify-center text-white shadow-xl text-center">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm mt-1 leading-tight">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
