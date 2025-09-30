import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../assests/training-images/training photos 1.jpeg';
import img2 from '../../assests/training-images/training photos 3.jpeg';
import img3 from '../../assests/training-images/training photos.jpeg';
import img4 from '../../assests/training-images/training photos 2.jpeg';

function TrainingCarousel() {
    const Images = [img1, img2, img3, img4];
    return (
        <div className='flex justify-center items-center'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                    type: "bullets",
                }}
                cssMode={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
                className="relative"
            >
                {Images?.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={logo}
                            alt={`Partner ${index}`}
                            className="mx-auto h-64 object-cover rounded-2xl shadow-lg"
                        />
                    </SwiperSlide>
                ))}
                {/* Custom Pagination */}
                <div className="swiper-pagination !relative !mt-6"></div>
            </Swiper>
        </div>
    )
}

export default TrainingCarousel;