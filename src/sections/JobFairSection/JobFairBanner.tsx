

const JobFairBanner = () => {
  return (
    <section className="relative bg-[#1F497D] text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Empowering Careers Through{" "}
            <span className="text-yellow-300">Job Fairs</span>
          </h1>
          <p
            className="text-lg sm:text-xl mb-8 text-blue-100"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our Job Fairs connect students and job seekers with leading industry
            partners. Building bridges between education and employment,
            creating real opportunities for growth and success.
          </p>
        </div>

        {/* Image / Illustration */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center z-10">
          <img
            src="https://images.unsplash.com/photo-1581091012184-5c2f3e3f1c3d?auto=format&fit=crop&w=1000&q=80"
            alt="Job Fair Banner"
            className="rounded-2xl shadow-2xl max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default JobFairBanner;
