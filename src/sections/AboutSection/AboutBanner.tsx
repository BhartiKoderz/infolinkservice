import TrainingBanner from "../TrainingSection/TrainingBanner";

const AboutBanner = ({title}) => {
  return (
    <section className="min-h-64 relative bg-gradient-to-b from-[#1F497D] to-white text-white pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="text-center mb-16">
      <h1
        className="text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-light mb-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {title}
      </h1>
      </div>
      {/* {window.location.pathname === "/training" && <TrainingBanner />} */}
    </section>
  );
};

export default AboutBanner;
