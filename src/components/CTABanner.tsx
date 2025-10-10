import React from "react";
import img from '../assests/homepage/Frame 4.png';
import netbg from '../assests/homepage/ctanetbg.png';
import { motion } from 'framer-motion';

const CTABanner = () => {

  //   const phoneNumber = "919876543210"; // <-- Replace with your own number

  const message = `
  📢 Hello from INFOLINK!             

  Thank you for connecting with us. To help us match you with the best job opportunities, please share your updated resume.

  📄 You can upload your resume here:  
  👉 https://infolinkservices.in/upload-resume

  ✅ Once submitted, our team will review and get back to you with suitable opportunities.

  Best regards,  
  Team INFOLINK  
  🌐 https://infolinkservices.in/
    `;

  const phoneNumber = "919284513668"; // include country code
  // const message =
  //   "📢 Hello from INFOLINK! Thank you for connecting with us. Please share your updated resume.";
  // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //   message
  // )}`;

  // const handleClick = () => {
  //   window.open(url, "_blank");
  //   console.log("WhatsApp link clicked");
  // }

  return (
    <section
      className="relative bg-gradient-to-l from-[#324C9B] to-[#2A7BA5] text-white py-2"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={netbg}
          alt="Network Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={img}
            alt="Let's Connect"
            className="w-full max-w-md w-80 h-90 object-contain"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            LOOKING FOR A JOB?
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Connect with INFOLINK to explore job opportunities, get expert career
            guidance, and take the next step towards your dream job in top
            industries.
          </p>

          <div className="flex flex-wrap gap-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            <a
              // href="https://wa.me/919284513668?text=📢%20Hello%20from%20INFOLINK!%20I%20would%20like%20to%20upload%20my%20resume."
              // target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow transition inline-block"
            >
              Enroll Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default CTABanner;
