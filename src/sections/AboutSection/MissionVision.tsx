import { motion } from "framer-motion";

function MissionVision() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our <span className="text-[#1F497D]">Vision & Mission</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Committed to empowering careers and creating global leaders through professional recruitment and training solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative bg-white shadow rounded-2xl p-8 flex flex-col text-gray-700 hover:shadow-xl transition overflow-hidden hover:bg-[#1F497D] hover:text-white">
            <div className="absolute -top-10 -right-10 w-20 h-20  bg-[#1F497D]  rounded-full opacity-70"></div>

            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Our Mission
            </h3>
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className=" leading-relaxed whitespace-pre-line relative z-10 text-justify">
              At Infolink, our mission is to bridge the gap between talent and opportunity
              by delivering comprehensive recruitment and training solutions that empower
              both individuals and organizations. We are dedicated to helping businesses
              find the right talent at the right time, while equipping candidates with the
              skills and confidence to excel in today’s competitive world. Through timely
              delivery, transparent practices, and long-term partnerships, we strive to
              become a trusted extension of our clients’ growth journey and a catalyst for
              career success.
            </p>
          </div>
          <div className="relative bg-white shadow rounded-2xl p-8 flex flex-col text-gray-700  hover:shadow-xl transition overflow-hidden hover:bg-[#1F497D] hover:text-white">
            {/* Decorative half-circle gradient */}
            <div className="absolute -top-10 -right-10 w-20 h-20  bg-[#1F497D]  rounded-full opacity-70"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Our Mission
            </h3>
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className=" leading-relaxed whitespace-pre-line relative z-10 text-justify">
              We envision a future where every skilled individual finds the right opportunity to grow, and every organization has access to the talent it needs to thrive. At Infolink, we aim to be a globally recognized talent solutions partner — nurturing leaders, innovators, and achievers who drive meaningful change. By continuously evolving with industry trends, embracing technology, and delivering value-driven services, we aspire to set new benchmarks in professional recruitment and training, shaping a workforce ready for the challenges of tomorrow.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision