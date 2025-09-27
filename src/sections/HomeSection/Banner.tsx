import { Link } from "react-router-dom";



const Banner = () => {
  return (
    <section className="min-h-1/2 relative bg-gradient-to-b from-[#1F497D] to-white text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decorative shapes */}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col text-center items-center justify-center">
        {/* Text Section */}
        <h1
          className="text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-light mb-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Building Careers & Connecting Talent
        </h1>
        {/* <p
          className="text-lg sm:text-xl mb-8 text-blue-50"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          INFOLINK helps job seekers find opportunities and connects companies
          with the right talent through training programs and mega job fairs.
        </p> */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            to="/job-fairs"
            className="uppercase order border-4 border-[#1F497D] text-[#1F497D] px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-900 hover:text-white  transition"
          >
            Join Job Fair
          </Link>
          <Link
            to="/training"
            className="uppercase border border-4 border-[#1F497D] text-[#1F497D] px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-900 hover:text-white  transition"
          >
            Explore Training
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;

