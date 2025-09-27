const JobFairBanner = () => {
  return (
    <section className="relative bg-[#1F497D] text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decorative shapes */}
      {/* <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Text Section */}
        <div className="w-full text-center z-10">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Job <span className="text-yellow-300">Fairs</span>
          </h1>
        </div>

        {/* Image / Illustration */}
      </div>
    </section>
  );
};

export default JobFairBanner;
