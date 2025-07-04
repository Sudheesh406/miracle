import { motion } from "framer-motion";

const TileStoneAdhesive = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-800 mb-4">
            TILE & STONE ADHESIVE
          </h2>
        </motion.div>

        {/* Description Block */}
        {/* Two-column layout: Description left, Table right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left: Description */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-secondary-700 mb-4">
              At Miracle Bond we offer comprehensive range of tiles adhesive
              product for your to choose for all the kind of surface and
              application as per your requirement.
            </p>
            <p className="text-secondary-700 text-lg leading-relaxed">
              Our product is made with the best & premium quality raw materials
              available in the market. Because of this our costing works out
              much higher in comparison to our peers. But still we strive to
              give the best to our customers because our mission is to give very
              high value to our customer's hard earned money.
              <br />
              <br />
              Miracle Bond withstands all weather conditions. We are leading
              manufacturers in India for all right reasons and will protect your
              walls and floors from cracking and de bonding.
               <br />
               <br />
                Our complete range of product adhere to IS{" "}
                <strong>IS 15477:2019</strong> standards and it caters all your
                requirement for homes, offices, commercial buildings, new or
                existing floors, wall cladding, terrace floors etc.
              
            </p>
            
          </div>

          {/* Right: Table */}
          <div className="overflow-x-auto">
              <h1 className="text-2xl font-bold text-secondary-800 mb-4">comparison</h1>
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
              <table className="w-full text-left border-collapse h-[500px]">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="p-4 font-semibold">Particular</th>
                    <th className="p-4 font-semibold">Miracle Bond</th>
                    <th className="p-4 font-semibold">Cement Slurry</th>
                  </tr>
                </thead>
                <tbody className="text-secondary-700">
                  <tr className="border-t">
                    <td className="p-4">Quality Standard</td>
                    <td className="p-4">Conforms to IS 15477</td>
                    <td className="p-4">No standard conformity</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Testing</td>
                    <td className="p-4">Well-tested</td>
                    <td className="p-4">No structured testing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Shrinkage</td>
                    <td className="p-4">No shrinkage observed</td>
                    <td className="p-4">May shrink</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Packaging</td>
                    <td className="p-4">Premixed, ready-to-use bags</td>
                    <td className="p-4">Site mix required</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Consistency</td>
                    <td className="p-4">Machine-mixed, consistent</td>
                    <td className="p-4">Inconsistent site mix</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TileStoneAdhesive;
