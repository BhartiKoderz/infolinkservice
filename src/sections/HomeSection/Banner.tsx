import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const Banner = () => {
  const titles = [
    "Building Careers & Connecting Talent",
    "Empowering Professionals for Success",
    "...Stop Searching, Start Working...",
  ];


  return (
    <section className="min-h-1/2 relative bg-gradient-to-b from-[#1F497D] to-white text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background decorative shapes */}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col text-center items-center justify-center">
        {/* Text Section */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="w-full"
        >
          {titles.map((title, index) => (
            <SwiperSlide key={index}>
              <h1
                className="max-w-3xl mx-auto  text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-light  mb-4  text-center px-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  textShadow: "2px 2px 0 #1F497D, 4px 6px 0 #2c5382ff"
                }}
              >
                {title}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <h1
          className="text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-light mb-4 drop-shadow-xl"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Building Careers & Connecting Talent
        </h1> */}
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

