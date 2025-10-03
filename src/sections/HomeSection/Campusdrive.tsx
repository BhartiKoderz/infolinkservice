
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import img1 from '../../assests/job-fair-images/Campus-drive-rural-area/2.png';
// import img2 from '../../assests/job-fair-images/KITS-College/1.png';
// import img3 from '../../assests/job-fair-images/wainganga-college/1.png';
// import img4 from "../../assests/job-fair-images/wainganga-college/1.png";
// import img5 from "../../assests/job-fair-images/KITS-College/1.png";
// import img6 from "../../assests/job-fair-images/KITS-College/2.png";
// import img7 from "../../assests/job-fair-images/KDK-college/1.png";
// import img8 from "../../assests/job-fair-images/KDK-college/2.png";
// import img9 from "../../assests/job-fair-images/KDK-college/3.png";
// import img10 from "../../assests/job-fair-images/KDK-college/4.png";
// import img11 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/1.png";
// import img12 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/2.png";
// import img13 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/3.png";
// import img14 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/7.jpg";
// import img15 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/11.png";

// const CampusDrive = () => {


//     const driveImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
//     return (
//         <section className="py-20 bg-gray-50" >
//             <div className="max-w-5xl mx-auto px-6">
//                 {/* Section Heading */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                         Job Fairs & <span className="text-[#1F497D]"> Campus Drives</span>
//                     </h2>
//                     <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                         Explore our campus drives designed to bridge the gap
//                         between students and industry leaders.
//                     </p>
//                 </div>

//                 {/* Cards */}
//                 <Swiper
//                     modules={[Navigation, Pagination, Autoplay]}
//                     spaceBetween={30}
//                     slidesPerView={3} pagination={{
//                         clickable: true,
//                         el: ".swiper-pagination",
//                         type: "bullets",
//                     }}

//                     autoplay={{ delay: 3000, disableOnInteraction: false }}
//                     loop={true}
//                     speed={1000}
//                     breakpoints={{
//                         640: {
//                             slidesPerView: 1,
//                         },
//                         768: {
//                             slidesPerView: 2,
//                         },
//                         1024: {
//                             slidesPerView: 3,
//                         },
//                     }}
//                     className="relative w-full"
//                 >
//                     {driveImages?.map((img, index) => (
//                         <SwiperSlide key={index}>
//                             {/* <div className="grid md:grid-cols-3 gap-8"> */}
//                             <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition  flex items-center justify-center">
//                                 <img src={img} alt={`Campus Drive ${index + 1}`} className=" object-cover h-48 w-full rounded-xl" />
//                             </div>
//                             {/* </div> */}
//                         </SwiperSlide>
//                     ))}
//                     <div className="swiper-pagination !relative !mt-6"></div>
//                 </Swiper>

//                 {/* View More Button */}
//                 <div className="text-center mt-12">
//                     <Link
//                         to="/job-fairs"
//                         className="uppercase border border-4 border-[#1F497D] text-[#1F497D] px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-900 hover:text-white  transition"
//                     >
//                         View More
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CampusDrive;

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from '../../assests/job-fair-images/Campus-drive-rural-area/2.png';
import img2 from '../../assests/job-fair-images/KITS-College/1.png';
import img3 from '../../assests/job-fair-images/wainganga-college/1.png';
import img4 from "../../assests/job-fair-images/wainganga-college/1.png";
import img5 from "../../assests/job-fair-images/KITS-College/1.png";
import img6 from "../../assests/job-fair-images/KITS-College/2.png";
import img7 from "../../assests/job-fair-images/KDK-college/1.png";
import img8 from "../../assests/job-fair-images/KDK-college/2.png";
import img9 from "../../assests/job-fair-images/KDK-college/3.png";
import img10 from "../../assests/job-fair-images/KDK-college/4.png";
import img11 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/1.png";
import img12 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/2.png";
import img13 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/3.png";
import img14 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/7.jpg";
import img15 from "../../assests/job-fair-images/Job-Fair-East-Nagpur/11.png";

const CampusDrive = () => {
  const driveImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Job Fairs & <span className="text-[#1F497D]"> Campus Drives</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our campus drives designed to bridge the gap
            between students and industry leaders.
          </p>
        </motion.div>

        {/* Cards */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative w-full"
        >
          {driveImages?.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt={`Campus Drive ${index + 1}`}
                  className="object-cover h-48 w-full rounded-xl"
                />
              </motion.div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !relative !mt-6"></div>
        </Swiper>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            to="/job-fairs"
            className="uppercase border border-4 border-[#1F497D] text-[#1F497D] px-6 py-2 rounded-xl font-bold shadow hover:bg-blue-900 hover:text-white transition"
          >
            View More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusDrive;
