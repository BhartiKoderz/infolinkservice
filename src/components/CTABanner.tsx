import React from "react";
import img from '../assests/cta-img.png'
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="  bg-gradient-to-r from-[#1F497D] to-blue-800 text-white py-10 "
      style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className=" max-w-5xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={img}
            alt="Let's Connect"
            className="w-full max-w-md w-80 h-auto"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            LET’S REACH OUT
          </h2>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Contact us to learn more about INFOLINK’s training and placement
            services, and how we can help you build your career with top
            industries.
          </p>
          <div
            className="flex flex-wrap gap-4"
            style={{ fontFamily: "Poppins, sans-serif" }}>
            <a
              href="https://wa.me/number?text=Hello%20INFOLINK%2C%20I%20would%20like%20to%20upload%20my%20resume."
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Enroll Now
            </a>
            <Link
              to="/training"
              className="bg-white hover:bg-gray-100 text-[#1F497D] font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              View Trainings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
