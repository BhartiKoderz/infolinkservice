import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../assests/trustedpartners/set1_logo_0.png';
import img2 from '../../assests/trustedpartners/set1_logo_1.png';
import img3 from '../../assests/trustedpartners/set1_logo_2.png';
import img4 from '../../assests/trustedpartners/set1_logo_3.png';
import img5 from '../../assests/trustedpartners/set1_logo_4.png';
import img6 from '../../assests/trustedpartners/set1_logo_5.png';
import img7 from '../../assests/trustedpartners/set1_logo_6.png';
import img8 from '../../assests/trustedpartners/set1_logo_7.png';
import img9 from '../../assests/trustedpartners/set1_logo_8.png';
import img10 from '../../assests/trustedpartners/set1_logo_9.png';
import img11 from '../../assests/trustedpartners/set1_logo_10.png';
import img12 from '../../assests/trustedpartners/set1_logo_11.png';
import img13 from '../../assests/trustedpartners/set1_logo_12.png';
import img14 from '../../assests/trustedpartners/set2_logo_0.png';
import img15 from '../../assests/trustedpartners/set2_logo_1.png';
import img16 from '../../assests/trustedpartners/set2_logo_2.png';
import img17 from '../../assests/trustedpartners/set2_logo_3.png';
import img18 from '../../assests/trustedpartners/set2_logo_4.png';
import img19 from '../../assests/trustedpartners/set2_logo_5.png';
import img20 from '../../assests/trustedpartners/set2_logo_6.png';
import img21 from '../../assests/trustedpartners/set2_logo_7.png';
import img22 from '../../assests/trustedpartners/set2_logo_8.png';
import img23 from '../../assests/trustedpartners/set2_logo_9.png';
import img24 from '../../assests/trustedpartners/set2_logo_10.png';
import img25 from '../../assests/trustedpartners/set2_logo_11.png';
import img26 from '../../assests/trustedpartners/set2_logo_12.png';
import img27 from '../../assests/trustedpartners/set2_logo_13.png';
import img28 from '../../assests/trustedpartners/set2_logo_14.png';
import img29 from '../../assests/trustedpartners/set2_logo_15.png';
import img30 from '../../assests/trustedpartners/set2_logo_16.png';
import img31 from '../../assests/trustedpartners/set2_logo_17.png';
import img32 from '../../assests/trustedpartners/set2_logo_18.png';
import img33 from '../../assests/trustedpartners/set2_logo_19.png';
import img34 from '../../assests/trustedpartners/set2_logo_20.png';
import img35 from '../../assests/trustedpartners/set2_logo_21.png';
import img36 from '../../assests/trustedpartners/set2_logo_22.png';
import img37 from '../../assests/trustedpartners/set2_logo_23.png';
import img38 from '../../assests/trustedpartners/set2_logo_24.png';
import img39 from '../../assests/trustedpartners/set2_logo_25.png';
import img40 from '../../assests/trustedpartners/set2_logo_26.png';
import img41 from '../../assests/trustedpartners/set2_logo_27.png';
import img42 from '../../assests/trustedpartners/set2_logo_28.png';
import img43 from '../../assests/trustedpartners/set2_logo_29.png';
import img44 from '../../assests/trustedpartners/set2_logo_30.png';
import img45 from '../../assests/trustedpartners/set2_logo_31.png';
import img46 from '../../assests/trustedpartners/set2_logo_32.png';
import img47 from '../../assests/trustedpartners/set2_logo_33.png';
import img48 from '../../assests/trustedpartners/set2_logo_34.png';
import img49 from '../../assests/trustedpartners/set2_logo_35.png';
import img50 from '../../assests/trustedpartners/set2_logo_36.png';
import img51 from '../../assests/trustedpartners/set2_logo_37.png';
import img52 from '../../assests/trustedpartners/set2_logo_38.png';
import img53 from '../../assests/trustedpartners/set2_logo_39.png';
import img54 from '../../assests/trustedpartners/set2_logo_40.png';
import img55 from '../../assests/trustedpartners/set2_logo_41.png';
import img56 from '../../assests/trustedpartners/set2_logo_42.png';
import img57 from '../../assests/trustedpartners/set2_logo_43.png';
import img58 from '../../assests/trustedpartners/set2_logo_44.png';
import img59 from '../../assests/trustedpartners/set2_logo_45.png';
import img60 from '../../assests/trustedpartners/set2_logo_46.png';
import img61 from '../../assests/trustedpartners/set2_logo_47.png';
import img62 from '../../assests/trustedpartners/set2_logo_48.png';
import img63 from '../../assests/trustedpartners/set2_logo_49.png';
import img64 from '../../assests/trustedpartners/set2_logo_50.png';
import img65 from '../../assests/trustedpartners/set2_logo_51.png';
import img66 from '../../assests/trustedpartners/set2_logo_52.png';
import img67 from '../../assests/trustedpartners/set2_logo_53.png';
import img68 from '../../assests/trustedpartners/set2_logo_54.png';
import img69 from '../../assests/trustedpartners/set2_logo_55.png';
import img70 from '../../assests/trustedpartners/set2_logo_56.png';
import img71 from '../../assests/trustedpartners/set2_logo_57.png';
import img72 from '../../assests/trustedpartners/set2_logo_58.png';
import img73 from '../../assests/trustedpartners/set2_logo_59.png';
import img74 from '../../assests/trustedpartners/set2_logo_60.png';
import img75 from '../../assests/trustedpartners/set2_logo_61.png';
import img76 from '../../assests/trustedpartners/set2_logo_62.png';

function Partners() {
  const logos1 = [img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16, img17,
    img18, img19, img20, img21,img22, img23, img24, img25, img26, img27,
  ];

  const logos2 = [img28, img29, img30, img31, img32, img33, img34, img35, img36,
    img37, img38, img39, img40, img41, img42, img43, img44, img45, img46,
    img47, img48, img49, img50
  ];

  const logos3 = [ img51, img52, img53, img54, img55, img56, img57,
    img58, img59, img60, img61, img62, img63, img64, img65, img66, img67, img68,
    img69, img70, img71, img72, img73, img74, img75, img76
  ];

 
  return (
    <section className="py-10 ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Trusted<span className="text-[#1F497D]"> Partners</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We've built strong partnerships with industry leaders who trust us to deliver
            exceptional talent for their organizations.
          </p>
        </div>

        <div className="space-y-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            // speed={5000}
            cssMode={true}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 8,
              },
            }}
            className="relative"
          >
            {logos1.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Partner ${index}`}
                  className="mx-auto h-20 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            // speed={000}
            cssMode={true}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 8,
              },
            }}
            className="relative"
          >
            {logos2.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Partner ${index}`}
                  className="mx-auto h-20 object-contain"
                />
              </SwiperSlide>
            ))}

            {/* Custom Pagination */}
            <div className="swiper-pagination !relative !mt-6"></div>
          </Swiper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            // speed={3000}
            cssMode={true}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 8,
              },
            }}
            className="relative"
          >
            {logos3.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Partner ${index}`}
                  className="mx-auto h-20 object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Stats */}
        {/* <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="text-4xl font-bold text-[#1F497D] mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                1000+
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif" }}>Partner Companies</div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold text-green-600 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                95%
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif" }}>Placement Success Rate</div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl font-bold text-purple-600 mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                50K+
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif" }}>Successful Placements</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Partners;
