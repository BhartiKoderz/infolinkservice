const AboutBanner = () => {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            From <span className="text-yellow-300">Rural</span> Aspiration to{" "}
            <span className="text-yellow-300">Corporate</span> Success
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Over 13 years of connecting rural aspirations to corporate success.
            With 100+ job fairs, 1000+ industry partners, and a vision of
            Unemployment-Free India.
          </p>

          <div className="mb-8 flex flex-wrap gap-6 justify-center lg:justify-start">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-4 text-center shadow">
              <h3 className="text-2xl font-bold text-yellow-300">13+</h3>
              <p className="text-sm">Years of Trust</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-4 text-center shadow">
              <h3 className="text-2xl font-bold text-yellow-300">100+</h3>
              <p className="text-sm">Job Fairs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-4 text-center shadow">
              <h3 className="text-2xl font-bold text-yellow-300">1000+</h3>
              <p className="text-sm">Industry Partners</p>
            </div>
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/join-job-fair"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
            >
              Join Job Fair
            </a>
            <a
              href="/training"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition"
            >
              Explore Training
            </a>
          </div> */}
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

export default AboutBanner;
