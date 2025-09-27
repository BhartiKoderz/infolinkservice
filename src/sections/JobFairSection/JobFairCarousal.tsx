import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface JobFair {
  title: string;
  image: string;
}

// Props type
interface JobFairCarouselProps {
  title: string;
  jobFairs: JobFair[];
}

const JobFairCarousel: React.FC<JobFairCarouselProps> = ({ title, jobFairs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-6 bg-gray-50 mt-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-[#1F497D] text-start mb-12 px-3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {title}
        </h2>

        <Slider {...settings}>
          {jobFairs.map((fair, index) => (
            <div key={index} className="px-3">
              <div className="flex flex-col md:flex-row w-full bg-blue-100 rounded-2xl shadow-md items-center justify-center gap-6 p-4">
                {/* Image */}
                <div className="w-full flex justify-center">
                  <img
                    src={fair.image}
                    alt={fair.title}
                    className="rounded-xl shadow-lg w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default JobFairCarousel;
