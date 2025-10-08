import { Users, Award, Building2 } from "lucide-react";
import aboutimg from '../../assests/aboutimg2.jpg';
import { motion } from "framer-motion";
import Stats from "./Stats";

const AboutContent = () => {
  return (
    <section id="about" className="pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 group"
          >
            <div>
              <div className="group">
                <img
                  src={aboutimg}
                  alt="Professional team meeting"
                  className="rounded-2xl shadow-2xl transform transition duration-500 group-hover:rotate-3 group-hover:scale-105"
                />
              </div>

            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 "
          >
            {/* Content */}
            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Empowering Careers Since 2010
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                INFOLINK was established on the 20th of July, 2010, with an objective
                of providing HR and Placement Solutions in the corporate world as well
                as jobs to needy persons from rural areas. In just 13 years, we have
                grown into Nagpur’s largest manpower provider and job fair organizer —
                trusted by more than 1000 industries and thousands of job seekers.
              </p>
              {/* Mission Highlight */}
              <div className="mt-8 bg-gradient-to-r from-yellow-200 to-yellow-100 border-l-4 border-[#1F497D] p-4 rounded-lg shadow-sm">
                <p className="text-lg text-gray-800 font-semibold italic">
                  “MISSION: Unemployment-Free India & Rural Development.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
     
        <Stats />
      </div>
    </section>

  );
};

export default AboutContent;
