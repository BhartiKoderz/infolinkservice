// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";


// const Banner = () => {
//   const titles = [
//     "Building Careers & Connecting Talent",
//     "Empowering Professionals for Success",
//     "...Stop Searching, Start Working...",
//   ];


//   return (
//     <section className="min-h-1/2 relative bg-gradient-to-b from-[#1F497D] to-white text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
//       {/* Background decorative shapes */}

//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col text-center items-center justify-center">
//         {/* Text Section */}
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           speed={1000}
//           className="w-full"
//         >
//           {titles.map((title, index) => (
//             <SwiperSlide key={index}>
//               <h1
//                 className="max-w-3xl mx-auto  text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-light  mb-4  text-center px-4"
//                 style={{
//                   fontFamily: "Poppins, sans-serif",
//                   textShadow: "2px 2px 0 #1F497D, 4px 6px 0 #2c5382ff"
//                 }}
//               >
//                 {title}
//               </h1>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* <h1
//           className="text-5xl sm:text-5xl lg:text-6xl font-extrabold leading-light mb-4 drop-shadow-xl"
//           style={{ fontFamily: "Poppins, sans-serif" }}
//         >
//           Building Careers & Connecting Talent
//         </h1> */}
//         {/* <p
//           className="text-lg sm:text-xl mb-8 text-blue-50"
//           style={{ fontFamily: "Montserrat, sans-serif" }}
//         >
//           INFOLINK helps job seekers find opportunities and connects companies
//           with the right talent through training programs and mega job fairs.
//         </p> */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//           <Link
//             to="/job-fairs"
//             className="uppercase order border-4 border-[#1F497D] text-[#1F497D] px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-900 hover:text-white  transition"
//           >
//             Join Job Fair
//           </Link>
//           <Link
//             to="/training"
//             className="uppercase border border-4 border-[#1F497D] text-[#1F497D] px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-900 hover:text-white  transition"
//           >
//             Explore Training
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

// import React from "react";

// const Banner = () => {
//   const titles = [
//     "Empowering Careers Since 2010",
//     "100+ Successful Job Fairs",
//     "1000+ Partner Industries",
//     "Unemployment-Free India Mission",
//   ];

//   return (
//     <div className="mt-20 bg-[#1F497D] text-white py-4 overflow-hidden">
//       <div className="flex space-x-16 animate-scroll whitespace-nowrap">
//         {[...titles, ...titles].map((title, i) => (
//           <h1
//             key={i}
//             className="text-2xl sm:text-3xl font-semibold inline-block"
//             style={{
//               fontFamily: "Poppins, sans-serif",
//               textShadow: "1px 1px 0 #153360",
//             }}
//           >
//             {title}
//           </h1>
//         ))}
//       </div>

//       {/* Animation */}
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           display: inline-flex;
//           animation: scroll 25s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import your banner images
import bannerCareer from "../../assests/homepage/pexels-picjumbo-com-55570-196655.jpg";
import bannerEmpower from "../../assests/homepage/close-up-woman-working-laptop.jpg";
import bannerWork from "../../assests/homepage/happy-young-business-colleagues-using-laptop-computer.jpg";

const Banner = () => {
  const banners = [
    {
      title: "Building Careers & Connecting Talent",
      image: bannerCareer,
      alt: "Career building illustration",
    },
    {
      title: "Empowering Professionals for Success",
      image: bannerEmpower,
      alt: "Professional empowerment illustration",
    },
    {
      title: "Stop Searching... Start Working...",
      image: bannerWork,
      alt: "Job search success illustration",
    },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-[#1F497D] to-white text-white overflow-hidden py-24">
    

      <div className="bg-white relative max-w-5xl mx-auto w-full z-10 rounded-2xl shadow-2xl bg-gradient-to-r from-white via-[#dfe7f5] to-[#1F497D]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          className="w-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-12 md:gap-0">
                {/* Left Section */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 relative z-20 ">
                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight pl-5"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                       textShadow: "1px 2px 0 #292464ff, 1px 2px 0 #6767f5ff",
                    }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600">
                      {banner.title}
                    </span>
                  </h1>
                  {/* <p className="text-lg lg:text-xl text-gray-100 max-w-lg">
                    Your partner in talent acquisition and career growth.
                  </p> */}
                  {/* <button className="mt-8 px-8 py-3 bg-white text-[#1F497D] font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300">
                    Get Started
                  </button> */}
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 relative flex justify-center  z-10 md:pl-8">
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className=" rounded-xl shadow-xl w-[100%] md:w-[120%] lg:w-[110%] object-cover transform hover:scale-105 transition duration-700 ease-out"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
