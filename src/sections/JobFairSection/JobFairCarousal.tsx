import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface JobFair {
  title: string;
  image: string;
}

interface JobFairCarouselProps {
  title: string;
  jobFairs: JobFair[];
}

const JobFairCarousel: React.FC<JobFairCarouselProps> = ({
  title,
  jobFairs,
}) => {
  return (
    <section className="py-5 sm:py-10 bg-gray-50 mt-4 sm:mt-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <h2
          className="px-3 text-3xl md:text-5xl font-bold text-[#1F497D] mb-5"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {title}
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}

          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          {jobFairs.map((fair, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-100 rounded-2xl shadow-md overflow-hidden h-full mx-2 my-6">
                <img
                  src={fair.image}
                  alt={fair.title}
                  className="rounded-xl shadow-lg w-full max-w-md object-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination */}
          <div className="swiper-pagination !relative !mt-6"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default JobFairCarousel;
