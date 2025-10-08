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

  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Card */}
          <div className="group cursor-pointer">
            <div className=" rounded-2xl p-8 h-full border border-blue-100 hover:border-blue-300 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-[#1F497D] hover:text-white">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-xl mr-4 group-hover:bg-blue-700 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg className="w-8 h-8 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-300 transition-colors duration-300">Our Mission</h3>
              </div>
              <p className="text-lg   leading-relaxed mb-6">
                At Infolink, our mission is to bridge the gap between talent and opportunity
                by delivering comprehensive recruitment and training solutions that empower
                both individuals and organizations. We are dedicated to helping businesses
                find the right talent at the right time, while equipping candidates with the
                skills and confidence to excel in today’s competitive world. Through timely
                delivery, transparent practices, and long-term partnerships, we strive to
                become a trusted extension of our clients’ growth journey and a catalyst for
                career success.              </p>

            </div>
          </div>

          {/* Vision Card */}
          <div className="group cursor-pointer">
            <div className=" rounded-2xl p-8 h-full border border-indigo-100 hover:border-indigo-300 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-[#1F497D] hover:text-white">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-600 rounded-xl mr-4 group-hover:bg-indigo-700 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <svg className="w-8 h-8 text-white group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-300 transition-colors duration-300">Our Vision</h3>
              </div>
              <p className="text-lg  leading-relaxed mb-6">
                We envision a future where every skilled individual finds the right opportunity to grow, and every organization has access to the talent it needs to thrive. At Infolink, we aim to be a globally recognized talent solutions partner — nurturing leaders, innovators, and achievers who drive meaningful change. By continuously evolving with industry trends, embracing technology, and delivering value-driven services, we aspire to set new benchmarks in professional recruitment and training, shaping a workforce ready for the challenges of tomorrow.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision