import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="py-20 bg-white">
      {/* Grout Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-2">
          Contacts
        </h2>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Fill out the form and we’ll get back to you as soon as possible
        </p>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-secondary-800 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 1234567890"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[750px]">
            <iframe
              title="EVO Pvt Location - Trivandrum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d76.93!3d8.5241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bf1234567890%3A0xabcdef1234567890!2sEVO%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
